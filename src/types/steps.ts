export interface Step {
    id: number;
    title: string;
    description: string;
    template: string;
    academicContent: string;
    additionalFiles?: { name: string; content: string; language: 'css' | 'javascript' }[];
}