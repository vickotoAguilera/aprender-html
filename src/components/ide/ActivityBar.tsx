'use client';

import React, { useState } from 'react';
import { Files, BookOpen, Sparkles, Plus, FileCode, Check, AlertCircle, Book } from 'lucide-react';

export type SidebarMode = 'explorer' | 'tutorial' | 'tutor' | 'glossary';

export type UserFile = {
    id: string;
    name: string;
    content: string;
    language: 'html' | 'css' | 'javascript';
};

interface ActivityBarProps {
    activeMode: SidebarMode;
    onSelectMode: (mode: SidebarMode) => void;
}

export function ActivityBar({ activeMode, onSelectMode }: ActivityBarProps) {
    const modes: { id: SidebarMode; icon: React.ReactNode; label: string }[] = [
        { id: 'explorer', icon: <Files size={24} />, label: 'Explorador' },
        { id: 'tutorial', icon: <BookOpen size={24} />, label: 'Tutorial' },
        { id: 'tutor', icon: <Sparkles size={24} />, label: 'Tutor IA' },
        { id: 'glossary', icon: <Book size={24} />, label: 'Glosario' },
    ];

    return (
        <div style={{
            width: '48px',
            height: '100%',
            background: '#181818',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '16px',
            gap: '12px',
            flexShrink: 0
        }}>
            {modes.map(mode => (
                <button
                    key={mode.id}
                    onClick={() => onSelectMode(mode.id)}
                    title={mode.label}
                    style={{
                        position: 'relative',
                        background: 'none',
                        border: 'none',
                        color: activeMode === mode.id ? '#ffffff' : '#6b7280',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'color 0.2s'
                    }}
                >
                    {mode.icon}
                    {activeMode === mode.id && (
                        <div style={{
                            position: 'absolute',
                            left: '-8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '2px',
                            height: '24px',
                            background: '#3b82f6',
                        }} />
                    )}
                </button>
            ))}
        </div>
    );
}

interface ExplorerProps {
    files: UserFile[];
    activeFileId: string;
    onSelectFile: (id: string) => void;
    onCreateFile: (name: string) => void;
}

export function ExplorerPane({ files, activeFileId, onSelectFile, onCreateFile }: ExplorerProps) {
    const [isCreating, setIsCreating] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const [validationTip, setValidationTip] = useState<{ type: 'error' | 'success', msg: string } | null>(null);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setNewFileName(val);

        if (val.trim() === '') {
            setValidationTip(null);
            return;
        }

        if (val !== val.toLowerCase()) {
            setValidationTip({ type: 'error', msg: 'Tip: Los archivos web siempre deben ir en minúsculas.' });
        } else if (val.includes(' ')) {
            setValidationTip({ type: 'error', msg: 'Tip: No uses espacios, usa guiones (ej. mi-archivo.html).' });
        } else if (!val.includes('.')) {
            setValidationTip({ type: 'error', msg: 'Añade una extensión (ej. .html, .css).' });
        } else {
            setValidationTip({ type: 'success', msg: '¡Excelente formato de nombre!' });
        }
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        if (newFileName && validationTip?.type !== 'error') {
            onCreateFile(newFileName);
            setIsCreating(false);
            setNewFileName('');
            setValidationTip(null);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', color: '#d1d5db' }}>
            <div style={{
                padding: '12px 16px',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                Explorador
                <button
                    onClick={() => setIsCreating(true)}
                    title="Nuevo Archivo"
                    style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
                >
                    <Plus size={14} />
                </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                {/* Input de creación dinámico */}
                {isCreating && (
                    <div style={{ padding: '0 8px', marginBottom: '8px' }}>
                        <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <input
                                autoFocus
                                type="text"
                                value={newFileName}
                                onChange={handleNameChange}
                                onBlur={() => { if (!newFileName) setIsCreating(false); }}
                                placeholder="nuevo-archivo.html"
                                style={{
                                    width: '100%',
                                    background: '#181818',
                                    border: '1px solid #3b82f6',
                                    color: 'white',
                                    padding: '4px 8px',
                                    outline: 'none',
                                    fontSize: '13px'
                                }}
                            />
                            {validationTip && (
                                <div style={{
                                    fontSize: '11px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    color: validationTip.type === 'error' ? '#fbbf24' : '#34d399',
                                    background: 'rgba(0,0,0,0.2)',
                                    padding: '4px',
                                    borderRadius: '4px'
                                }}>
                                    {validationTip.type === 'error' ? <AlertCircle size={12} /> : <Check size={12} />}
                                    {validationTip.msg}
                                </div>
                            )}
                        </form>
                    </div>
                )}

                {/* Lista de archivos */}
                {files.map(file => (
                    <div
                        key={file.id}
                        onClick={() => onSelectFile(file.id)}
                        style={{
                            padding: '6px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            background: file.id === activeFileId ? 'rgba(59,130,246,0.15)' : 'transparent',
                            color: file.id === activeFileId ? '#93c5fd' : '#d1d5db',
                            fontSize: '13px',
                            userSelect: 'none'
                        }}
                    >
                        <FileCode size={14} color={file.name.endsWith('.html') ? '#e34f26' : '#264de4'} />
                        {file.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
