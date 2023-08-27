'use client'
import React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useInputFile } from './Root'
import { FileItem } from './FileItem'

export const FileList = () => {
  const { files } = useInputFile()
  const [parent] = useAutoAnimate({})

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="complete"
        />
      ))}
    </div>
  )
}
