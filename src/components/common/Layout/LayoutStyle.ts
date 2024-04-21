import { css } from "@emotion/react"
import { primaryBackgroundColor } from "../../../styles/colors"

export const layoutStyle = css`
  background-color: #f2faff;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
  background-color: ${primaryBackgroundColor};
  padding: 0 10px;
`