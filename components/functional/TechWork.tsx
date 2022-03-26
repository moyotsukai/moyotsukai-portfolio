import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Spacer from '../ui/Spacer'
import { dividerColor } from '../../styles/colors'

type Props = {
  title: string
  imgSrc: string
  children: React.ReactNode
}

const TechWork: React.FC<Props> = (props) => {
  return (
    <div>
      <div css={containerStyle}>
        <div css={imageContainerStyle}>
          <Image src={props.imgSrc} width={50} height={50} />
        </div>
        <Spacer x={10} />
        <p css={titleStyle}>{props.title}</p>
      </div>
      <Spacer y={5} />
      {props.children}
    </div>
  )
}

const containerStyle = css`
  display: flex;
  align-items: center;
`
const imageContainerStyle = css`
  width: 50px;
  height: 50px;
  /* border: solid 1px ${dividerColor}; */
  box-shadow: 0 1px 2px 0 rgba(0, 134, 230, 0.3);
  border-radius: 10px;
  overflow: hidden;
`
const titleStyle = css`
  font-size: 18px;
`

export default TechWork