export interface Skill {
    area: string;
    destacado: boolean;
    nivelPorcentaje: number; // En TypeScript usamos number para int64
    nombre: string;
    subHerramientas: string[]; // Representa el array de strings
}
