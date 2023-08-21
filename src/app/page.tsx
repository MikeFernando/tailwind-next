import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '../components/Input'
import { Clock, Mail, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="flex flex-col">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-200 pb-5">
          <div>
            <h2 className="text-lg font-medium text-zinc-900 ">
              Personal info
            </h2>
            <span className="text-sm font-normal text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex gap-2">
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg border bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="divide-y-[1px] divide-zinc-200 ">
          {/* Name */}
          <div className="grid-cols-form grid pb-5">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-zinc-700"
            >
              Nome
            </label>
            <div className="flex gap-6">
              <Input.Root>
                <Input.Control
                  id="name"
                  placeholder="Oliva"
                  className="text-base font-normal text-zinc-900 placeholder:text-zinc-900"
                />
              </Input.Root>

              <Input.Root>
                <Input.Control
                  placeholder="Rhye"
                  className="text-base font-normal text-zinc-900 placeholder:text-zinc-900"
                />
              </Input.Root>
            </div>
          </div>
          {/* Email */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-zinc-700"
            >
              Email address
            </label>
            <div className="flex gap-6 ">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5" />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  placeholder="applemikera@gmail.com"
                  className="text-base font-normal text-zinc-900 placeholder:text-zinc-900"
                />
              </Input.Root>
            </div>
          </div>
          {/* Photo */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="photo"
              className="text-sm font-semibold text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="flex gap-6">
              <div className="h-16px flex w-16 items-center justify-center rounded-full bg-violet-50 p-4">
                <User className="h-8 w-8 text-violet-600" />
              </div>
            </div>
          </div>
          {/* Role */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="role"
              className="text-sm font-semibold text-zinc-700"
            >
              Role
            </label>
            <div className="flex gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  placeholder="Product Designer"
                  className="text-base font-normal text-zinc-900 placeholder:text-zinc-900"
                />
              </Input.Root>
            </div>
          </div>
          {/* Country */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="role"
              className="text-sm font-semibold text-zinc-700"
            >
              Country
            </label>
            <div className="flex gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  placeholder="United States"
                  className="text-base font-normal text-zinc-900 placeholder:text-zinc-900"
                />
              </Input.Root>
            </div>
          </div>
          {/* Timezone */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="timezone"
              className="text-sm font-semibold text-zinc-700"
            >
              Country
            </label>
            <div className="flex gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Clock className="h-5 w-5" />
                </Input.Prefix>
                <Input.Control
                  id="timezone"
                  placeholder="Pacific Standard Time (PST) UTC−08:00"
                  className="flex items-center text-base font-normal text-zinc-900 placeholder:text-zinc-900"
                />
              </Input.Root>
            </div>
          </div>
          {/* Bio */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="bio"
              className="text-sm font-semibold text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="flex gap-6">
              <Input.Root>
                <Input.Control placeholder="Normal text" />
              </Input.Root>
            </div>
          </div>
          {/* Portfolio */}
          <div className="grid-cols-form grid py-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-semibold text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div className="flex gap-6"></div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-2 py-4">
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg border bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
