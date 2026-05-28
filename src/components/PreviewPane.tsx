'use client';

import React, { useEffect, useState } from 'react';

interface PreviewPaneProps {
    code: string;
}

export default function PreviewPane({ code }: PreviewPaneProps) {
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSrcDoc(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 20px;
      background: #fff;
      color: #1a1a1a;
    }
  </style>
</head>
<body>${code}</body>
</html>`);
        }, 300);
        return () => clearTimeout(timer);
    }, [code]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            background: '#ffffff',
        }}>
            {/* Header estilo macOS */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 16px',
                height: '36px',
                background: '#f3f4f6',
                borderBottom: '1px solid #e5e7eb',
                flexShrink: 0,
            }}>
                {/* Botones macOS */}
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fc5c65' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fed330' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#26de81' }} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginLeft: '8px' }}>
                    Vista Previa en Vivo
                </span>
            </div>

            {/* iframe — ocupa todo el espacio restante */}
            <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
                <iframe
                    srcDoc={srcDoc}
                    title="Vista previa en vivo"
                    sandbox="allow-scripts"
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
