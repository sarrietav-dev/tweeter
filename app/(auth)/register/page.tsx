import Link from '@/components/shared/Link'
import IconButton from '@/components/shared/IconButton'
import Text from '@/components/shared/Text'
import RegisterForm from './form'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

export default function RegisterPage() {
  return (
    <div className='flex flex-col gap-5 px-5'>
      <div className='space-y-3'>
        <Text type='heading' className='text-lg font-semibold'>
          Join Tweeter today.
        </Text>
        <Text type='paragraph'>
          Connect with your friends — and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.
        </Text>
      </div>

      <RegisterForm />

      <div className='space-y-3'>
        <Text type='secondary' className='text-center'>Or continue with this social profiles</Text>
        <div className='flex items-center justify-evenly'>
          <IconButton type='submit' icon={FaGoogle} />
          <IconButton type='submit' icon={FaGithub} />
        </div>
      </div>

      <Text type='secondary' className='text-center'>
        Already have an account? <Link href="/login">Login</Link>
      </Text>
    </div>
  )
}