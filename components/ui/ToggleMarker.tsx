import React from 'react'
import { motion } from 'framer-motion'
import ArrowIcon from '../icons/ArrowIcon'

type ToggleMarkerProps = {
  isOpen: boolean
}

const ToggleMarker: React.FC<ToggleMarkerProps> = (props) => {
  const variants = {
    open: { rotate: 0 },
    closed: { rotate: -180 }
  }

  return (
    <motion.div
      animate={props.isOpen ? "open" : "closed"}
      variants={variants}
      transition={{
        type: "tween",
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      <ArrowIcon />
    </motion.div>
  )
}

export default ToggleMarker