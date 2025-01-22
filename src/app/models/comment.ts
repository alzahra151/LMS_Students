import { Student } from "./student"

export interface Comment {
    id?: number
    body?: string,
    user_id?: number
    comment_id?: number
    lesson_id?: number,
    user?: Student,
    replies?: Comment[]
}

export interface CommentResponse {
    comments: Comment[]
    comment: Comment
}
