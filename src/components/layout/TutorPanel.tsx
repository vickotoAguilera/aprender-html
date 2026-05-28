'use client';

import React, { useState } from 'react';
import { analyzeCode } from '@/services/groqClient';
import { Sparkles, MessageCircle, Info, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

interface TutorPanelProps {
  code: string;
  academicContent: string;
  stepTitle: string;
}

const TutorPanel: React.FC<TutorPanelProps> = ({ code, academicContent, stepTitle }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const result = await analyzeCode(code, stepTitle);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    // Panel raíz: altura fija por el padre (aside con h-full overflow-hidden)
    <div className="w-full h-full border-l bg-zinc-50 dark:bg-zinc-900 flex flex-col overflow-hidden">

      {/* Header fijo — nunca crece */}
      <div className="flex-none p-4 border-b bg-white dark:bg-zinc-900">
        <h3 className="font-bold flex items-center gap-2">
          <Info size={16} className="text-blue-600" />
          Teoría del Paso
        </h3>
      </div>

      {/* Cuerpo scrolleable — ocupa el espacio restante sin salirse */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-6 custom-scrollbar">

        {/* Bloque de teoría */}
        <div className="flex-none bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed italic">
            &ldquo;{academicContent}&rdquo;
          </p>
        </div>

        {/* Botón de análisis */}
        <div className="flex-none">
          <ShimmerButton
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:scale-100"
            background="linear-gradient(to right, #2563eb, #4f46e5)"
            shimmerColor="#ffffff"
          >
            {loading ? (
              <Loader2 className="animate-spin mr-2" size={18} />
            ) : (
              <Sparkles className="mr-2" size={18} />
            )}
            {loading ? 'Consultando Tutor...' : 'Analizar mi código'}
          </ShimmerButton>
        </div>

        {/* Feedback del tutor — caja con scroll propio */}
        {analysis && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-wider">
              <MessageCircle size={14} />
              Feedback del Tutor
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl border shadow-sm overflow-hidden">
              <div className="overflow-y-auto max-h-64 p-4 text-sm text-zinc-700 dark:text-zinc-300 prose dark:prose-invert max-w-none custom-scrollbar">
                {analysis.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0">{line}</p>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TutorPanel;