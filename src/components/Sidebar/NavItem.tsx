import { ElementType } from 'react'
import { ChevronDown } from 'lucide-react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export const NavItem = ({ title, icon: Icon }: NavItemProps) => {
  return (
    <a
      className="group flex w-full items-center gap-3 rounded-md bg-white px-3 py-2 hover:bg-violet-50"
      href="/"
    >
      <Icon className="text-zinc-500" />
      <span className="text-base font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-500 group-hover:text-violet-300" />
    </a>
  )
}
