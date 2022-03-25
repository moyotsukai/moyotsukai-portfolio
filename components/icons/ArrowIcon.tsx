import React from 'react'

type Props = {
  size?: string
  color?: string
}

const ArrowIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "24px"}
      height={props.size || "24px"}
      viewBox="0 0 24 24"
      fill={props.color || "#000"}
    >
      <path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  )
}

export default ArrowIcon