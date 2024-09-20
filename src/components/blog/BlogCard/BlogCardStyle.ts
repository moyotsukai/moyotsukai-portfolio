import { css } from "@emotion/react"
import { primaryShadowColor } from "../../../styles/colors"

export const blogCardStyle = css`
  width: 300px;
  max-width: 90%;
  display: inline-block;
  background-color: #fff;
  overflow: hidden;
  border-radius: 6px;
  box-shadow:
    ${primaryShadowColor} 0 3px 6px -2px,
    ${primaryShadowColor} 0 3px 4px -5px;
  transition: ease-in-out 0.2s;

  &:hover {
    box-shadow:
      ${primaryShadowColor} 0 10px 38px -10px,
      ${primaryShadowColor} 0 10px 20px -15px;
  }
`

export const blogCardImageContainer = css`
  width: 100%;
  height: 180px;
  overflow: hidden;
`

export const blogCardImageStyle = css`
  object-fit: cover;
`

export const blogCardTextContainerStyle = css`
  padding: 16px 12px;
`

export const blogCardTitleStyle = css`
  font-size: 18px;
`
