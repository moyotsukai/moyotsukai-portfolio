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
import { ImageItem } from '../../types/ImageItem.type'
import ImageGallery from '../functional/ImageGallery'
import Seo from '../common/Seo'

const moyotsukaiImages: ImageItem[] = [
  {
    title: "『循環』 紙 140cm×140cm",
    src: "/tech/cycle.jpeg"
  },
  {
    title: "カブトガニ",
    src: "/tech/horseshoecrab.jpg"
  },
  {
    title: "オオセンチコガネ",
    src: "/tech/oosenchi.jpg"
  },
  {
    title: "マイマイカブリ",
    src: "/tech/maimaikaburi.jpg"
  },
  {
    title: "カメノコテントウ",
    src: "/tech/kamenokotentou.jpg"
  }
]

const tentouyaImages: ImageItem[] = [
  {
    title: "テントウトランプ",
    src: "/tech/tentouplayingcards.jpg"
  },
  {
    title: "Tシャツ",
    src: "/tech/tshirt.jpg"
  },
  {
    title: "テントウダイス",
    src: "/tech/tentoudice.jpg"
  },
  {
    title: "絵はがき",
    src: "/tech/postcard.jpg"
  }
]

const highSchoolImages: ImageItem[] = [
  {
    title: "スクラッチのお皿",
    src: "/tech/okinawachoutonbo.jpg"
  },
  {
    title: "スクラッチのお皿",
    src: "/tech/youjiuo.jpg"
  },
  {
    title: "花器を制作",
    src: "/tech/ikebana.jpg"
  }
]

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Seo />
      <Hero />

      {/* Tech */}
      <Accordion title="作品 - Tech">
        <div>
          {/* ErabeRule */}
          <TechWork title="ErabeRule" imgSrc="/tech/eraberule.png">
            <Jump href="https://eraberule.com">
              eraberule.com
            </Jump>
            <Spacer size={5} />
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
            <Spacer size={5} />
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
            <Spacer size={5} />
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
            <Spacer size={5} />
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
            <Spacer size={5} />
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
            <Spacer size={5} />
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
      <Spacer size={30} />

      {/* Art */}
      <Accordion title="作品 - Art">
        <div>
          {/* もようつかい */}
          <TechWork title="もようつかい" imgSrc="/tech/moyotsukai.png">
            <Jump href="https://twitter.com/moyotsukai">
              Twitter
            </Jump>
            <Spacer size={5} />
            <p>
              「もようつかい」として紙で立体作品を作っています。
              主に昆虫など生き物のペーパークラフトを開発しています。
              「てんとうや」で販売したり、展覧会に出品したりしています。
              母校から依頼を受け、永久展示もしています。
            </p>
            <Spacer size={5} />
            <ImageGallery images={moyotsukaiImages} />
          </TechWork>
          <Br style="large" />

          {/* てんとうや */}
          <TechWork title="てんとうや" imgSrc="/tech/tentouya.png">
            <Jump href="https://tentouya.com">
              tentouya.com
            </Jump>
            <Spacer size={5} />
            <p>
              兄弟で、昆虫のユニークなデザインを活かしたグッズを制作・販売しています。
              ネットでの販売に加え、イベントにも出展しています。
            </p>
            <Spacer size={5} />
            <ImageGallery images={tentouyaImages} />
          </TechWork>
          <Br style="large" />

          {/* 中学・高校の時の作品 */}
          <TechWork title="中学・高校の時" imgSrc="/tech/moyotsukai.png">
            <Spacer size={5} />
            <p>
              中学生・高校生の時に作った作品です。
            </p>
            <Spacer size={5} />
            <ImageGallery images={highSchoolImages} />
          </TechWork>
        </div>
      </Accordion>
      <Spacer size={30} />

      {/* About */}
      <Accordion title="About">
        <div>
          <p>青井新太郎</p>
          <Br />

          <SupportingText>リンク</SupportingText>
          <div>
            <p>
              Twitter(メイン):
              <Spacer size={5} isVertical={false} />
              <Jump href="https://twitter.com/moyotsukai">
                @moyotsukai
              </Jump>
            </p>
            <p>
              GitHub:
              <Spacer size={5} isVertical={false} />
              <Jump href="https://github.com/Shinchan-git">
                Shinchan-git
              </Jump>
            </p>
            <p>
              Zenn:
              <Spacer size={5} isVertical={false} />
              <Jump href="https://zenn.dev/moyotsukai">
                @moyotsukai
              </Jump>
            </p>
            <p>
              てんとうやTwitter:
              <Spacer size={5} isVertical={false} />
              <Jump href="https://twitter.com/tentouya64">
                @tentouya64
              </Jump>
            </p>
          </div>
          <Br />

          <SupportingText>興味</SupportingText>
          <div>
            <p>デザイン(UIデザイン, Webデザイン, タイポグラフィ)</p>
            <p>アート(ペーパークラフト開発, 生け花)</p>
            <p>プログラミング(Webフロントエンド, iOSアプリ)</p>
          </div>
          <Br />

          <SupportingText>スキル</SupportingText>
          <div>
            <p>React, Swift, TypeScript, HTML, CSS, Illustrator, Photoshop, Rhinoceros</p>
          </div>
          <Br />

          <div>
            <p>2003年生まれ</p>
            <p>2022- Life is Tech ! iPhoneメンター</p>
          </div>
        </div>
      </Accordion>
      <Spacer size={30} />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  background-color: ${primaryBackgroundColor};
  padding: 0 10px;
`

export default IndexPage