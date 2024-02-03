"use client"

import Button from "@/components/shared/Button";
import TextFormField from "@/components/shared/FormField";
import { MdMail, MdLock } from "react-icons/md";
import { useFormState } from "react-dom";
import { login } from "../actions";

type State = { success: boolean; errors: { email?: string[] | undefined; password?: string[] | undefined } }

const initialState: State = {
  success: false,
  errors: {}
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)

  return (
    <form action={formAction} className='flex flex-col gap-3'>
      <TextFormField required icon={MdMail} label='Email' type='email' name='email' />
      <TextFormField required minLength={8} icon={MdLock} label='Password' type='password' name='password' />
      {
        !state?.success && (
          <p>
            {state?.errors?.email?.map((error) => (
              <span key={error}>{error}</span>
            ))}

            {state?.errors?.password?.map((error) => (
              <span key={error}>{error}</span>
            ))}
          </p>
        )
      }
      <Button className='my-3' label='Login' type='submit' />
    </form>
  )
}