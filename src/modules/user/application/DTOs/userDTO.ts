export interface UserDTO {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

export interface CreateUserDTO {
    name: string;
    email: string;
    role: string;
}

export interface UpdateUserDTO {
    id: string;
    name?: string;
    email?: string;
    role?: string;
}