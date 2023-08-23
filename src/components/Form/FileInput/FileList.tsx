'use client'
import React from 'react'

import { useInputFile } from './Root'
import { Trash2, UploadCloud } from 'lucide-react'
import { formatBytes } from '@/utils/formatBytes'

export const FileList = () => {
  const { files } = useInputFile()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-3 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-50 bg-violet-100 p-2 text-violet-600">
            <UploadCloud className="h-4 w-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="mt-1 flex w-full items-start gap-3">
              <div className="w-full">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 w-4/5 rounded-full bg-violet-500" />
                </div>
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>

          <button className="text-sm text-zinc-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  )
}
