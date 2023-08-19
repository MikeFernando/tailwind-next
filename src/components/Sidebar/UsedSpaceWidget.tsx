import { LifeBuoy, Settings } from 'lucide-react'
import { NavItem } from './NavItem'

export function UsedSpaceWidget() {
  return (
    <div className="mt-auto">
      <NavItem title="Support" icon={LifeBuoy} />
      <NavItem title="Settings" icon={Settings} />

      <div className="mt-6 bg-violet-50 px-4 py-5">
        <span className="mb-1 text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="mb-6 text-sm font-normal text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>

        <div className="my-4 h-2 w-full rounded-lg bg-violet-50">
          <div className="h-2 w-4/5 rounded-lg bg-violet-500"></div>
        </div>

        <button className="mr-3 text-sm font-semibold text-violet-500 hover:text-violet-600">
          Dismiss
        </button>
        <button className="text-sm font-semibold text-violet-700 hover:text-violet-800">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
