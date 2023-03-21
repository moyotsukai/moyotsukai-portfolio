import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import SupportingText from '../ui/SupportingText'
import Spacer from '../ui/Spacer'
import ScrollContainer from 'react-indiana-drag-scroll'
import { ImageItem } from '../../types/ImageItem.type'

type Props = {
  images: ImageItem[]
}

const ImageGallery: React.FC<Props> = (props) => {
  return (
    <div css={imageGalleryStyle}>
      <ScrollContainer vertical={false} horizontal={true} hideScrollbars={false} activationDistance={1}>
        {props.images.map((item, index) => (
          <div css={imageItemStyle} key={index}>
            <div css={imageContainerStyle}>
              <Image src={item.src} width={350} height={350} alt="" />
            </div>
            <SupportingText>
              {item.title}
            </SupportingText>
            <Spacer size={10} />
          </div>
        ))}
      </ScrollContainer>
    </div>
  )
}

const imageGalleryStyle = css`
  overflow-x: scroll;
  white-space: nowrap;
  cursor: pointer;
`
const imageItemStyle = css`
  display: inline-block;
  width: 90%;
  max-width: 350px;
  vertical-align: top;
`
const imageContainerStyle = css`
  max-width: 350px;
  max-height: 350px;
  border: solid 1px #fff;
`

export default ImageGallery