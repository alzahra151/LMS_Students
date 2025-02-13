import { Answer } from "./answer";

export interface Question {
    id: number
    title?: string;
    alt_title?: string;
    degree?: number;
    exam_id?: number;
    duration?: number;
    answers: Answer[]
}
