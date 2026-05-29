'use client';

import React, { useState } from 'react';
import { Sparkles, Loader2, MessageCircle, Info, BookOpen } from 'lucide-react';
import { analyzeCode } from '@/services/groqClient';
import type { Step } from '@/types/steps';

interface TutorPaneProps {
    code: string;
    currentStep: Step;
    activeTrack: 'academic' | 'external' | 'study';
}

export function TutorPane({ code, currentStep, activeTrack }: TutorPaneProps) {
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        setLoading(true);
        setAnalysis(null);
        const result = await analyzeCode(code, currentStep.title, activeTrack);
        setAnalysis(result);
        setLoading(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#1e1e2e' }}>
            {/* Header del pane */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                flexShrink: 0,
                background: '#16161e',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '28px', height: '28px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Sparkles size={14} color="white" />
                    </div>
                    <div>
                        <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#f5f5f7' }}>Tutor IA</p>
                    </div>
                </div>
            </div>

            {/* Cuerpo — scrolleable */}
            <div className="custom-scrollbar" style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BookOpen size={14} color="#6b7280" />
                    <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Contexto: {currentStep.title}
                    </span>
                </div>

                <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%',
                        padding: '10px 16px', borderRadius: '8px', border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer', fontSize: '13px', fontWeight: 700,
                        background: loading ? 'rgba(59,130,246,0.3)' : 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        color: '#fff', opacity: loading ? 0.7 : 1, transition: 'all 0.2s', flexShrink: 0,
                    }}
                >
                    {loading ? (
                        <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Revisando...</>
                    ) : (
                        <><Sparkles size={16} /> Analizar mi código</>
                    )}
                </button>

                {analysis && (
                    <div style={{ padding: '14px 16px', background: '#252536', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                            <MessageCircle size={13} color="#a78bfa" />
                            <span style={{ fontSize: '11px', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Feedback del Tutor
                            </span>
                        </div>
                        {analysis.split('\n').filter(l => l.trim()).map((line, i) => (
                            <p key={i} style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#d1d5db', lineHeight: '1.6', wordBreak: 'break-word' }}>
                                {line}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}
