import { FaGoogle, FaGithub } from 'react-icons/fa6'
import Link from '@/components/shared/Link'
import IconButton from '@/components/shared/IconButton'
import Text from '@/components/shared/Text'
import LoginForm from './form'

export default function LoginPage() {
  return (
    <div className='flex flex-col gap-5 px-5'>
      <div>
        <Text type='heading' className='text-lg font-semibold'>
          Login
        </Text>
      </div>

      <LoginForm />

      <div className='space-y-3'>
        <Text type='secondary' className='text-center'>Or continue with this social profiles</Text>
        <div className='flex items-center justify-evenly'>
          <IconButton type='submit' icon={FaGoogle} />
          <IconButton type='submit' icon={FaGithub} />
        </div>
      </div>

      <Text type='secondary' className='text-center'>
        Don&apos;t have an account yet? <Link href="/register">Register</Link>
      </Text>
    </div>
  )
}
