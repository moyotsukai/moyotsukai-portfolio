import React from 'react'
import * as s from './BackNavigationStyle'
import Link from 'next/link'
import ArrowBack from '../../icons/ArrowBack'

type Props = {
  href: string
  children: React.ReactNode
}

const BackNavigation: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <span css={s.backNavigationStyle}>
        <ArrowBack size={14} />
        {children}
      </span>
    </Link>
  )
}

export default BackNavigation