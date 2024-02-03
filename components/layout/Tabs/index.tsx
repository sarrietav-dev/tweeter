"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { MdBookmark, MdExplore, MdHome } from "react-icons/md";

export default function Tabs() {
  const pathname = usePathname()

  const routes = [{
    href: "/",
    icon: MdHome,
  }, {
    href: "/explore",
    icon: MdExplore,
  }, {
    href: "/bookmarks",
    icon: MdBookmark,
  }]

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-16 w-full justify-around border-b bg-white sm:hidden">
      {routes.map(({ href, icon }) => (
        <TabItem key={href}
          href={href}
          icon={icon}
          active={pathname === href}
        />
      ))}
    </div>
  )
}

function TabItem({ icon: Icon, active, href }: { icon: IconType, active?: boolean, href: string, }) {
  const fontAwesomeClasses = active ? "text-blue-500" : "text-gray-500"

  return (
    <div className="flex h-full w-16 flex-col">
      <Link href={href} className="group flex h-full w-16 flex-col items-center justify-center">
        <div className="w-full rounded p-1 text-center transition group-active:bg-gray-200">
          <Icon className={fontAwesomeClasses} size={24} />
        </div>
      </Link>
      {active && <div className="mt-auto h-1 w-16 rounded-t bg-blue-500"></div>}
    </div >
  )
}