// This file will define and export types used throughout the application.

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    programId: string;
}

export interface Program {
    id: string;
    name: string;
    description: string;
}

export interface School {
    id: string;
    name: string;
    address: string;
}

export interface Subject {
    id: string;
    name: string;
    description: string;
}

export interface Topic {
    id: string;
    title: string;
    subjectId: string;
}

export interface Unit {
    id: string;
    title: string;
    topicId: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface ErrorResponse {
    message: string;
    statusCode: number;
}