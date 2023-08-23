'use client'
import React, { ChangeEvent, ComponentProps } from 'react'
import { useInputFile } from './Root'

type ControlProps = ComponentProps<'input'>

export const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { id, onFilesSelected } = useInputFile()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
