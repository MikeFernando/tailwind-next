import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export const Root = (props: RootProps) => {
  return <div {...props} />
}
