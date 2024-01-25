import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from '@/components/Link'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'
import LoginForm from './form'

export default function LoginPage() {
  return (
    <div className='px-5 flex flex-col gap-5'>
      <div>
        <Text type='heading' className='font-semibold text-lg'>
          Login
        </Text>
      </div>

      <LoginForm />

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
