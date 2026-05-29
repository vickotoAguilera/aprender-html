'use client';

import React, { useEffect, useState } from 'react';

interface PreviewPaneProps {
    compiledHtml: string;
}

export default function PreviewPane({ compiledHtml }: PreviewPaneProps) {
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        // Debounce para evitar recargas constantes durante el tipeo
        const timer = setTimeout(() => {
            setSrcDoc(compiledHtml);
        }, 300);
        return () => clearTimeout(timer);
    }, [compiledHtml]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            background: '#ffffff',
        }}>
            {/* Header estilo navegador minimalista */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 16px',
                height: '35px',
                background: '#f8f9fa',
                borderBottom: '1px solid #e5e7eb',
                flexShrink: 0,
            }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div style={{
                    marginLeft: '12px',
                    flex: 1,
                    height: '22px',
                    background: '#fff',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '10px',
                    color: '#999',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 8px'
                }}>
                    localhost:3000/preview
                </div>
            </div>

            <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
                <iframe
                    srcDoc={srcDoc}
                    title="Vista previa en vivo"
                    onLoad={() => {
                        // Opcional: inyectar JS si es necesario
                    }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        background: 'white',
                    }}
                />
            </div>
        </div>
    );
}
