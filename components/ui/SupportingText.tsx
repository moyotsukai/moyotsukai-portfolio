import { css } from '@emotion/react'
import React from 'react'
import { supportingTextColor } from '../../styles/colors'

type Props = {
  children: React.ReactNode
}

const SupportingText: React.FC<Props> = (props) => {
  return (
    <p css={supportingTextStyle}>
      {props.children}
    </p>
  )
}

const supportingTextStyle = css`
  color: ${supportingTextColor};
  font-size: 15px;
`

export default SupportingText