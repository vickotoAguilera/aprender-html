'use client';

import React, { useRef, useEffect } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { UserFile } from './ide/ActivityBar';

interface CodePaneProps {
    file: UserFile;
    onCodeChange: (value: string | undefined) => void;
}

export default function CodePane({ file, onCodeChange }: CodePaneProps) {
    const monaco = useMonaco();
    const editorRef = useRef<any>(null);

    // Linter Didáctico
    useEffect(() => {
        if (!monaco || !editorRef.current) return;

        const model = editorRef.current.getModel();
        if (!model) return;

        const markers: any[] = [];
        const content = file.content;
        const lines = content.split('\n');

        lines.forEach((line, i) => {
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
        });

        monaco.editor.setModelMarkers(model, 'linter-educativo', markers);
    }, [file.content, monaco]);

    const handleEditorDidMount = (editor: any) => {
        editorRef.current = editor;
    };

    return (
        <div style={{ flex: 1, minHeight: 0, position: 'relative', background: '#1e1e1e' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
                <Editor
                    height="100%"
                    language={file.name.endsWith('.css') ? 'css' : file.name.endsWith('.js') ? 'javascript' : 'html'}
                    theme="vs-dark"
                    value={file.content}
                    onChange={onCodeChange}
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
                        colorDecorators: true,
                    }}
                />
            </div>
        </div>
    );
}
