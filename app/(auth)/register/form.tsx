"use client"

import Button from "@/components/Button"
import TextFormField from "@/components/FormField"
import { faPerson, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
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
      <TextFormField icon={faPerson} label='Your name' type='text' name='name' />
      <TextFormField icon={faEnvelope} label='Email' type='email' name='email' />
      <TextFormField icon={faLock} label='Password' type='password' name='password' />
      <TextFormField icon={faLock} label='Validate your password' type='password' name='password-confirmation' />
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