'use client';

import React, { useRef, useEffect } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';

interface CodePaneProps {
    code: string;
    onChange: (value: string | undefined) => void;
    fileName: string;
}

export default function CodePane({ code, onChange, fileName }: CodePaneProps) {
    const monaco = useMonaco();
    const editorRef = useRef<any>(null);

    // Linter Didáctico - Ejecuta reglas simples para dar feedback visual (subrayados rojos)
    useEffect(() => {
        if (!monaco || !editorRef.current) return;

        const model = editorRef.current.getModel();
        if (!model) return;

        // Reglas simples de linting educativo
        const markers: any[] = [];
        const lines = code.split('\n');

        lines.forEach((line, i) => {
            // Regla 1: Cerrar etiquetas mal formateadas (ej. < /div>)
            const badCloseSpace = line.match(/<\s+\//);
            if (badCloseSpace) {
                markers.push({
                    severity: monaco.MarkerSeverity.Error,
                    message: 'Atento aquí: No debe haber espacios entre el < y la barra (/) en una etiqueta de cierre. Debería ser </',
                    startLineNumber: i + 1,
                    startColumn: badCloseSpace.index !== undefined ? badCloseSpace.index + 1 : 1,
                    endLineNumber: i + 1,
                    endColumn: badCloseSpace.index !== undefined ? badCloseSpace.index + badCloseSpace[0].length + 1 : 5,
                });
            }

            // Regla 2: Uso de mayúsculas en etiquetas HTML
            const uppercaseTag = line.match(/(<\/?)([A-Z]+)/);
            if (uppercaseTag) {
                markers.push({
                    severity: monaco.MarkerSeverity.Warning,
                    message: 'Tip: Por buenas prácticas de HTML5, las etiquetas siempre deben escribirse en minúsculas.',
                    startLineNumber: i + 1,
                    startColumn: uppercaseTag.index !== undefined ? uppercaseTag.index + 1 : 1,
                    endLineNumber: i + 1,
                    endColumn: uppercaseTag.index !== undefined ? uppercaseTag.index + uppercaseTag[0].length + 1 : 5,
                });
            }

            // Regla 3: Falta de comillas en atributos (básico)
            const noQuotesAttr = line.match(/[a-zA-Z\-]+=[^"'\s>]+/);
            if (noQuotesAttr) {
                markers.push({
                    severity: monaco.MarkerSeverity.Error,
                    message: 'Tip: Siempre encierra el valor de los atributos entre comillas dobles (ej. class="mi-clase").',
                    startLineNumber: i + 1,
                    startColumn: noQuotesAttr.index !== undefined ? noQuotesAttr.index + 1 : 1,
                    endLineNumber: i + 1,
                    endColumn: noQuotesAttr.index !== undefined ? noQuotesAttr.index + noQuotesAttr[0].length + 1 : 5,
                });
            }
        });

        monaco.editor.setModelMarkers(model, 'linter-educativo', markers);
    }, [code, monaco]);

    const handleEditorDidMount = (editor: any) => {
        editorRef.current = editor;
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            background: '#1e1e1e',
            borderRight: '1px solid rgba(255,255,255,0.06)',
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                height: '36px',
                background: '#252526',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                flexShrink: 0,
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#1e1e1e',
                    padding: '4px 12px',
                    borderTop: '2px solid #3b82f6',
                    borderRight: '1px solid #333',
                    borderLeft: '1px solid #333',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#e5e7eb',
                    transform: 'translateY(1px)' // tabs visual effect
                }}>
                    {fileName.endsWith('.html') ? '📄' : '🎨'} {fileName}
                </div>
            </div>

            {/* Monaco */}
            <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Editor
                        height="100%"
                        language={fileName.endsWith('.css') ? 'css' : 'html'}
                        theme="vs-dark"
                        value={code}
                        onChange={onChange}
                        onMount={handleEditorDidMount}
                        options={{
                            minimap: { enabled: false },
                            automaticLayout: true,
                            fixedOverflowWidgets: true,
                            fontSize: 14,
                            lineHeight: 24,
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                            padding: { top: 16, bottom: 16 },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
