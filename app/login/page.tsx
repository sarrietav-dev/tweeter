import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <h1>
        Login
      </h1>

      <form>
        <div className="relative">
          <FontAwesomeIcon icon={faEnvelope} size='xl' height={100} className="absolute inset-y-3 left-3 text-gray-500" />
          <input type="email" name="email" id="email" placeholder='Email' className='size-full px-12 py-3' />
        </div>
        <div className="relative">
          <FontAwesomeIcon icon={faLock} size='xl' height={100} className="absolute inset-y-3 left-3 text-gray-500" />
          <input type="password" name="password" id="password" placeholder='Password' className='size-full px-12 py-3' />
        </div>
        <button type='submit' className='bg-blue-500 w-full px-5 py-2'>
          Join
        </button>
      </form>

      <p>Or continue with this social profiles</p>

      <div>
        <button className='border-2 border-zinc-500 rounded-full size-12'>
          <FontAwesomeIcon icon={faGoogle} size='xl' height={100} className="inset-y-3 left-3 text-gray-500" />
        </button>
        <button className='border-2 border-zinc-500 rounded-full size-12'>
          <FontAwesomeIcon icon={faGithub} size='xl' height={100} className="inset-y-3 left-3 text-gray-500" />
        </button>
      </div>

      <p>
        Don&apos;t have an account yet? <Link href="/register">Register</Link>
      </p>
    </div>
  )
}