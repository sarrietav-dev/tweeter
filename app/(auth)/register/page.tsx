import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from '@/components/Link'
import Button from '@/components/Button'
import TextFormField from '@/components/FormField'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

export default function RegisterPage() {
  return (
    <div className='px-5 flex flex-col gap-5'>
      <div className='space-y-3'>
        <Text type='heading' className='font-semibold text-lg'>
          Join Tweeter today.
        </Text>
        <Text type='paragraph'>
          Connect with your friends — and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.
        </Text>
      </div>

      <form className='flex flex-col gap-3'>
        <TextFormField icon={faPerson} label='Your name' type='text' name='name' />
        <TextFormField icon={faEnvelope} label='Email' type='email' name='email' />
        <TextFormField icon={faLock} label='Password' type='password' name='password' />
        <Button label='Join' type='submit' />
      </form>

      <div className='space-y-3'>
        <Text type='secondary' className='text-center'>Or continue with this social profiles</Text>
        <div className='flex items-center justify-evenly'>
          <IconButton type='submit' icon={faGoogle} />
          <IconButton type='submit' icon={faGithub} />
        </div>
      </div>

      <Text type='secondary' className='text-center'>
        Already have an account? <Link href="/login">Login</Link>
      </Text>
    </div>
  )
}