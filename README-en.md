# Frontend Learning Platform (Learn HTML)

An interactive educational platform focused on building a **Personal Portfolio**. The learning journey is designed cumulatively, where each lesson builds upon the previous one, guided by an AI Mentor. Students learn HTML, CSS, and JavaScript in a structured manner while creating a real-world project.

## Key Features

- **Unified Curriculum**: Learn web fundamentals by building your portfolio step-by-step.
- **Cumulative Learning**: Code progress is saved and inherited between lessons using initial state templates.
- **AI Mentor (Llama 3)**: Built-in adaptive feedback that checks mission progress in real-time and validates code using predictive logic and regex.
- **Integrated IDE**: A premium, VS Code-like experience right in your browser via `@monaco-editor/react`.
- **Live Preview**: Vite-style live preview capability allowing instant visualization of code changes using an `iframe` and `RetroGrid`.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Vanilla CSS and CSS Grid
- **Key Libraries**: React 19, @monaco-editor/react, Lucide React
- **AI**: Groq SDK powered by Llama 3 (70b)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vickotoAguilera/aprender-html.git
   cd aprender-html
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Groq API key:
   ```env
   GROQ_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the platform.

---

*Lee esto en [Español](README.md)*
