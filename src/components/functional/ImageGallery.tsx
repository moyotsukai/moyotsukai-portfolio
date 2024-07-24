import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import Image from "next/image"
import SupportingText from "../ui/SupportingText"
import Spacer from "../ui/Spacer"
import ScrollContainer from "react-indiana-drag-scroll"
import { ImageItem } from "../../types/ImageItem.type"

type Props = {
  images: ImageItem[]
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", mouseMoveListener)

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener)
    }
  }, [])

  return (
    <div css={imageGalleryStyle}>
      <ScrollContainer
        vertical={false}
        horizontal={true}
        hideScrollbars={false}
        activationDistance={1}
      >
        {images.map((item, index) => (
          <div
            css={imageItemStyle}
            key={index}
          >
            <div css={imageContainerStyle}>
              <Image
                src={item.src}
                width={350}
                height={350}
                layout="responsive"
                alt=""
              />
            </div>
            <div css={textContainerStyle}>
              <SupportingText>{item.title}</SupportingText>
            </div>
            <Spacer size={10} />
          </div>
        ))}
      </ScrollContainer>
      <Pointer position={mousePosition} />
    </div>
  )
}

type PointerProps = {
  position: { x: number; y: number }
}

const Pointer: React.FC<PointerProps> = ({ position }) => (
  <div
    id="pointer"
    css={pointerStyle}
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
  ></div>
)

const imageGalleryStyle = css`
  overflow-x: scroll;
  white-space: nowrap;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      & > #pointer {
        display: block;
      }
    }
  }
`
const imageItemStyle = css`
  display: inline-block;
  width: 90%;
  max-width: 340px;
  vertical-align: top;
  border: solid 1px #fff;
`
const imageContainerStyle = css`
  width: 100%;
  max-width: 350px;
  max-height: 350px;
`
const textContainerStyle = css`
  padding-right: 6px;
`

const pointerStyle = css`
  display: none;
  width: 28px;
  height: 28px;
  border: solid 1px rgba(255, 174, 0, 0.8);
  background-color: rgba(255, 174, 0, 0.35);
  box-shadow: 0 0 4px 2px rgba(255, 174, 0, 0.2);
  position: fixed;
  top: -14px;
  left: -14px;
  border-radius: 50%;
  transition: 0.1s cubic-bezier(0.075, 0.82, 0.165, 1) transform;
  pointer-events: none;
`

export default ImageGallery
