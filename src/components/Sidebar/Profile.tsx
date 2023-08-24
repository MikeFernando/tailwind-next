/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export const Profile = () => {
  return (
    <div className="flex">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/MikeFernando.png"
        alt=""
      />
      <div className="ml-3 flex-1 truncate">
        <p className="truncate text-sm/5 font-semibold text-zinc-700">
          Mike Fernando
        </p>
        <span className="text-sm/5 font-normal text-zinc-500">
          applemikera@gmail.com
        </span>
      </div>
      <Button variant="ghost">
        <LogOut className="text-zinc-500" />
      </Button>
    </div>
  )
}
