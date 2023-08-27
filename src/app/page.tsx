import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { SettingsTabs } from '@/components/SettingsTabs'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Select } from '@/components/Form/Select'
import { Textarea } from '@/components/Form/Textarea'
import * as FileInput from '../components/Form/FileInput'
import * as Input from '../components/Form/Input'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="mb-6 mt-0.5 text-3xl font-medium text-zinc-900">
        Settings
      </h1>

      <SettingsTabs />

      <div className="flex flex-col">
        <div className="mb-6 flex flex-col justify-between gap-5 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-lg font-medium text-zinc-900 ">
              Personal info
            </h2>
            <span className="text-sm font-normal text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>

        <form id="settings" className="divide-y-[1px] divide-zinc-200 ">
          {/* Name */}
          <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-zinc-700"
            >
              Nome
            </label>
            <div className="flex flex-col gap-6 lg:flex-row">
              <Input.Root>
                <Input.Control
                  id="name"
                  placeholder="Oliva"
                  className="text-base font-normal text-zinc-900 outline-none placeholder:text-zinc-500"
                />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="whitespace-nowrap text-sm font-semibold text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control
                    id="lastName"
                    placeholder="Rhye"
                    className="text-base font-normal text-zinc-900 outline-none placeholder:text-zinc-500"
                  />
                </Input.Root>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
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
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-semibold text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          {/* Role */}
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
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
                  className="text-base font-normal text-zinc-900 outline-none placeholder:text-zinc-900"
                />
              </Input.Root>
            </div>
          </div>
          {/* Country */}
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-semibold text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem text="United States" value="us" />
              <SelectItem text="Brasil" value="br" />
            </Select>
          </div>
          {/* Timezone */}
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-semibold text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Timezone...">
              <SelectItem
                text="Pacific Standard Time (UTC−08:00)"
                value="utc"
              />
              <SelectItem text="America São Paulo, SP (GMT-3)" value="gmt-3" />
            </Select>
          </div>
          {/* Bio */}
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-semibold text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    text="Text Normal"
                    defaultChecked
                    value="normal"
                  />
                  <SelectItem text="Markdown" value="md" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea />
            </div>
          </div>
          {/* Portfolio */}
          <div className="flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio"
              className="text-sm font-semibold text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-2 py-4">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
