import { SettingsTabs } from '@/components/SettingsTabs'

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

        <form id="settings">oi</form>
      </div>
    </>
  )
}
