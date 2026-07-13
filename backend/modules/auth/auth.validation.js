import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must contain at least 2 characters")
        .max(100, "Name cannot exceed 100 characters"), 
    
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),
    
    password: z
        .string()
        .min(8, "Password must contain at least 8 characters")
        .max(100),
    
    role: z.enum(["doctor", "patient"]),
});

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),

    password: z
        .string()
        .min(8, "Password must contain at least 8 characters")
        .max(100),
});