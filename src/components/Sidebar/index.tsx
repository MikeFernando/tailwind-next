import {
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Search,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r-2 border-r-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-2 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 p-0 placeholder-zinc-600 placeholder:text-base"
          placeholder="Search"
        />
      </div>

      <nav aria-label="primaria" className="list-none space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart2} />
        <NavItem title="Projects" icon={Layers} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <UsedSpaceWidget />
    </aside>
  )
}
