# 03 - MODELOS DE DATOS

## Entidades Principales

### UserFile (`src/components/ide/ActivityBar.tsx`)
```typescript
interface UserFile {
    id: string;
    name: string;
    content: string;
    language: 'html' | 'css' | 'javascript';
}
```

### Step (`src/types/steps.ts`)
```typescript
export interface Step {
  id: number;
  title: string;
  description: string;
  template: string; // Plantilla acumulativa basada en el Portfolio
  academicContent: string;
}
```

### MentorStep (`src/components/ide/FloatingMentor.tsx`)
```typescript
interface MentorStep {
    id: number;
    message: string;
    expectedToken?: string;
    verifyFunction?: (files: UserFile[]) => { success: boolean; feedback: string };
}
```