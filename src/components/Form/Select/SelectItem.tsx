'use client'
import React from 'react'
import { Check } from 'lucide-react'
import * as Select from '@radix-ui/react-select'

type SelectItemProps = Select.SelectItemProps & {
  text: string
  value: string
}

export const SelectItem = ({ text, value }: SelectItemProps) => {
  return (
    <Select.Item
      value={value}
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-3 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
