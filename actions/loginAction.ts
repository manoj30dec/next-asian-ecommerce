"use server"
import { z } from 'zod'
import { redirect } from 'next/navigation';
const loginValidationSchema = z.object({
    username: z.string().trim()
        .refine((val) => val !== "", {
            message: "Email is required",
        })
        .refine((val) => {
            if (val === "") return true; // skip email check if empty
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        }, {
            message: "Invalid email address",
        }),
    password: z.string().min(4, { message: "Password must be at least 4 charectors" }).trim()
})
interface LoginFormState {
    errors: {
        username?: string[];
        password?: string[];
        _form?: string[]
    }
}
export async function LoginAction(formState: LoginFormState, formData: FormData): Promise<LoginFormState> {

    // validate the login username and password after form subsmission
    const result = loginValidationSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

}