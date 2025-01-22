export interface question {
    id: number
    answer_id: number
}
export interface StudentExamQuestion {
    exam_id?: number
    questions: question[]
}
