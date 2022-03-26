import React from 'react'
import { css } from '@emotion/react'
import Accordion from '../ui/Accordion'
import { primaryBackgroundColor } from '../../styles/colors'
import Spacer from '../ui/Spacer'
import Hero from '../functional/Hero'
import Br from '../ui/Br'
import Jump from '../ui/Jump'
import TechWork from '../functional/TechWork'
import SupportingText from '../ui/SupportingText'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Hero />

      {/* Tech */}
      <Accordion title="作品 - Tech">
        <div>
          {/* ErabeRule */}
          <TechWork title="ErabeRule" imgSrc="/tech/eraberule.png">
            <Jump href="https://eraberule.com">
              eraberule.com
            </Jump>
            <Spacer y={5} />
            <p>
              経済学的に望ましいとされる投票ルールを実験的に用いることができる投票アプリ。
              社会的選択理論の社会実装を目的としたWebアプリとしては国内初。
              母校の経済の授業にて、教材として活用して頂いている。
              高校３年次に校長賞を受賞。
            </p>
            <SupportingText>
              - 企画・実装・デザイン
            </SupportingText>
            <SupportingText>
              - Firebase, Next.js, Recoil, Emotion, Vercel
            </SupportingText>
          </TechWork>
          <Br style="large" />

          {/* Color Converter */}
          <TechWork title="Color Converter" imgSrc="/tech/color-converter.png">
            <Jump href="https://color.moyotsukai.dev">
              color.moyotsukai.dev
            </Jump>
            <Spacer y={5} />
            <p>
              Hex, RGBAなど５つの形式に相互に対応したカラー変換ツール。
              一覧性が高く、カラーを編集すると他のカラーモードの値がレスポンシブに更新される。
            </p>
            <SupportingText>
              - 企画・実装・デザイン
            </SupportingText>
            <SupportingText>
              - Next.js, React Context, Emotion, Cloudflare Pages
            </SupportingText>
          </TechWork>
          <Br style="large" />

          {/* てんとうや */}
          <TechWork title="てんとうや ホームページ" imgSrc="/tech/tentouya.png">
            <Jump href="https://tentouya.com">
              tentouya.com
            </Jump>
            <Spacer y={5} />
            <p>
              自分達の運営する昆虫グッズブランドのホームページ。
            </p>
            <SupportingText>
              - 企画・実装・デザイン
            </SupportingText>
            <SupportingText>
              - Next.js, Emotion, microCMS, Netlify
            </SupportingText>
          </TechWork>
          <Br style="large" />

          {/* ByColor */}
          <TechWork title="ByColor" imgSrc="/tech/bycolor.png">
            <Jump href="https://apps.apple.com/us/app/bycolor-sort-photos-by-color/id1498754477">
              App Store
            </Jump>
            <Spacer y={5} />
            <p>
              写真を色で分類するという視点を提案するiOSアプリ。
            </p>
            <SupportingText>
              - 企画・実装・デザイン
            </SupportingText>
            <SupportingText>
              - Swift
            </SupportingText>
          </TechWork>
          <Br style="large" />

          {/* CameraLayer */}
          <TechWork title="CameraLayer" imgSrc="/tech/cameralayer.png">
            <Jump href="https://apps.apple.com/us/app/cameralayer-translucent-screen/id1502882036">
              App Store
            </Jump>
            <Spacer y={5} />
            <p>
              アルバムにある写真を半透明に重ねて写真撮影ができるiOSアプリ。
            </p>
            <SupportingText>
              - 企画・実装・デザイン
            </SupportingText>
            <SupportingText>
              - Swift
            </SupportingText>
          </TechWork>
          <Br style="large" />

          {/* ErabeRule iOS */}
          <TechWork title="ErabeRule iOS版" imgSrc="/tech/eraberule.png">
            <Jump href="https://apps.apple.com/jp/app/eraberule/id1552835670">
              App Store
            </Jump>
            <Spacer y={5} />
            <p>
              ErabeRuleのiOS版アプリ。
            </p>
            <SupportingText>
              - 企画・実装・デザイン
            </SupportingText>
            <SupportingText>
              - Firebase, Swift
            </SupportingText>
          </TechWork>
        </div>
      </Accordion>
      <Spacer y={30} />

      {/* Art */}
      <Accordion title="作品 - Art">
        さくひん
      </Accordion>
      <Spacer y={30} />

      {/* About */}
      <Accordion title="About">
        <div>
          <p>青井新太郎</p>
          <p>2003年生まれ</p>
          <Br />
          <p>デザイン、アート、プログラミング</p>
          <Br />
          <p>スキル</p>
          <p>React, Swift, TypeScript, HTML, CSS, Illustrator, Photoshop, Rhinoceros</p>
          <Br />
          <p>リンク</p>
          <p>
            Twitter:
            <Spacer x={5} />
            <Jump href="https://twitter.com/moyotsukai">
              @moyotsukai
            </Jump>
          </p>
          <p>
            Zenn:
            <Spacer x={5} />
            <Jump href="https://zenn.dev/moyotsukai">
              @moyotsukai
            </Jump>
          </p>
        </div>
      </Accordion>
      <Spacer y={30} />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  background-color: ${primaryBackgroundColor};
  padding: 0 10px;
`

export default IndexPage