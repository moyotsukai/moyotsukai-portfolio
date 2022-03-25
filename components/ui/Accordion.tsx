import React, { useState } from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import Divider from './Divider'
import ToggleMarker from './ToggleMarker'
import { primaryBackgroundColor, primaryColor } from '../../styles/colors'

type Props = {
  title: string
  children?: React.ReactNode
}

const Accordion: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      y: 0
    },
    closed: {
      height: 0,
      opacity: 0,
      y: -10
    }
  }

  return (
    <div css={accordionStyle}>
      <motion.button
        onClick={toggleIsOpen}
        css={summaryContainerStyle}
      >
        <div css={titleContainerStyle}>
          <div css={titleStyle}>
            {props.title}
          </div>
        </div>
        <ToggleMarker isOpen={!isOpen} />
      </motion.button>

      <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeOut"
        }}
        css={detailContainerStyle}
      >
        <Divider />
        {props.children}
      </motion.div>
    </div>
  )
}

const accordionStyle = css`
  background-color: ${primaryBackgroundColor};
  margin: 0 auto;
  max-width: 800px;
  padding: 15px 5px;
  border: solid 1.5px ${primaryColor};
  border-radius: 12px;
  text-align: center;
  @media(min-width: 500px) {
    padding: 15px 10px;
  }
`
const summaryContainerStyle = css`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: ${primaryBackgroundColor};
  -webkit-tap-highlight-color: #000;
  width: 100%;
  &:focus {
    outline: none;
  }
`
const titleContainerStyle = css`
  flex-grow: 1;
`
const titleStyle = css`
  font-size: 18px;
  text-align: left;
`
const detailContainerStyle = css`
  overflow: hidden;
`

export default Accordion