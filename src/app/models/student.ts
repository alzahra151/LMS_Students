export interface Student {
    id: number
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    user_type?: "student";
    photo?: string;
    mobile?: number;
    role_id?: number;
    class_id?: number;
    brief?: string,
    subject?: string
}
