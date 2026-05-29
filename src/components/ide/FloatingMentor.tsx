'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Minus, GripHorizontal, Sparkles, Check, ChevronRight, X, Send, Loader2, ChevronLeft } from 'lucide-react';
import { chatWithMentor } from '@/services/groqClient';
import type { UserFile } from './ActivityBar';
import type { Step } from '@/types/steps';

interface FloatingMentorProps {
    currentTrack: 'academic' | 'external' | 'study';
    currentStepId: number;
    onNextStep: () => void;
    onPrevStep: () => void;
    onCompleteStep: () => void;
    onLoadTemplate?: () => void;
    currentStepData: Step;
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

export function FloatingMentor({
    currentTrack,
    currentStepId,
    onNextStep,
    onPrevStep,
    onCompleteStep,
    onLoadTemplate,
    currentStepData
}: FloatingMentorProps) {
    // Estado de UI
    const [minimized, setMinimized] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 340, height: 500 });
    const [showInstructions, setShowInstructions] = useState(true);

    // Estado del Chat
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [chatInput, setChatInput] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    // Drag logic (Mover ventana)
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({ x: window.innerWidth - 380, y: window.innerHeight - 550 });
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        isDragging.current = false;
        isResizing.current = false;
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    // Resize logic (Cambiar tamaño)
    const isResizing = useRef(false);
    const resizeStart = useRef({ width: 0, height: 0, x: 0, y: 0 });

    const handleResizeDown = (e: React.PointerEvent) => {
        e.stopPropagation();
        isResizing.current = true;
        resizeStart.current = { width: size.width, height: size.height, x: e.clientX, y: e.clientY };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handleGlobalPointerMove = (e: React.PointerEvent) => {
        if (isDragging.current) {
            setPosition({
                x: e.clientX - dragStart.current.x,
                y: e.clientY - dragStart.current.y
            });
        } else if (isResizing.current) {
            const deltaX = e.clientX - resizeStart.current.x;
            const deltaY = e.clientY - resizeStart.current.y;
            setSize({
                width: Math.max(300, resizeStart.current.width + deltaX),
                height: Math.max(200, resizeStart.current.height + deltaY)
            });
        }
    };

    const handleSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!chatInput.trim() || isChatLoading) return;

        const userMsg = chatInput.trim();
        setChatInput('');
        const newHistory: ChatMessage[] = [...chatHistory, { role: 'user', content: userMsg }];
        setChatHistory(newHistory);
        setIsChatLoading(true);

        try {
            const response = await chatWithMentor(newHistory, "Contexto activo", currentTrack);
            setChatHistory([...newHistory, { role: 'assistant', content: response }]);
        } catch (err) {
            console.error(err);
        } finally {
            setIsChatLoading(false);
        }
    };

    const mentorTitle = currentTrack === 'study' ? "Instructor Senior" : "Mentor Pro";

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: minimized ? '250px' : `${size.width}px`,
                height: minimized ? 'auto' : `${size.height}px`,
                backgroundColor: 'rgba(22, 22, 30, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: minimized ? 'width 0.3s' : 'none',
            }}
            onPointerMove={handleGlobalPointerMove}
        >
            {/* BARRA SUPERIOR (Drag handle) */}
            <div
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                style={{
                    padding: '10px 14px',
                    background: 'rgba(0,0,0,0.3)',
                    cursor: 'grab',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    touchAction: 'none'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={14} color="#10b981" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#e5e7eb', userSelect: 'none' }}>
                        {mentorTitle}
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                        onClick={() => setShowInstructions(!showInstructions)}
                        style={{
                            background: showInstructions ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                            border: 'none',
                            color: 'white',
                            borderRadius: '4px',
                            padding: '2px 10px',
                            fontSize: '10px',
                            cursor: 'pointer',
                            fontWeight: 700
                        }}
                    >
                        {showInstructions ? 'CHAT' : 'MISIÓN'}
                    </button>
                    <button
                        onClick={() => setMinimized(!minimized)}
                        style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}
                    >
                        {minimized ? <GripHorizontal size={14} /> : <Minus size={14} />}
                    </button>
                </div>
            </div>

            {/* CONTENIDO principal */}
            {!minimized && (
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minHeight: 0 }}>

                    {showInstructions ? (
                        <div style={{
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            padding: '12px',
                            flex: 1,
                            overflowY: 'auto'
                        }} className="custom-scrollbar">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                <div style={{
                                    width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '10px'
                                }}>
                                    {currentStepData.id}
                                </div>
                                <h4 style={{ margin: 0, fontSize: '14px', color: '#fff' }}>{currentStepData.title}</h4>
                            </div>
                            <div
                                style={{ fontSize: '13px', color: '#d1d5db', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}
                                dangerouslySetInnerHTML={{ __html: currentStepData.academicContent?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code style="background: rgba(139, 92, 246, 0.2); padding: 2px 4px; border-radius: 4px; color: #a78bfa;">$1</code>') || '' }}
                            />
                        </div>
                    ) : (
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }} className="custom-scrollbar">
                            {chatHistory.length === 0 && <p style={{ color: '#666', textAlign: 'center', marginTop: '100px' }}>¿Dudas? Pregúntame.</p>}
                            {chatHistory.map((msg, i) => (
                                <div key={i} style={{
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    padding: '8px 12px',
                                    borderRadius: '12px',
                                    background: msg.role === 'user' ? '#3b82f6' : '#252536',
                                    color: 'white',
                                    fontSize: '12px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {msg.content}
                                </div>
                            ))}
                            {isChatLoading && <Loader2 size={14} className="animate-spin" color="#3b82f6" />}
                            <div ref={chatEndRef} />
                        </div>
                    )}

                    {/* INTERFACE DE NAVEGACIÓN Y ACCIÓN */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                        {showInstructions && currentStepData.template && (
                            <button
                                onClick={onLoadTemplate}
                                style={{
                                    width: '100%',
                                    background: 'rgba(59, 130, 246, 0.15)',
                                    border: '1px solid #3b82f6',
                                    borderRadius: '6px',
                                    padding: '10px',
                                    color: '#60a5fa',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    marginBottom: '4px'
                                }}
                            >
                                <Sparkles size={14} /> CARGAR ARCHIVOS BASE
                            </button>
                        )}

                        {!showInstructions ? (
                            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '6px' }}>
                                <input
                                    type="text"
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    placeholder="Escribe tu duda..."
                                    style={{ flex: 1, background: '#1e1e2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '8px', color: 'white', fontSize: '13px' }}
                                />
                                <button type="submit" style={{ background: '#3b82f6', border: 'none', borderRadius: '6px', padding: '8px 12px' }}><Send size={14} color="white" /></button>
                            </form>
                        ) : (
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button onClick={onPrevStep} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', padding: '8px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ChevronLeft size={16} /></button>
                                <button
                                    onClick={onCompleteStep}
                                    style={{
                                        flex: 4,
                                        background: 'linear-gradient(135deg, #10b981, #059669)',
                                        border: 'none',
                                        borderRadius: '6px',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '12px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <Check size={16} /> LECCIÓN COMPLETADA
                                </button>
                                <button onClick={onNextStep} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', padding: '8px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ChevronRight size={16} /></button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Resize Handle */}
            {!minimized && (
                <div
                    onPointerDown={handleResizeDown}
                    onPointerUp={handlePointerUp}
                    style={{
                        position: 'absolute',
                        right: '1px',
                        bottom: '1px',
                        width: '15px',
                        height: '15px',
                        cursor: 'nwse-resize',
                        zIndex: 10,
                        opacity: 0.5
                    }}
                >
                    <div style={{ width: '100%', height: '100%', borderRight: '2px solid white', borderBottom: '2px solid white' }} />
                </div>
            )}
        </div>
    );
}
