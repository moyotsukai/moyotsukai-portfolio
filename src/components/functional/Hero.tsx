import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <div css={imageContainerStyle}>
        <Image src="/profile.jpeg" width={100} height={100} alt="" />
      </div>
      <p css={titleStyle}>
        Shintaro Aoi
      </p>
      <p css={subtitleStyle}>
        ポートフォリオサイト
      </p>
    </div>
  )
}

const layoutStyle = css`
  text-align: center;
  padding: 25px 0;
`
const imageContainerStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  margin: 15px auto;
`
const titleStyle = css`
  font-size: 28px;
  margin: 15px 0;
`
const subtitleStyle = css`
  font-size: 19px;
  margin: 15px 0;
`

export default Hero