import Image from 'next/image'

interface AvatarProps {
  size?: "sm" | "md" | "lg";
}

export default function Avatar({ size = "md" }: AvatarProps) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48,
  }
  return <Image src="https://i.pravatar.cc/32?u=xanthe-neaL" className="rounded-lg" alt="Profile" width={sizes[size]} height={sizes[size]} />
}