import React from 'react';
import { ACADEMIC_STEPS, Step } from '@/types/steps';
import { cn } from '@/lib/utils';
import { BookOpen, Box, Move, Accessibility, LucideIcon } from 'lucide-react';
import { Meteors } from '@/components/magicui/meteors';

interface StepSidebarProps {
  currentStepId: number;
  onStepSelect: (step: Step) => void;
}

const icons: LucideIcon[] = [BookOpen, Box, Move, Accessibility];

const StepSidebar: React.FC<StepSidebarProps> = ({ currentStepId, onStepSelect }) => {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-50 dark:bg-zinc-900 border-r relative overflow-hidden">
      <Meteors number={10} className="opacity-20" />
      
      {/* Header Fixed */}
      <div className="p-6 border-b relative z-10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shrink-0">
        <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">Módulo 1</h2>
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-1">Fundamentos Frontend</p>
      </div>

      {/* Steps List Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 relative z-10 custom-scrollbar">
        {ACADEMIC_STEPS.map((step, index) => {
          const Icon = icons[index] || BookOpen;
          const isActive = currentStepId === step.id;
          
          return (
            <button
              key={step.id}
              onClick={() => onStepSelect(step)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left border",
                isActive 
                  ? "bg-white dark:bg-zinc-800 shadow-lg border-blue-200 dark:border-blue-900 ring-1 ring-blue-50 dark:ring-blue-900/20" 
                  : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-zinc-800/50 hover:border-zinc-200 dark:hover:border-zinc-800"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                isActive ? "bg-blue-600 text-white" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
              )}>
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={cn(
                  "text-[10px] font-bold uppercase tracking-widest mb-0.5",
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-400"
                )}>
                  Paso {step.id}
                </div>
                <div className={cn(
                  "text-sm font-bold truncate",
                  isActive ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"
                )}>
                  {step.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepSidebar;