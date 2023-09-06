import { css } from '@emotion/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const TextRight: React.FC<Props> = ({ children }: Props) => {
  return (
    <p css={textRightStyle}>
      {children}
    </p>
  )
}

const textRightStyle = css`
  text-align: right;
`

export default TextRight