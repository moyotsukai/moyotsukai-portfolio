import { css } from '@emotion/react'
import React from 'react'
import { supportingTextColor } from '../../styles/colors'

type Props = {
  children: React.ReactNode
}

const SupportingText: React.FC<Props> = ({ children }: Props) => {
  return (
    <p css={supportingTextStyle}>
      {children}
    </p>
  )
}

const supportingTextStyle = css`
  color: ${supportingTextColor};
  font-size: 15px;
  white-space: normal;
  line-height: 1.4;
`

export default SupportingText