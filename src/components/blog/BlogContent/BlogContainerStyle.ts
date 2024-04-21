import { css } from "@emotion/react"

const breakpoint = "500px"

export const blogContainerStyle = css`
  background-color: #fff;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 12px;
  padding: 30px;

  p {
    font-size: 16px;
    line-height: 2.0;
  }

  @media(max-width: ${breakpoint}) {
    padding: 15px;
  }
`