import { css } from "@emotion/react"
import { primaryShadowColor } from "../../../styles/colors"

export const blogCardStyle = css`
  width: 300px;
  max-width: 90%;
  height: 240px;
  display: inline-block;
  background-color: #fff;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 4px 0 ${primaryShadowColor};

  &:hover {
    box-shadow: 0 3px 10px 0 ${primaryShadowColor};
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
  padding: 6px;
`

export const blogCardTitleStyle = css`
  font-size: 18px;
`