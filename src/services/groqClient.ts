import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeCode(code: string, stepTitle: string, activeTrack: 'academic' | 'external' | 'study' = 'academic'): Promise<string> {
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
      : activeTrack === 'external' ? `Eres un Experto Evaluador de Retos Frontend, enfocado estrictamente en "Cheatsheets" (Guías rápidas).
Contexto del reto actual: "${stepTitle}".
Analiza el código del estudiante y evalúa si cumple con la teoría de la guía rápida. Sigue estas reglas ESTRICTAS: 
1. NO asumas que el usuario está construyendo un portfolio; este es un entorno aislado de pruebas para dominar reglas individuales (como etiquetas de formularios o sintaxis CSS).
2. Usa SIEMPRE los números de línea al explicar errores o mejoras.
3. Revisa la precisión sintáctica según el reto (ej. asegurarse de usar required, labels, types).
Sé conciso y directo, responde en máximo 300 palabras usando viñetas.`
        : `Eres un Instructor Senior de Frontend especializado en el reto "Estudia para prueba".
Contexto: Estás guiando la estilización de la landing page "ExcelPro Academy".
Tu misión es explicar detalladamente cada comando CSS y su relación con el HTML. Sigue estas reglas:
1. Explica PARA QUÉ sirve cada comando (ej: "El comando nav es para configurar el navbar y el logo").
2. Explica los detalles técnicos: Si usas 'px' explica que son unidades fijas, si usas 'rgba' explica qué hace cada número (rojo, verde, azul y transparencia).
3. Indica siempre la relación con el HTML citando las líneas (ej: "Llamamos a .hero en la línea 25 de tu HTML").
4. Sugiere paletas de colores en hexadecimal (estilo #ffffff) y explica que son códigos de color.
5. Sé muy motivador, usa un tono senior pero cercano.
6. Usa los números de línea proporcionados para dar feedback exacto.
Sé detallado pero estructurado, responde en máximo 400 palabras usando viñetas.`;

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

export async function chatWithMentor(
  messages: { role: 'user' | 'assistant', content: string }[],
  currentCode: string,
  activeTrack: 'academic' | 'external' | 'study' = 'study'
): Promise<string> {
  try {
    const codeWithLines = currentCode.split('\n').map((line, i) => `${i + 1}: ${line}`).join('\n');

    const systemPrompt = activeTrack === 'study'
      ? `Eres un Instructor Senior de Frontend para PRINCIPIANTES ABSOLUTOS. 
Tu misión es enseñar CSS a alguien que NO SABE NADA. 
REGLAS DE ORO:
1. EXPLICA TODO DESDE CERO: Si mencionas 'pixels' (px), explica que es un puntito de luz en la pantalla. Si mencionas 'rem', explica que se basa en el tamaño de letra base.
2. COLORES: No digas solo 'rgba', explica que es Rojo, Verde, Azul y Transparencia, y cómo variando cada número del 0 al 255 creas millones de colores.
3. SELECTORES: Explica que poner un punto '.' antes del nombre es para llamar a una 'clase' que creamos en el HTML (cita el número de línea siempre).
4. El estudiante tiene este código actualmente:
\n${codeWithLines}\n
5. Sé extremadamente paciente, motivador y usa un lenguaje que un niño de 10 años entendería, pero con la sabiduría técnica de un Senior.
6. Si preguntan "¿servirá?", analiza su código actual y sé honesto pero alentador.`
      : "Eres un Mentor de programación servicial.";

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 800,
    });

    return completion.choices[0]?.message?.content ?? 'No se pudo generar una respuesta.';
  } catch (error) {
    console.error('Error in chatWithMentor:', error);
    return 'Lo siento, tuve un problema al procesar tu duda. ¿Podrías repetirla?';
  }
}

export default groq;