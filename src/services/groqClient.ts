import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeCode(code: string, stepTitle: string): Promise<string> {
  try {
    const codeWithLines = code.split('\n').map((line, i) => `${i + 1}: ${line}`).join('\n');
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Eres un Tutor de Frontend experto y empático. Tu objetivo es guiar al estudiante paso a paso a través de misiones cortas.
Contexto del paso actual: "${stepTitle}".
Analiza el código del estudiante y ofrece feedback siguiendo estas reglas ESTRICTAS:
1. NUNCA des el código HTML completo resuelto. Da pistas y guía.
2. IMPORTANTE: Se te entrega el código con NÚMEROS DE LÍNEA AL INICIO. Usa SIEMPRE los números de línea para decirle DÓNDE debe colocar exactamente su código o detectar sus errores de estructura y orden (Ej: "Agregaste <div> en la línea 4, pero debe ir JUSTO DEBAJO del <header> en la línea 2"; "La etiqueta </body> va en la última línea").
3. Si el estudiante recién empieza o está vacío, pedirle la estructura base indicando en cuáles líneas.
4. Evalúa áreas como HTML5 Semántico y accesibilidad, considerando la indentación.
Sé conciso, usa un tono motivador y responde en máximo 300 palabras usando viñetas.`,
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