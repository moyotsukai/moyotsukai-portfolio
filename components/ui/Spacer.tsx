import React from 'react'
import { css } from '@emotion/react'

type Props = {
  x?: number,
  y?: number
}

const Spacer: React.FC<Props> = (props) => {
  const isInlineStyle = props.x ? true : false
  const x = props.x ?? 0
  const y = props.y ?? 0

  return (
    <div css={() => spacerStyle(isInlineStyle, x, y)} />
  )
}

const spacerStyle = (isInlineStyle: boolean, x: number, y: number) => css`
  display: ${isInlineStyle ? "inline" : "block"};
  width: ${x}px;
  height: ${y}px;
`

export default Spacer