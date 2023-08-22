/* eslint-disable @next/next/no-img-element */
'use client'
import React, { ComponentProps } from 'react'
import { User } from 'lucide-react'

import { useInputFile } from './Root'

type ImagePreviewProps = ComponentProps<'div'>

export const ImagePreview = (props: ImagePreviewProps) => {
  const { files } = useInputFile()

  const previewURL = React.useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div
        className="h-16px flex w-16 items-center justify-center rounded-full bg-violet-50 p-4"
        {...props}
      >
        <User className="h-8 w-8 text-violet-600" />
      </div>
    )
  } else {
    return (
      <img
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
