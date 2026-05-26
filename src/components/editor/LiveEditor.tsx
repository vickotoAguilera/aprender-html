'use client';
import React from 'react';
import Editor from '@monaco-editor/react';

interface LiveEditorProps {
  initialCode: string;
  onChange: (code: string | undefined) => void;
}

const LiveEditor: React.FC<LiveEditorProps> = ({ initialCode, onChange }) => (
  <div className="flex-1 min-h-0 border rounded-xl overflow-hidden flex flex-col shadow-xl bg-[#1e1e1e] w-full h-full">
    <div className="bg-[#252526] px-4 py-2 border-b border-white/5 flex justify-between items-center shrink-0">
      <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Editor de Código</span>
      <span className="text-[10px] font-mono text-zinc-500">index.html</span>
    </div>
    
    {/* Contenedor relativo estricto */}
    <div className="flex-1 relative min-h-0 overflow-hidden">
      {/* Contenedor absoluto que fuerza a Monaco a respetar los límites */}
      <div className="absolute inset-0">
        <Editor
          height="100%"
          defaultLanguage="html"
          theme="vs-dark"
          value={initialCode}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
            fixedOverflowWidgets: true
          }}
        />
      </div>
    </div>
  </div>
);

export default LiveEditor;