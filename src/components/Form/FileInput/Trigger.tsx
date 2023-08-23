'use client'
import React, { ComponentProps } from 'react'
import { UploadCloud } from 'lucide-react'

import { useInputFile } from './Root'

type TriggerProps = ComponentProps<'label'>

export const Trigger = (props: TriggerProps) => {
  const { id } = useInputFile()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 bg-violet-25 px-6 py-4 text-center shadow-sm hover:border-violet-200"
      {...props}
    >
      <div className="group-hover:border-via-violet-50 rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="group flex flex-col items-center gap-1 text-zinc-500 group-hover:text-violet-500">
        <span className="text-sm font-semibold text-violet-500 group-hover:text-violet-700">
          Click to upload{' '}
          <span className="text-sm font-normal">or drag and drop</span>
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
