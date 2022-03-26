import React from 'react'
import Spacer from './Spacer'

type Props = {
  style?: "small" | "large"
}

const Br: React.FC<Props> = (props) => {
  const style = props.style || "small"
  if (style === "small") {
    return (
      <Spacer y={15} />
    )
  } else {
    return (
      <Spacer y={30} />
    )
  }
}

export default Br