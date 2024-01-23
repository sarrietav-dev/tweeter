import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex h-16 px-5">
      <Image src="/tweeter.svg" alt="Tweeter" width={150} height={30} />
    </nav>
  )
}