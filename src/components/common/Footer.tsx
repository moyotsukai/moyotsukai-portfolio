import React from 'react'
import { css } from '@emotion/react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  const copyYear = year === 2022 ? "2022" : "2022-" + year

  return (
    <footer css={footerStyle}>
      &copy; {copyYear} Shintaro Aoi
    </footer>
  )
}

const footerStyle = css`
  padding: 3px 0;
  background-color: #fff;
  text-align: center;
  font-size: 10pt;
  color: #999;
`

export default Footer