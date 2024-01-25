import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from '@/components/Link'
import TextFormField from '@/components/FormField'
import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

export default function LoginPage() {
  return (
    <div className='px-5 flex flex-col gap-5'>
      <div>
        <Text type='heading' className='font-semibold text-lg'>
          Login
        </Text>
      </div>

      <form className='flex flex-col gap-3'>
        <TextFormField icon={faEnvelope} label='Email' type='email' name='email' />
        <TextFormField icon={faLock} label='Password' type='password' name='password' />
        <Button className='my-3' label='Login' type='submit' />
      </form>

      <div className='space-y-3'>
        <Text type='secondary' className='text-center'>Or continue with this social profiles</Text>
        <div className='flex items-center justify-evenly'>
          <IconButton type='submit' icon={faGoogle} />
          <IconButton type='submit' icon={faGithub} />
        </div>
      </div>

      <Text type='secondary' className='text-center'>
        Don&apos;t have an account yet? <Link href="/register">Register</Link>
      </Text>
    </div>
  )
}
