import { Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r-2 border-r-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-2 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 p-0 placeholder-zinc-600 placeholder:text-base"
          placeholder="Search"
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
