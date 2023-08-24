import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>
export const Root = (props: InputRootProps) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
      {...props}
    />
  )
}

type InputPrefixProps = ComponentProps<'div'>
export function Prefix(props: InputPrefixProps) {
  return <div className="h-5 w-5 text-zinc-500" {...props} />
}

type ControlProps = ComponentProps<'input'>
export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 p-0 placeholder-zinc-600 outline-none placeholder:text-base"
      {...props}
    />
  )
}
