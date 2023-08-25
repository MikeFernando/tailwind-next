'use client'
import {
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Menu,
  Search,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r-2 border-r-zinc-200 bg-white p-4 py-8 data-[state='open']:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state='closed']:bottom-0 ">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state='closed']:hidden lg:data-[state='closed']:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav aria-label="primaria" className="list-none space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart2} />
          <NavItem title="Projects" icon={Layers} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <UsedSpaceWidget />

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
