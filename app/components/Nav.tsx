"use client"

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex h-16 items-center justify-between px-5 py-1">
      <div>
        <Image src="/tweeter.svg" className="hidden md:block" alt="Tweeter" width={150} height={30} />
        <Image src="/tweeter-small.svg" className="block md:hidden" alt="Tweeter" width={50} height={30} />
      </div>
      <div className="hidden h-full items-center justify-center gap-12 sm:flex">
        <NavItem active={pathname == "/"} href="/">Home</NavItem>
        <NavItem active={pathname == "/explore"} href="/explore">Explore</NavItem>
        <NavItem active={pathname == "/bookmarks"} href="/bookmarks">Bookmarks</NavItem>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Image src="https://i.pravatar.cc/32?u=xanthe-neaL" className="rounded-lg" alt="Profile" width={32} height={32} />
        <p className="hidden text-xs font-bold sm:block">
          Xanthe Neal
        </p>
        <div className="hidden sm:block">
          <FontAwesomeIcon icon={faChevronDown} size="sm" />
        </div>
      </div>
    </nav>
  )
}

function NavItem({ children, active, href }: { children: React.ReactNode, active?: boolean, href: string, }) {
  const linkTextClasses = clsx("w-full min-w-min rounded p-1 text-center text-sm transition group-active:bg-gray-200", {
    "text-blue-500": active,
    "text-gray-500": !active,
  }, {
    "font-semibold": active,
    "font-normal": !active,
  })

  return (
    <div className="flex h-full w-16 flex-col items-center">
      <Link href={href} className="group flex h-full flex-col items-center justify-center">
        <div className={linkTextClasses}>
          {children}
        </div>
      </Link>
      {active && <div className="mt-auto h-1 w-20 rounded-t bg-blue-500"></div>}
    </div >
  )
}