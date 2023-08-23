'use client'
import React, { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

interface InputFileContextData {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const InputFileContext = React.createContext({} as InputFileContextData)

export const Root = (props: RootProps) => {
  const id = React.useId()
  const [files, setFiles] = React.useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <InputFileContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </InputFileContext.Provider>
  )
}

export const useInputFile = () => React.useContext(InputFileContext)
