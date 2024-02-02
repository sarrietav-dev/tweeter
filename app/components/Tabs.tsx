"use client"

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookmark, faCompass, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname()

  const routes = [{
    href: "/",
    icon: faHome,
  }, {
    href: "/explore",
    icon: faCompass,
  }, {
    href: "/bookmarks",
    icon: faBookmark,
  }]

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-16 w-full justify-around border-b md:hidden">
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

function TabItem({ icon, active, href }: { icon: IconProp, active?: boolean, href: string, }) {
  const fontAwesomeClasses = active ? "text-blue-500" : "text-gray-500"

  return (
    <div className="flex h-full w-16 flex-col">
      <Link href={href} className="group flex h-full w-16 flex-col items-center justify-center">
        <div className="w-full rounded p-1 text-center transition group-active:bg-gray-200">
          <FontAwesomeIcon className={fontAwesomeClasses} icon={icon} size="lg" />
        </div>
      </Link>
      {active && <div className="mt-auto h-1 w-16 rounded-t bg-blue-500"></div>}
    </div >
  )
}