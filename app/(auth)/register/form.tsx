"use client"

import Button from "@/components/shared/Button"
import TextFormField from "@/components/shared/FormField"
import { MdAccountCircle, MdMail, MdLock } from "react-icons/md"
import { useFormState } from "react-dom"
import { register } from "../actions"

const initialState: Awaited<ReturnType<typeof register>> = {
  errors: {},
  success: false
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, initialState)

  return (
    <form action={formAction} className='flex flex-col gap-3'>
      <TextFormField required min={3} icon={MdAccountCircle} label='Your name' type='text' name='name' />
      <TextFormField required icon={MdMail} label='Email' type='email' name='email' />
      <TextFormField required min={8} icon={MdLock} label='Password' type='password' name='password' />
      <TextFormField required min={8} icon={MdLock} label='Validate your password' type='password' name='password-confirmation' />
      {
        !state?.success && (
          <p>
            {state?.errors?.name?.map((error) => (
              <span key={error}>{error}</span>
            ))}

            {state?.errors?.email?.map((error) => (
              <span key={error}>{error}</span>
            ))}

            {state?.errors?.password?.map((error) => (
              <span key={error}>{error}</span>
            ))}

            {state?.errors?.passwordConfirmation?.map((error) => (
              <span key={error}>{error}</span>
            ))}
          </p>
        )
      }
      <Button label='Join' type='submit' />
    </form>
  )
}