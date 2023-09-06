import React from 'react'
import { css } from '@emotion/react'

type Props = {
  size?: number
}

const ArrowBack: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size + "px" || "24px"}
      height={props.size + "px" || "24px"}
      viewBox="0 0 24 24"
      css={iconStyle}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </svg>
  )
}

const iconStyle = css`
  fill: currentColor;
  vertical-align: middle;
`

export default ArrowBack