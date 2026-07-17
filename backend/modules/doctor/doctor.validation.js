import { z } from "zod";

const addressSchema = z.object({
    street: z
        .string()
        .trim()
        .optional(),

    city: z
        .string()
        .trim()
        .optional(),

    state: z
        .string()
        .trim()
        .optional(),

    country: z
        .string()
        .trim()
        .optional(),

    pincode: z
        .string()
        .trim()
        .optional(),
});

export const doctorProfileSchema = z.object({
    body: z.object({
        specialization: z
            .string()
            .trim()
            .min(2, "Specialization must be at least 2 characters.")
            .optional(),

        qualification: z
            .string()
            .trim()
            .min(2, "Qualification must be at least 2 characters.")
            .optional(),

        experience: z
            .number()
            .min(0, "Experience cannot be negative.")
            .max(70, "Experience seems invalid.")
            .optional(),

        hospital: z
            .string()
            .trim()
            .min(2, "Hospital name must be at least 2 characters.")
            .optional(),

        department: z
            .string()
            .trim()
            .min(2, "Department must be at least 2 characters.")
            .optional(),

        licenseNumber: z
            .string()
            .trim()
            .min(5, "License number is too short.")
            .optional(),

        consultationFee: z
            .number()
            .min(0, "Consultation fee cannot be negative.")
            .optional(),

        address: addressSchema.optional(),
    }),
});