import { User } from 'lucide-react'
import React, { ComponentProps } from 'react'

type ImagePreviewProps = ComponentProps<'div'>

export const ImagePreview = (props: ImagePreviewProps) => {
  return (
    <div
      className="h-16px flex w-16 items-center justify-center rounded-full bg-violet-50 p-4"
      {...props}
    >
      <User className="h-8 w-8 text-violet-600" />
    </div>
  )
}
