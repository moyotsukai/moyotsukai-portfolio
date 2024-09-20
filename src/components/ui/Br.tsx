import React from "react"
import Spacer from "./Spacer"

type Props = {
  style?: "small" | "large"
}

const Br: React.FC<Props> = (props) => {
  const style = props.style || "small"
  if (style === "small") {
    return <Spacer size={15} />
  } else {
    return <Spacer size={35} />
  }
}

export default Br
