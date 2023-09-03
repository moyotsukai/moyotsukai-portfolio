import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { primaryColor } from '../../styles/colors'

type Props = {
  href: string
  children: React.ReactNode
}

const Jump: React.FC<Props> = (props) => {
  if (props.href.startsWith("/")) {
    return (
      <Link href={props.href} css={linkStyle}>
        {props.children}
      </Link>
    )
  } else {
    return (
      <Link href={props.href} target="_blank" rel="noopener noreferrer" css={linkStyle} >
        {props.children}
      </Link>
    )
  }
}

const linkStyle = css`
  color: ${primaryColor};

  &:hover {
    text-decoration: underline;
  }
`

export default Jump