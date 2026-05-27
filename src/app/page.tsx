'use client';

import React, { useState, useMemo, useEffect } from 'react';
import CodePane from '@/components/CodePane';
import PreviewPane from '@/components/PreviewPane';
import { ActivityBar, ExplorerPane, type SidebarMode, type UserFile } from '@/components/ide/ActivityBar';
import { TutorialPane } from '@/components/ide/TutorialPane';
import { TutorPane } from '@/components/ide/TutorPane';
import { FloatingMentor } from '@/components/ide/FloatingMentor';
import { GlossaryPane } from '@/components/ide/GlossaryPane';
import { ACADEMIC_STEPS } from '@/data/modules/classRuta';
import { EXTERNAL_STEPS } from '@/data/modules/externalRuta';

export default function Home() {
  const [activeMode, setActiveMode] = useState<SidebarMode>('explorer');
  const [activeTrack, setActiveTrack] = useState<'academic' | 'external'>('academic');
  
  const currentStepList = activeTrack === 'academic' ? ACADEMIC_STEPS : EXTERNAL_STEPS;
  const [currentStepId, setCurrentStepId] = useState<number>(1);

  // Archivos dinámicos
  const [files, setFiles] = useState<UserFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<string>('');

  // Helpers derivados
  const activeFile = files.find(f => f.id === activeFileId);
  const currentStep = currentStepList.find(s => s.id === currentStepId) || currentStepList[0];

  const handleCreateFile = (name: string) => {
    const isCss = name.endsWith('.css');
    const newFile: UserFile = {
      id: Date.now().toString(),
      name,
      content: isCss ? '/* Añade tus estilos aquí */\n\nbody {\n  background: #f0f0f0;\n}' : '<!-- Tu código HTML aquí -->\n',
      language: isCss ? 'css' : 'html'
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
  };

  const handleCodeChange = (newVal: string | undefined) => {
    if (newVal === undefined) return;
    setFiles(prev => prev.map(f => f.id === activeFileId ? { ...f, content: newVal } : f));
  };

  const handleStepComplete = (nextStepId: number) => {
    const nextStep = currentStepList.find(s => s.id === nextStepId);
    if (nextStep) {
      setCurrentStepId(nextStepId);
    }
  };

  const handleLoadTemplate = (stepId: number) => {
    const targetStep = currentStepList.find(s => s.id === stepId);
    if (!targetStep) return;

    // Crear el archivo index.html
    const indexFile: UserFile = {
      id: 'index-html',
      name: 'index.html',
      content: targetStep.template,
      language: 'html'
    };

    // Crear archivos adicionales if any (css, js)
    const extraFiles: UserFile[] = (targetStep.additionalFiles || []).map(f => ({
      id: `file-${f.name}`,
      name: f.name,
      content: f.content,
      language: f.language
    }));

    const allNewFiles = [indexFile, ...extraFiles];

    // Actualizar estado general
    setFiles(allNewFiles);
    setActiveFileId(indexFile.id);
    setCurrentStepId(stepId);
  };

  // Silenciar el error de cancelación de Monaco que Next.js captura incorrectamente como fatal
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.type === 'cancelation' || event.reason?.message === 'Canceled') {
        event.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  // Compilar el HTML para el preview combinando el index.html, cualquier .css y cualquier .js que exista
  const compiledHtml = useMemo(() => {
    const htmlFile = files.find(f => f.name.endsWith('.html'));
    const cssFiles = files.filter(f => f.name.endsWith('.css'));
    const jsFiles = files.filter(f => f.name.endsWith('.js') || f.name.endsWith('.javascript'));

    if (!htmlFile) return `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: #0f172a; color: white; font-family: sans-serif;">
        <div style="text-align: center;">
          <h1 style="font-size: 24px;">Lienzo Vacío</h1>
          <p style="color: #64748b;">Selecciona una lección y presiona "Cargar Base" 🚀</p>
        </div>
      </div>
    `;

    let htmlContent = htmlFile.content;

    // Inyectar el CSS de los archivos adicionales automáticamente
    if (cssFiles.length > 0) {
      const combinedCss = cssFiles.map(f => f.content).join('\n');
      const styleTag = `<style>\n${combinedCss}\n</style>`;

      if (htmlContent.includes('</head>')) {
        htmlContent = htmlContent.replace('</head>', `${styleTag}\n</head>`);
      } else {
        htmlContent += `\n${styleTag}`;
      }
    }

    // Inyectar el JS de los archivos adicionales automáticamente
    if (jsFiles.length > 0) {
      const combinedJs = jsFiles.map(f => f.content).join('\n');
      const scriptTag = `<script>\n${combinedJs}\n</script>`;

      if (htmlContent.includes('</body>')) {
        htmlContent = htmlContent.replace('</body>', `${scriptTag}\n</body>`);
      } else {
        htmlContent += `\n${scriptTag}`;
      }
    }

    return htmlContent;
  }, [files]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden', /* ← Bloquéo absoluto a nivel sistema para prevenir el scroll inifinito */
        background: '#1e1e2e',
      }}
    >
      {/* 1. Activity Bar */}
      <ActivityBar activeMode={activeMode} onSelectMode={setActiveMode} />

      {/* 2. Sidebar (Paneles Izquierdos) */}
      <div style={{
        width: '320px', /* ← Un poco más ancho para los botones */
        borderRight: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
        background: '#1e1e2e',
        overflow: 'hidden'
      }}>
        {activeMode === 'explorer' && (
          <ExplorerPane
            files={files}
            activeFileId={activeFileId}
            onSelectFile={setActiveFileId}
            onCreateFile={handleCreateFile}
          />
        )}
        {activeMode === 'tutorial' && (
          <TutorialPane
            currentStepId={currentStepId}
            onStepComplete={handleStepComplete}
            onLoadTemplate={handleLoadTemplate}
            activeTrack={activeTrack}
            setActiveTrack={(t) => { setActiveTrack(t); setCurrentStepId(1); }}
            steps={currentStepList}
          />
        )}
        {activeMode === 'glossary' && <GlossaryPane />}
        {activeMode === 'tutor' && (
          <TutorPane
            code={activeFile?.content || ''}
            currentStep={currentStep}
            activeTrack={activeTrack}
          />
        )}
      </div>

      {/* 3. Editor Area (Split panes) */}
      <div style={{ flex: 1, minWidth: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        {/* Editor (Monaco) */}
        {activeFile ? (
          <CodePane
            code={activeFile.content}
            onChange={handleCodeChange}
            fileName={activeFile.name}
          />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
            Selecciona o crea un archivo web para editar.
          </div>
        )}

        {/* Vista Previa en Vivo (iframe) */}
        <PreviewPane code={compiledHtml} />
      </div>

      {/* Mentor Flotante Arrastrable */}
      <FloatingMentor 
        files={files} 
        currentStepId={currentStepId} 
        activeTrack={activeTrack}
        currentStepDynamic={currentStep}
      />
    </div>
  );
}