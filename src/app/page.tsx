'use client';

import React, { useState, useMemo, useEffect } from 'react';
import CodePane from '@/components/CodePane';
import PreviewPane from '@/components/PreviewPane';
import { ActivityBar, ExplorerPane, type SidebarMode, type UserFile } from '@/components/ide/ActivityBar';
import { TutorialPane } from '@/components/ide/TutorialPane';
import { TutorPane } from '@/components/ide/TutorPane';
import { chatWithMentor } from '@/services/groqClient';
import JSZip from 'jszip';
import { Download, Upload, ImagePlus } from 'lucide-react';
import { FloatingMentor } from '@/components/ide/FloatingMentor';
import { GlossaryPane } from '@/components/ide/GlossaryPane';
import { ACADEMIC_STEPS } from '@/data/modules/classRuta';
import { EXTERNAL_STEPS } from '@/data/modules/externalRuta';
import { STUDY_STEPS } from '@/data/modules/studyRuta';

export default function Home() {
  const [activeMode, setActiveMode] = useState<SidebarMode>('explorer');
  const [activeTrack, setActiveTrack] = useState<'academic' | 'external' | 'study'>('academic');

  const currentStepList =
    activeTrack === 'academic' ? ACADEMIC_STEPS :
      activeTrack === 'external' ? EXTERNAL_STEPS :
        STUDY_STEPS;
  const [currentStepId, setCurrentStepId] = useState<number>(1);

  // Archivos dinámicos
  const [files, setFiles] = useState<UserFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<string>('');
  const [openFileIds, setOpenFileIds] = useState<string[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [editorWidth, setEditorWidth] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleSelectFile = (id: string) => {
    setActiveFileId(id);
    if (!openFileIds.includes(id)) {
      setOpenFileIds([...openFileIds, id]);
    }
  };

  const handleCloseTab = (id: string) => {
    const nextTabs = openFileIds.filter(tid => tid !== id);
    setOpenFileIds(nextTabs);
    if (activeFileId === id && nextTabs.length > 0) {
      setActiveFileId(nextTabs[nextTabs.length - 1]);
    } else if (nextTabs.length === 0) {
      setActiveFileId('');
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Content = event.target?.result as string;
      const newImage: UserFile = {
        id: Date.now().toString(),
        name: `img/${file.name}`,
        content: base64Content,
        language: 'html' as any,
        type: 'image'
      };
      setFiles([...files, newImage]);
    };
    reader.readAsDataURL(file);
  };

  const handleExportProject = async () => {
    const zip = new JSZip();
    files.forEach(file => {
      if (file.type === 'image') {
        const base64Data = file.content.split(',')[1];
        zip.file(file.name, base64Data, { base64: true });
      } else {
        zip.file(file.name, file.content);
      }
    });
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `proyecto-excelpro-${Date.now()}.zip`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleImportProject = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.name.endsWith('.zip')) {
      const zip = await JSZip.loadAsync(file);
      const newFiles: UserFile[] = [];
      let nextId = Date.now();

      for (const [path, zipEntry] of Object.entries(zip.files)) {
        if (!zipEntry.dir) {
          const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
          if (isImage) {
            const base64 = await zipEntry.async('base64');
            const ext = path.split('.').pop()?.toLowerCase();
            newFiles.push({
              id: (nextId++).toString(),
              name: path,
              content: `data:image/${ext};base64,${base64}`,
              language: 'html' as any,
              type: 'image'
            });
          } else {
            const content = await zipEntry.async('string');
            const ext = path.split('.').pop()?.toLowerCase();
            newFiles.push({
              id: (nextId++).toString(),
              name: path,
              content,
              language: ext === 'css' ? 'css' : ext === 'js' ? 'javascript' : 'html',
              type: 'text'
            });
          }
        }
      }
      setFiles(newFiles);
    }
  };

  // Helpers derivados
  const activeFile = files.find(f => f.id === activeFileId);
  const currentStep = currentStepList.find(s => s.id === currentStepId) || currentStepList[0];

  const handleCreateFile = (name: string) => {
    const isCss = name.endsWith('.css');
    const isJs = name.endsWith('.js');
    const newFile: UserFile = {
      id: Date.now().toString(),
      name,
      content: '',
      language: isCss ? 'css' : isJs ? 'javascript' : 'html'
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
    if (!openFileIds.includes(newFile.id)) {
      setOpenFileIds(prev => [...prev, newFile.id]);
    }
  };

  const handleCodeChange = (newVal: string | undefined) => {
    if (newVal === undefined) return;
    setFiles(prev => prev.map(f => f.id === activeFileId ? { ...f, content: newVal } : f));
  };

  const handleStepComplete = (completedStepId: number) => {
    const idx = currentStepList.findIndex(s => s.id === completedStepId);
    if (idx < currentStepList.length - 1) {
      setCurrentStepId(currentStepList[idx + 1].id);
    }
  };

  const handleLoadTemplate = (stepId: number) => {
    const targetStep = currentStepList.find(s => s.id === stepId);
    if (!targetStep) return;

    const indexFile: UserFile = {
      id: 'index-html',
      name: 'index.html',
      content: targetStep.template,
      language: 'html'
    };

    const extraFiles: UserFile[] = (targetStep.additionalFiles || []).map(f => ({
      id: `file-${f.name}`,
      name: f.name,
      content: f.content,
      language: f.language
    }));

    const allNewFiles = [indexFile, ...extraFiles];

    // *** CRÍTICO: Guardar los archivos en el estado ***
    setFiles(allNewFiles);

    // Initialize tabs with the first file
    const firstId = indexFile.id;
    setOpenFileIds([firstId]);
    setActiveFileId(firstId);
    setCurrentStepId(stepId);
  };

  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.type === 'cancelation' || event.reason?.message === 'Canceled') {
        event.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  const compiledHtml = useMemo(() => {
    const htmlFile = files.find(f => f.name.endsWith('.html'));
    const cssFiles = files.filter(f => f.name.endsWith('.css'));
    const jsFiles = files.filter(f => f.name.endsWith('.js') || (f.name.endsWith('.javascript') && f.language === 'javascript'));

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

    // Inyectar Imágenes (Reemplazar rutas relativas por Base64)
    const imageFiles = files.filter(f => f.type === 'image');
    imageFiles.forEach(img => {
      const imgName = img.name.split('/').pop();
      // Buscamos cualquier src que coincida con el nombre de la imagen subirda
      const regex = new RegExp(`src=["'].*?${imgName}["']`, 'g');
      htmlContent = htmlContent.replace(regex, `src="${img.content}"`);
    });

    return htmlContent;
  }, [files]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        background: '#1e1e2e',
      }}
    >
      {/* 1. Activity Bar */}
      <ActivityBar
        activeMode={activeMode}
        onSelectMode={(mode) => {
          if (activeMode === mode) setIsSidebarVisible(!isSidebarVisible);
          else {
            setActiveMode(mode);
            setIsSidebarVisible(true);
          }
        }}
      />

      {/* 2. Sidebar (Paneles Izquierdos) - Colapsable */}
      {isSidebarVisible && (
        <div style={{
          width: '320px',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
          background: '#1e1e2e',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {activeMode === 'explorer' && (
            <ExplorerPane
              files={files}
              activeFileId={activeFileId}
              onSelectFile={handleSelectFile}
              onCreateFile={handleCreateFile}
              onUploadImage={handleUploadImage}
              onDownloadProject={handleExportProject}
              onImportProject={handleImportProject}
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
              compactMode={true}
            />
          )}
          {activeMode === 'tutor' && (
            <TutorPane
              code={activeFile?.content || ''}
              currentStep={currentStep}
              activeTrack={activeTrack}
            />
          )}
          {activeMode === 'glossary' && (
            <GlossaryPane />
          )}
        </div>
      )}

      {/* 3. Main Workspace Area (Editor + Preview) con Resizer */}
      <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'hidden' }}>

        {/* Editor Side */}
        <div style={{ width: `${editorWidth}%`, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRight: '1px solid rgba(255,255,255,0.05)' }}>

          {/* Tabs Bar */}
          <div style={{ height: '35px', background: '#181825', display: 'flex', overflowX: 'auto', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="hide-scrollbar">
            {openFileIds.map(fid => {
              const f = files.find(file => file.id === fid);
              if (!f) return null;
              return (
                <div
                  key={fid}
                  onClick={() => setActiveFileId(fid)}
                  style={{
                    padding: '0 12px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    color: activeFileId === fid ? '#fff' : '#6b7280',
                    background: activeFileId === fid ? '#1e1e2e' : 'transparent',
                    borderRight: '1px solid rgba(0,0,0,0.2)',
                    minWidth: '100px',
                    position: 'relative',
                    userSelect: 'none'
                  }}
                >
                  <span>{f.name.split('/').pop()}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleCloseTab(fid); }}
                    style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '14px', padding: '0 4px', visibility: activeFileId === fid ? 'visible' : 'hidden' }}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {activeFile ? (
              activeFile.type === 'image' ? (
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
                  <img src={activeFile.content} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} alt={activeFile.name} />
                </div>
              ) : (
                <CodePane
                  file={activeFile}
                  onCodeChange={(newContent) => {
                    if (newContent !== undefined) {
                      setFiles(files.map(f => f.id === activeFileId ? { ...f, content: newContent } : f));
                    }
                  }}
                />
              )
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                Selecciona un archivo para editar
              </div>
            )}
          </div>
        </div>

        <div
          onMouseDown={(e) => {
            setIsResizing(true);
            const startX = e.clientX;
            const startWidth = editorWidth;
            const onMouseMove = (moveEvent: MouseEvent) => {
              const deltaX = ((moveEvent.clientX - startX) / window.innerWidth) * 100;
              setEditorWidth(Math.min(80, Math.max(20, startWidth + deltaX)));
            };
            const onMouseUp = () => {
              setIsResizing(false);
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          }}
          style={{ width: '4px', cursor: 'col-resize', background: isResizing ? '#3b82f6' : 'transparent', zIndex: 10, transition: 'background 0.2s' }}
          onMouseEnter={(e) => !isResizing && (e.currentTarget.style.background = '#3b82f6')}
          onMouseLeave={(e) => !isResizing && (e.currentTarget.style.background = 'transparent')}
        />

        {/* Preview Side */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {isResizing && (
            <div style={{ position: 'absolute', inset: 0, zIndex: 5, background: 'transparent' }} />
          )}
          <PreviewPane compiledHtml={compiledHtml} />
        </div>
      </div>

      <FloatingMentor
        currentTrack={activeTrack}
        currentStepId={currentStepId}
        onNextStep={() => {
          const idx = currentStepList.findIndex(s => s.id === currentStepId);
          if (idx < currentStepList.length - 1) {
            setCurrentStepId(currentStepList[idx + 1].id);
          }
        }}
        onPrevStep={() => {
          const idx = currentStepList.findIndex(s => s.id === currentStepId);
          if (idx > 0) {
            setCurrentStepId(currentStepList[idx - 1].id);
          }
        }}
        onCompleteStep={() => handleStepComplete(currentStepId)}
        onLoadTemplate={() => handleLoadTemplate(currentStepId)}
        currentStepData={currentStep}
        currentCode={compiledHtml}
      />
    </div>
  );
}