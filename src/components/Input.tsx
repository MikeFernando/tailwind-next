import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>
export function Prefix(props: InputPrefixProps) {
  return <div className="h-5 w-5 text-zinc-500" {...props} />
}

type ControlProps = ComponentProps<'input'>
export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 p-0 placeholder-zinc-600 placeholder:text-base"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>
export const Root = (props: InputRootProps) => {
  return (
    <div
      className="mx-2 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
