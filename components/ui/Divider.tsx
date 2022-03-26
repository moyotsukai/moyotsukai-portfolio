import React from 'react'
import { css } from '@emotion/react'
import { dividerColor } from '../../styles/colors'

const Divider: React.FC = () => {
  return (
    <div css={dividerStyle} />
  )
}
const dividerStyle = css`
  border-bottom: solid 1px ${dividerColor};
  margin: 0 10px;

  @media(min-width: 600px) {
    margin: 0 20px;
  }
`

export default Divider