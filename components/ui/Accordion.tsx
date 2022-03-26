import React, { useState } from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import Divider from './Divider'
import ToggleMarker from './ToggleMarker'
import { dividerColor, primaryHeighlightColor } from '../../styles/colors'

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
        <div css={detailStyle}>
          {props.children}
        </div>
      </motion.div>
    </div>
  )
}

const accordionStyle = css`
  background-color: #fff;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
  border: solid 1px ${dividerColor};
  border-radius: 12px;
  overflow: hidden;
`
const summaryContainerStyle = css`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: #fff;
  -webkit-tap-highlight-color: ${primaryHeighlightColor};
  width: 100%;
  padding: 15px 15px;

  @media(min-width: 600px) {
    padding: 15px 25px;
  }

  &:focus {
    outline: none;
  }
`
const titleContainerStyle = css`
  flex-grow: 1;
`
const titleStyle = css`
  font-size: 19px;
  text-align: left;
`
const detailContainerStyle = css`
  overflow: hidden;
`
const detailStyle = css`
  padding: 15px 15px;
  text-align: left;

   @media(min-width: 600px) {
    padding: 15px 25px;
  }
`
export default Accordion