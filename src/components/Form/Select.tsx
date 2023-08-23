'use client'
import React from 'react'
import { Check, ChevronDown } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'

export const Select = () => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500">
        <SelectPrimitive.Value
          className="text-black"
          placeholder="Select a country..."
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none"
            >
              <SelectPrimitive.ItemText>Brasil</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="h-3 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText>United State</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="h-3 w-4 font-medium text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
