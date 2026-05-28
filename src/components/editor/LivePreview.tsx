'use client';

import React, { useEffect, useState } from 'react';
import { RetroGrid } from '@/components/magicui/retro-grid';

interface LivePreviewProps {
  code: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ code }) => {
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>
              body { 
                font-family: sans-serif; 
                margin: 0; 
                padding: 20px;
                background: white;
                color: #333;
              }
            </style>
          </head>
          <body>${code}</body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div className="flex-1 min-h-0 border rounded-xl overflow-hidden flex flex-col bg-white shadow-xl relative">
      <RetroGrid className="opacity-10" />
      <div className="bg-zinc-100 px-4 py-2 border-b flex justify-between items-center relative z-20 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 ml-2">Vista Previa</span>
        </div>
      </div>
      <div className="flex-1 relative min-h-0 z-10">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          className="absolute inset-0 w-full h-full border-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default LivePreview;