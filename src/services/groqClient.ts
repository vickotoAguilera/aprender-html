import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeCode(code: string, stepTitle: string, activeTrack: 'academic' | 'external' = 'academic'): Promise<string> {
  try {
    const codeWithLines = code.split('\n').map((line, i) => `${i + 1}: ${line}`).join('\n');
    
    const systemContent = activeTrack === 'academic'
      ? `Eres un Tutor de Frontend experto y empático. Tu objetivo es guiar al estudiante paso a paso a través de misiones cortas.
Contexto del paso actual: "${stepTitle}".
Analiza el código del estudiante y ofrece feedback siguiendo estas reglas ESTRICTAS:
1. NUNCA des el código HTML completo resuelto. Da pistas y guía.
2. IMPORTANTE: Se te entrega el código con NÚMEROS DE LÍNEA AL INICIO. Usa SIEMPRE los números de línea para decirle DÓNDE debe colocar exactamente su código o detectar sus errores de estructura y orden.
3. Si el estudiante recién empieza o está vacío, pedirle la estructura base indicando en cuáles líneas.
4. Evalúa áreas como HTML5 Semántico y accesibilidad, considerando la indentación.
Sé conciso, usa un tono motivador y responde en máximo 300 palabras usando viñetas.`
      : `Eres un Experto Evaluador de Retos Frontend, enfocado estrictamente en "Cheatsheets" (Guías rápidas).
Contexto del reto actual: "${stepTitle}".
Analiza el código del estudiante y evalúa si cumple con la teoría de la guía rápida. Sigue estas reglas ESTRICTAS: 
1. NO asumas que el usuario está construyendo un portfolio; este es un entorno aislado de pruebas para dominar reglas individuales (como etiquetas de formularios o sintaxis CSS).
2. Usa SIEMPRE los números de línea al explicar errores o mejoras.
3. Revisa la precisión sintáctica según el reto (ej. asegurarse de usar required, labels, types).
Sé conciso y directo, responde en máximo 300 palabras usando viñetas.`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemContent,
        },
        {
          role: 'user',
          content: codeWithLines,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 600,
    });

    return completion.choices[0]?.message?.content ?? 'No se pudo generar una respuesta.';
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return 'Error al conectar con el tutor de IA. Verifica tu API key.';
  }
}

export default groq;