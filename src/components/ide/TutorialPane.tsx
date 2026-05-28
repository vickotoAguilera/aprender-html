import React from 'react';
import { BookOpen, Info, CheckCircle, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Step } from '@/types/steps';

interface TutorialPaneProps {
    currentStepId: number;
    onStepComplete: (id: number) => void;
    onLoadTemplate: (id: number) => void;
    activeTrack: 'academic' | 'external';
    setActiveTrack: (track: 'academic' | 'external') => void;
    steps: Step[];
}

export function TutorialPane({ currentStepId, onStepComplete, onLoadTemplate, activeTrack, setActiveTrack, steps }: TutorialPaneProps) {
    const currentStepIndex = steps.findIndex(s => s.id === currentStepId);
    const currentStep = steps[currentStepIndex] || steps[0];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', color: '#d1d5db', overflowY: 'auto' }} className="custom-scrollbar">
            <div style={{
                padding: '12px 16px',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#9ca3af',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span>Módulo Activo</span>
                <select 
                  value={activeTrack} 
                  onChange={(e) => setActiveTrack(e.target.value as 'academic' | 'external')}
                  style={{ background: '#181818', color: '#fff', border: '1px solid #3b82f6', borderRadius: '4px', padding: '2px 4px', fontSize: '10px' }}
                >
                  <option value="academic">Clases</option>
                  <option value="external">Retos Extra</option>
                </select>
            </div>

            <div style={{ padding: '20px' }}>
                {/* Selector de Lecciones (Botones 1-10) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '8px',
                    marginBottom: '24px'
                }}>
                    {steps.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => onLoadTemplate(step.id)}
                            style={{
                                padding: '8px 0',
                                borderRadius: '4px',
                                border: '1px solid',
                                borderColor: step.id === currentStepId ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                                background: step.id === currentStepId ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.02)',
                                color: step.id === currentStepId ? '#60a5fa' : '#9ca3af',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            title={step.title}
                        >
                            {step.id}
                        </button>
                    ))}
                </div>

                {/* Botón Acción Principal: Cargar Base */}
                <button
                    onClick={() => onLoadTemplate(currentStepId)}
                    style={{
                        width: '100%',
                        padding: '12px',
                        marginBottom: '24px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}
                >
                    <Play size={16} fill="white" /> Cargar Proyecto Base
                </button>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />

                {/* Contenido del paso actual */}
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)',
                        color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold'
                    }}>
                        {currentStep.id}
                    </div>
                    <h2 style={{ fontSize: '15px', color: '#fff', margin: 0, fontWeight: 600 }}>{currentStep.title}</h2>
                </div>

                <div style={{
                    padding: '16px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                    fontSize: '13px'
                }}>
                    <p style={{ margin: 0, color: '#d1d5db' }}>
                        {currentStep.academicContent}
                    </p>
                </div>

                {/* Navegación Inferior */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <button
                        disabled={currentStepIndex === 0}
                        onClick={() => onLoadTemplate(steps[currentStepIndex - 1].id)}
                        style={{
                            flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)',
                            background: 'none', color: '#9ca3af', cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '12px'
                        }}
                    >
                        <ChevronLeft size={14} /> Anterior
                    </button>
                    <button
                        disabled={currentStepIndex === steps.length - 1}
                        onClick={() => onLoadTemplate(steps[currentStepIndex + 1].id)}
                        style={{
                            flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)',
                            background: 'none', color: '#9ca3af', cursor: currentStepIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '12px'
                        }}
                    >
                        Siguiente <ChevronRight size={14} />
                    </button>
                </div>

                <button
                    onClick={() => onStepComplete(currentStepId + 1)}
                    style={{
                        width: '100%', padding: '10px', borderRadius: '6px',
                        background: 'rgba(52, 211, 153, 0.1)', color: '#34d399',
                        cursor: 'pointer', fontSize: '13px', fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        border: '1px solid rgba(52, 211, 153, 0.2)'
                    }}
                >
                    <CheckCircle size={16} /> Lección Completada
                </button>
            </div>
        </div>
    );
}
