import React from 'react'
import { css } from '@emotion/react'

type Props = {
  size: number
  isVertical?: boolean
}

const Spacer: React.FC<Props> = (props) => {
  const isVertical = props.isVertical ?? true

  if (isVertical) {
    return (
      <div css={() => verticalSpacerStyle(props.size)} />
    )
  } else {
    return (
      <div css={() => horizontalSpacerStyle(props.size)} />
    )
  }
}

const verticalSpacerStyle = (size: number) => css`
  display: block;
  height: ${size}px;
`
const horizontalSpacerStyle = (size: number) => css`
  display: inline-block;
  width: ${size}px;
`

export default Spacer