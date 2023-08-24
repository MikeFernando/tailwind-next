'use client'
import React from 'react'

type TextareaProps = React.ComponentProps<'textarea'>

export const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
