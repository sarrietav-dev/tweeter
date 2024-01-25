"use server"

import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export async function login(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  const { email, password } = validatedFields.data

  console.log(`Login with email: ${email} and password: ${password}`)
}

const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8)
})

export async function register(prevState: any, formData: FormData) {
  const validatedFields = registerSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
    passwordConfirmation: formData.get("password-confirmation")
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  const { email, name, password, passwordConfirmation } = validatedFields.data

  if (password !== passwordConfirmation) {
    return {
      success: false,
      errors: {
        passwordConfirmation: ["Password confirmation doesn't match"]
      }
    }
  }

  console.log(`Register with email: ${email}, name: ${name} and password: ${password}`)
}