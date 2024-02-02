import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex h-16 px-5">
      <Image src="/tweeter.svg" className="hidden md:block" alt="Tweeter" width={150} height={30} />
      <Image src="/tweeter-small.svg" className="block md:hidden" alt="Tweeter" width={50} height={30} />
    </nav>
  )
}