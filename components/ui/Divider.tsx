import React from 'react'
import { css } from '@emotion/react'
import { dividerColor } from '../../styles/colors'

const Divider: React.FC = () => {
  return (
    <div css={dividerStyle} />
  )
}
const dividerStyle = css`
  margin: 0 8px;
  border-bottom: solid 1px ${dividerColor};
`

export default Divider