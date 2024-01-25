"use client"

import Button from "@/components/Button";
import TextFormField from "@/components/FormField";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
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
      <TextFormField icon={faEnvelope} label='Email' type='email' name='email' />
      <TextFormField icon={faLock} label='Password' type='password' name='password' />
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