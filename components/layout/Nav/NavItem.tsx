"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItem({ children, href }: { children: React.ReactNode, href: string, }) {
  const pathname = usePathname()

  const active = pathname == href

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