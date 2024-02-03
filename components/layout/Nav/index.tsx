import Avatar from "@/components/shared/Avatar";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import NavItem from "./NavItem";

export default function Nav() {

  return (
    <nav className="flex h-16 items-center justify-between bg-white px-5 py-1">
      <div>
        <Image src="/tweeter.svg" className="hidden md:block" alt="Tweeter" width={150} height={30} />
        <Image src="/tweeter-small.svg" className="block md:hidden" alt="Tweeter" width={50} height={30} />
      </div>
      <div className="hidden h-full items-center justify-center gap-12 sm:flex">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/explore">Explore</NavItem>
        <NavItem href="/bookmarks">Bookmarks</NavItem>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Avatar size="sm" />
        <p className="hidden text-xs font-bold sm:block">
          Xanthe Neal
        </p>
        <div className="hidden sm:block">
          <MdExpandMore size={15} />
        </div>
      </div>
    </nav>
  )
}
