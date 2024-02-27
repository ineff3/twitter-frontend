import { z } from 'zod'

export const requiredStringFieldSchema = (
    fieldName: string,
    minLength: number
) => {
    return z
        .string()
        .min(1, `${fieldName} is a required field`)
        .min(minLength, `${fieldName} must be at least ${minLength} characters`)
        .trim()
}
