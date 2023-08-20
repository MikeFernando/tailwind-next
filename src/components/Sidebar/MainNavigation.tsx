import { Home, BarChart2, Users, Layers, CheckSquare, Flag } from 'lucide-react'
import { NavItem } from './NavItem'

export const MainNavigation = () => {
  return (
    <nav aria-label="primaria" className="list-none space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart2} />
      <NavItem title="Projects" icon={Layers} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
