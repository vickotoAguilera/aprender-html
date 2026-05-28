'use client';

import React, { useState } from 'react';
import { Search, Book, Code, Zap, Palette } from 'lucide-react';

interface GlossaryTerm {
    term: string;
    definition: string;
    category: 'HTML' | 'CSS' | 'JS' | 'General';
}

const GLOSSARY_DATA: GlossaryTerm[] = [
    {
        term: 'HTML',
        definition: 'HyperText Markup Language. Es el "esqueleto" o la estructura de tu página web.',
        category: 'HTML'
    },
    {
        term: 'CSS',
        definition: 'Cascading Style Sheets. Es el "maquillaje" de tu web: colores, fuentes y diseño.',
        category: 'CSS'
    },
    {
        term: 'JavaScript (JS)',
        definition: 'Es el "cerebro". Da interactividad, como botones que filtran listas o cambian temas.',
        category: 'JS'
    },
    {
        term: '<body>',
        definition: 'La etiqueta que contiene todo lo que el usuario ve en la pantalla (títulos, imágenes, etc.).',
        category: 'HTML'
    },
    {
        term: '<head>',
        definition: 'Zona de configuración oculta. Aquí se pone el título de la pestaña y se enlazan los estilos.',
        category: 'HTML'
    },
    {
        term: 'Tag (Etiqueta)',
        definition: 'Las piezas de construcción de HTML, como <h1> o <p>. Siempre van entre < >.',
        category: 'General'
    },
    {
        term: 'Atributo',
        definition: 'Información extra dentro de una etiqueta, como id="proyectos" o src="imagen.jpg".',
        category: 'General'
    },
    {
        term: 'Selector',
        definition: 'En CSS, es a quién le aplicas el estilo (ej: el nombre de la etiqueta, una clase o un id).',
        category: 'CSS'
    },
    {
        term: 'DOM',
        definition: 'Document Object Model. Es la estructura interna que JS usa para cambiar tu HTML en vivo.',
        category: 'JS'
    },
    {
        term: 'Flexbox',
        definition: 'Una herramienta de CSS para alinear elementos fácilmente en filas o columnas.',
        category: 'CSS'
    }
];

export function GlossaryPane() {
    const [search, setSearch] = useState('');

    const filtered = GLOSSARY_DATA.filter(item =>
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', color: '#d1d5db' }}>
            <div style={{
                padding: '12px 16px',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#9ca3af',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                Glosario de Conceptos
            </div>

            <div style={{ padding: '12px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#181818',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    gap: '8px'
                }}>
                    <Search size={14} color="#6b7280" />
                    <input
                        type="text"
                        placeholder="Buscar concepto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '13px',
                            outline: 'none',
                            width: '100%'
                        }}
                    />
                </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px 20px 12px' }}>
                {filtered.map((item, idx) => (
                    <div key={idx} style={{
                        marginBottom: '16px',
                        padding: '12px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '8px',
                        borderLeft: `3px solid ${item.category === 'HTML' ? '#e34f26' :
                                item.category === 'CSS' ? '#264de4' :
                                    item.category === 'JS' ? '#f7df1e' : '#9ca3af'
                            }`
                    }}>
                        <div style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#ffffff',
                            marginBottom: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            {item.category === 'HTML' && <Code size={14} />}
                            {item.category === 'CSS' && <Palette size={14} />}
                            {item.category === 'JS' && <Zap size={14} />}
                            {item.term}
                        </div>
                        <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#9ca3af' }}>
                            {item.definition}
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px 0', opacity: 0.5 }}>
                        <Book size={32} style={{ marginBottom: '8px' }} />
                        <div>No se encontró el concepto</div>
                    </div>
                )}
            </div>
        </div>
    );
}
