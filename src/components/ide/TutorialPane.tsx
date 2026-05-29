'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { Step } from '@/types/steps';
import { STUDY_STEPS } from '@/data/modules/studyRuta';

interface TutorialPaneProps {
    currentStepId: number;
    onStepComplete: (nextStepId: number) => void;
    onLoadTemplate: (stepId: number) => void;
    activeTrack: 'academic' | 'external' | 'study';
    setActiveTrack: (track: 'academic' | 'external' | 'study') => void;
    steps: Step[];
    compactMode?: boolean;
}

export function TutorialPane({
    currentStepId,
    onStepComplete,
    onLoadTemplate,
    activeTrack,
    setActiveTrack,
    steps,
    compactMode
}: TutorialPaneProps) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', color: '#d1d5db', overflowY: 'auto' }} className="custom-scrollbar">
            <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(0,0,0,0.1)'
            }}>
                <div style={{ fontSize: '10px', color: '#6b7280', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 700 }}>Módulo</div>
                <select
                    value={activeTrack}
                    onChange={(e) => setActiveTrack(e.target.value as 'academic' | 'external' | 'study')}
                    style={{
                        width: '100%',
                        background: '#181818',
                        color: '#3b82f6',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '6px',
                        padding: '6px',
                        fontSize: '11px',
                        outline: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <option value="academic">📚 Clases</option>
                    <option value="external">⭐ Retos Extra</option>
                    <option value="study">📝 Estudiar Prueba</option>
                </select>
            </div>

            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {steps.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => onLoadTemplate(step.id)}
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '1px solid',
                                borderColor: currentStepId === step.id ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                                background: currentStepId === step.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                color: currentStepId === step.id ? '#3b82f6' : '#9ca3af',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '12px'
                            }}
                        >
                            {step.id}
                        </button>
                    ))}
                </div>

                {!compactMode && steps.find(s => s.id === currentStepId) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.05)',
                            borderRadius: '8px',
                            padding: '16px',
                            border: '1px solid rgba(59, 130, 246, 0.1)'
                        }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#f3f4f6' }}>
                                {steps.find(s => s.id === currentStepId)?.title}
                            </h3>
                            <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af', lineHeight: '1.5' }}>
                                {steps.find(s => s.id === currentStepId)?.description}
                            </p>
                        </div>

                        <button
                            onClick={() => onLoadTemplate(currentStepId)}
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                color: 'white',
                                border: 'none',
                                padding: '12px',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            <Play size={18} fill="currentColor" />
                            Cargar Proyecto Base
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
