'use client'
import React, { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

interface InputFileContextData {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const InputFileContext = React.createContext({} as InputFileContextData)

export const Root = (props: RootProps) => {
  const id = React.useId()
  const [files, setFiles] = React.useState<File[]>([])

  return (
    <InputFileContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </InputFileContext.Provider>
  )
}

export const useInputFile = () => React.useContext(InputFileContext)
