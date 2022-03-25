import React from 'react'
import { css } from '@emotion/react'
import Accordion from '../ui/Accordion'
import { primaryBackgroundColor } from '../../styles/colors'
import Spacer from '../ui/Spacer'
import Hero from '../functional/Hero'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Hero />

      <Accordion title="作品 - Tech">
        さくひん
      </Accordion>
      <Spacer y={25} />

      <Accordion title="作品 - Art">
        さくひん
      </Accordion>
      <Spacer y={25} />

      <Accordion title="About">
        さくひん
      </Accordion>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  background-color: ${primaryBackgroundColor};
  padding: 0 10px;
`

export default IndexPage