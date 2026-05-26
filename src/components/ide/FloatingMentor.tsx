'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Minus, Cross, GripHorizontal, Sparkles, Check, ChevronRight, X } from 'lucide-react';
import type { UserFile } from './ActivityBar';

interface MentorStep {
    id: number;
    message: string;
    expectedToken?: string; // palabra clave o regex que esperamos ver
    verifyFunction?: (files: UserFile[]) => { success: boolean; feedback: string };
}

// Pasos educativos interactivos
const MENTOR_STEPS: MentorStep[] = [
    {
        id: 1,
        message: "¡Hola! Vamos a construir tu Portfolio. Empieza creando el archivo index.html en el Explorador.",
        verifyFunction: (files) => {
            const hasIndex = files.some(f => f.name.toLowerCase() === 'index.html');
            if (hasIndex) return { success: true, feedback: '¡Excelente! El primer paso de todo desarrollador.' };
            return { success: false, feedback: 'Aún no veo el archivo index.html.' };
        }
    },
    {
        id: 2,
        message: "Agrega la estructura base obligatoria: <!DOCTYPE html>, <html>, <head> y <body>. ¡Es MUY importante que cierres </body> y </html> al final!",
        verifyFunction: (files) => {
            const htmlFile = files.find(f => f.name === 'index.html');
            if (!htmlFile) return { success: false, feedback: 'Crea el archivo index.html primero.' };

            const content = htmlFile.content.toLowerCase();
            const hasDoctype = content.includes('<!doctype html>');
            const hasHtml = /<html[^>]*>/.test(content);
            const hasHead = /<head[^>]*>/.test(content);
            const hasBody = /<body[^>]*>/.test(content);
            const hasBodyClose = content.includes('</body>');
            const hasHtmlClose = content.includes('</html>');

            if (hasDoctype && hasHtml && hasHead && hasBody && hasBodyClose && hasHtmlClose) {
                return { success: true, feedback: '¡Perfecto! Tienes los cimientos y el cierre correcto.' };
            }
            return { success: false, feedback: 'Estructura incompleta. Revisa que estén: <!DOCTYPE html>, <html>, <head>, <body> y cerrados con </body>, </html>.' };
        }
    },
    {
        id: 3,
        message: "Dentro del <body>, agrega un encabezado semántico con la etiqueta <header> y dentro pon tu nombre en un <h1>.",
        verifyFunction: (files) => {
            const htmlFile = files.find(f => f.name === 'index.html');
            if (!htmlFile) return { success: false, feedback: '' };

            const content = htmlFile.content;
            const hasHeader = /<header[^>]*>/.test(content) && /<\/header>/.test(content);
            const hasH1 = /<h1[^>]*>/.test(content) && /<\/h1>/.test(content);

            if (hasHeader && hasH1) {
                return { success: true, feedback: '¡Muy bien! Las etiquetas semánticas como <header> mejoran tu sitio.' };
            }
            if (!hasHeader) return { success: false, feedback: 'Falta abrir y cerrar la etiqueta <header>.' };
            return { success: false, feedback: 'Veo el <header>, pero falta la etiqueta <h1> con tu nombre.' };
        }
    },
    {
        id: 4,
        message: "Crea la sección de proyectos: Usa <section id=\"proyectos\"> y dentro agrega un título con <h2>.",
        verifyFunction: (files) => {
            const htmlFile = files.find(f => f.name === 'index.html');
            if (!htmlFile) return { success: false, feedback: '' };

            const content = htmlFile.content;
            const hasSectionId = /<section\s+id=["']proyectos["'][^>]*>/.test(content);
            const hasH2 = /<h2[^>]*>/.test(content);

            if (hasSectionId && hasH2) {
                return { success: true, feedback: '¡Genial! Los atributos como id nos ayudan a identificar secciones únicas.' };
            }
            if (!hasSectionId) return { success: false, feedback: 'Asegúrate de agregar <section id="proyectos">.' };
            return { success: false, feedback: 'Agregaste la sección, pero falta el título <h2>.' };
        }
    },
    {
        id: 5,
        message: "Agrega tus proyectos. Crea una lista desordenada <ul> y pon al menos 3 proyectos como elementos (<li>).",
        verifyFunction: (files) => {
            const htmlFile = files.find(f => f.name === 'index.html');
            if (!htmlFile) return { success: false, feedback: '' };

            const content = htmlFile.content;
            const hasUl = /<ul[^>]*>/.test(content) && /<\/ul>/.test(content);
            const liCount = (content.match(/<li[^>]*>/gi) || []).length;

            if (hasUl && liCount >= 3) {
                return { success: true, feedback: '¡Impresionante! Usar listas hace que el contenido se lea mucho mejor.' };
            }
            if (!hasUl) return { success: false, feedback: 'Falta la etiqueta <ul> para iniciar la lista.' };
            return { success: false, feedback: `Tienes la lista, pero solo veo ${liCount} etiquetas <li>. ¡Tienen que ser al menos 3!` };
        }
    },
    {
        id: 6,
        message: "Haz tu Portfolio más personal. Agrega una etiqueta <img> con tu foto. ¡No olvides el atributo 'alt' requerido por accesibilidad!",
        verifyFunction: (files) => {
            const htmlFile = files.find(f => f.name === 'index.html');
            if (!htmlFile) return { success: false, feedback: '' };

            const content = htmlFile.content;
            const hasImg = /<img[^>]*>/i.test(content);
            const hasAlt = /<img[^>]*alt=["'][^"']*["'][^>]*>/i.test(content);

            if (hasAlt) return { success: true, feedback: '¡Perfecto! Un buen desarrollador siempre piensa en la accesibilidad web (A11y).' };
            if (hasImg) return { success: false, feedback: 'Bien, pusiste la imagen, pero te falta agregar el atributo alt="...".' };
            return { success: false, feedback: 'Falta agregar la etiqueta <img>.' };
        }
    },
    {
        id: 7,
        message: "Crea un formulario para que te contacten. Usa la etiqueta <form> e incluye dentro un botón de envío con <button>.",
        verifyFunction: (files) => {
            const htmlFile = files.find(f => f.name === 'index.html');
            if (!htmlFile) return { success: false, feedback: '' };

            const content = htmlFile.content;
            const hasForm = /<form[^>]*>/.test(content);
            const hasButton = /<button[^>]*>/.test(content);

            if (hasForm && hasButton) return { success: true, feedback: '¡Listo! Las etiquetas <form> recogen la interacción del usuario.' };
            if (!hasForm) return { success: false, feedback: 'Falta abrir la etiqueta <form>.' };
            return { success: false, feedback: 'Tienes el formulario, pero te falta un <button> para enviarlo.' };
        }
    },
    {
        id: 8,
        message: "¡Hora de diseño! Crea el archivo estilo.css y en index.html agrégalo dentro de <head> usando la etiqueta <link rel=\"stylesheet\" href=\"estilo.css\">.",
        verifyFunction: (files) => {
            const hasCss = files.some(f => f.name === 'estilo.css');
            const htmlFile = files.find(f => f.name === 'index.html');

            if (!hasCss) return { success: false, feedback: 'Primero debes crear el archivo estilo.css en el Explorador.' };

            const content = htmlFile?.content || '';
            const hasLink = /<link[^>]*href=["']\/?estilo\.css["'][^>]*>/i.test(content);

            if (hasLink) return { success: true, feedback: '¡Conectado! Has separado correctamente el contenido (HTML) de la presentación (CSS).' };
            return { success: false, feedback: 'Veo el archivo CSS, pero no lo has enlazado correctamente con <link> en el <head>.' };
        }
    },
    {
        id: 9,
        message: "Agrega interactividad: Crea app.js. Luego, en index.html, cárgalo justo ANTES de cerrar el </body> con <script src=\"app.js\"></script>.",
        verifyFunction: (files) => {
            const hasJs = files.some(f => f.name === 'app.js');
            const htmlFile = files.find(f => f.name === 'index.html');

            if (!hasJs) return { success: false, feedback: 'Debes crear el archivo app.js en el Explorador.' };

            const content = htmlFile?.content || '';
            const hasScript = /<script[^>]*src=["']\/?app\.js["'][^>]*>/i.test(content);

            if (hasScript) return { success: true, feedback: '¡Excelente! Los scripts al final del body aseguran que todo el sitio cargue primero antes de leer el JS.' };
            return { success: false, feedback: 'Veo app.js, pero falta cargarlo en el HTML usando la etiqueta <script src="app.js">.' };
        }
    },
    {
        id: 10,
        message: "En app.js, escribe código de interactividad, como un event listener (recomendado) para filtrar algo, o un onclick en algún botón.",
        verifyFunction: (files) => {
            const jsFile = files.find(f => f.name === 'app.js');
            if (!jsFile) return { success: false, feedback: 'No encuentro tu archivo app.js.' };

            const content = jsFile.content;
            const hasAction = content.includes('addEventListener') || content.includes('onclick') || content.includes('.style.');

            if (hasAction) {
                return { success: true, feedback: '¡FELICIDADES! Has integrado HTML Semántico, CSS y Manipulación del DOM en JS. Tu base está completa. 🎉' };
            }
            return { success: false, feedback: 'Tu app.js está muy vacío. Usa addEventListener, o modifica elementos del DOM usando document.querySelector.' };
        }
    }
];




interface FloatingMentorProps {
    files: UserFile[];
    currentStepId: number;
}

export function FloatingMentor({ files, currentStepId }: FloatingMentorProps) {
    // Estado de UI
    const [minimized, setMinimized] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: 20 });

    // Estado del tutor
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [verificationFeedback, setVerificationFeedback] = useState<{ success: boolean, msg: string } | null>(null);

    // Sincronizar con el paso actual del tutorial principal
    useEffect(() => {
        if (currentStepId > 0 && currentStepId <= MENTOR_STEPS.length) {
            setCurrentStepIndex(currentStepId - 1);
            setVerificationFeedback(null);
        }
    }, [currentStepId]);

    // Drag logic
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({ x: window.innerWidth - 380, y: window.innerHeight - 300 });
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;
        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y
        });
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        isDragging.current = false;
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    const handleVerify = () => {
        const step = MENTOR_STEPS[currentStepIndex];
        if (step.verifyFunction) {
            const result = step.verifyFunction(files);
            setVerificationFeedback({ success: result.success, msg: result.feedback });
        }
    };

    const handleNext = () => {
        if (currentStepIndex < MENTOR_STEPS.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
            setVerificationFeedback(null);
        }
    };

    const step = MENTOR_STEPS[currentStepIndex];

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: minimized ? '250px' : '340px',
                backgroundColor: '#16161ebd', // semi transp
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                zIndex: 9999, // Arriba de todo
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'width 0.3s, height 0.3s',
            }}
        >
            {/* Barra superior / Drag Handle */}
            <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                style={{
                    padding: '10px 14px',
                    background: 'rgba(0,0,0,0.3)',
                    cursor: 'grab',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    touchAction: 'none' // Prevenir scroll nativo en mobile
                }}
                onPointerCancel={handlePointerUp}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={14} color="#8b5cf6" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#e5e7eb', userSelect: 'none' }}>
                        Mentor Interactivo
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <button
                        onClick={() => setMinimized(!minimized)}
                        style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
                    >
                        {minimized ? <GripHorizontal size={14} /> : <Minus size={14} />}
                    </button>
                </div>
            </div>

            {/* Contenido (oculto si minimizado) */}
            {!minimized && (
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{
                            width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #8b5cf6)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold', color: 'white', fontSize: '12px'
                        }}>
                            {currentStepIndex + 1}/{MENTOR_STEPS.length}
                        </div>
                        <p style={{ margin: 0, fontSize: '13px', color: '#d1d5db', lineHeight: '1.5' }}>
                            {step.message}
                        </p>
                    </div>

                    {/* Verification Feedback Modal */}
                    {verificationFeedback && (
                        <div style={{
                            padding: '10px 12px',
                            borderRadius: '8px',
                            background: verificationFeedback.success ? 'rgba(52, 211, 153, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                            border: verificationFeedback.success ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(248, 113, 113, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            {verificationFeedback.success ? <Check size={16} color="#34d399" /> : <X size={16} color="#f87171" />}
                            <span style={{ fontSize: '12px', color: verificationFeedback.success ? '#34d399' : '#f87171' }}>
                                {verificationFeedback.msg}
                            </span>
                        </div>
                    )}

                    {/* Acciones */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                        {(!verificationFeedback || !verificationFeedback.success) && (
                            <button
                                onClick={handleVerify}
                                style={{
                                    flex: 1, padding: '8px', borderRadius: '6px', border: 'none', background: '#3b82f6', color: 'white',
                                    cursor: 'pointer', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                                }}
                            >
                                Verificar Código
                            </button>
                        )}

                        {verificationFeedback?.success && currentStepIndex < MENTOR_STEPS.length - 1 && (
                            <button
                                onClick={handleNext}
                                style={{
                                    flex: 1, padding: '8px', borderRadius: '6px', border: 'none', background: '#10b981', color: 'white',
                                    cursor: 'pointer', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                                }}
                            >
                                Siguiente Paso <ChevronRight size={14} />
                            </button>
                        )}

                        {verificationFeedback?.success && currentStepIndex === MENTOR_STEPS.length - 1 && (
                            <div style={{ flex: 1, textAlign: 'center', fontSize: '13px', color: '#10b981', fontWeight: 'bold' }}>
                                ¡Has completado este módulo! 🎉
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
