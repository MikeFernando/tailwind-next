import React, { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  return <input type="file" id="photo" className="sr-only" {...props} />
}
