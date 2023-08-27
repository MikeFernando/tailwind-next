import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { formatBytes } from '@/utils/formatBytes'
import { CheckCircle, Trash2, UploadCloud } from 'lucide-react'
import { Button } from '@/components/Button'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-3 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-50 bg-violet-100 p-2 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
        icon: 'border-violet-50',
      },
      error: {
        container: 'bg-error-25, border border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
      },
    },
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export const FileItem = ({ name, size, state }: FileItemProps) => {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again
            </span>
            <span className="text-sm text-error-500">{name}</span>
          </div>

          <button className="text-sm font-semibold text-error-700 hover:text-error-900">
            try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="mt-1 flex w-full items-start gap-3">
            <div className="w-full">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div
                  className="h-2 rounded-full bg-violet-500"
                  style={{ width: state === 'complete' ? '100%' : '80%' }}
                />
              </div>
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
