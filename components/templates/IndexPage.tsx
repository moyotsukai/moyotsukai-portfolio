import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import Hero from '../functional/Hero'
import Br from '../ui/Br'
import Jump from '../ui/Jump'
import TechWork from '../functional/TechWork'
import SupportingText from '../ui/SupportingText'
import { ImageItem } from '../../types/ImageItem.type'
import ImageGallery from '../functional/ImageGallery'
import Seo from '../common/Seo'
import Accordion from '../ui/Accordion'

const moyotsukaiImages_1: ImageItem[] = [
  {
    title: "『循環』 紙 140cm×140cm",
    src: "/tech/cycle.jpeg"
  },
  {
    title: "『循環』 / 無限に流れる生命の循環のワンシーンを切り出した",
    src: "/tech/cycle_2.jpg"
  },
  {
    title: "『再帰』 紙 140cm×140cm",
    src: "/tech/reccurence.png"
  }
]

const moyotsukaiImages_2: ImageItem[] = [
  {
    title: "『軌道』 紙 63cm×116cm",
    src: "/tech/orbit_2.jpg"
  },
  {
    title: "『軌道』 / コウイカのペーパークラフト",
    src: "/tech/orbit.jpg"
  },
  {
    title: "《Stride》 紙 42cm×91cm",
    src: "/tech/stride_1.jpg"
  },
  {
    title: "《Stride》 / ヤドカリが一歩一歩進んでいき、時間と共に平面から立体へと進展していく",
    src: "/tech/stride_2.jpg"
  }
]

const moyotsukaiImages_3: ImageItem[] = [
  {
    title: "オオセンチコガネ",
    src: "/tech/oosenchi.jpg"
  },
  {
    title: "カブトガニ",
    src: "/tech/horseshoecrab.jpg"
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
    title: "テントウトランプ / トランプの数字とテントウムシの模様が対応",
    src: "/tech/tentouplayingcards.jpg"
  },
  {
    title: "Tシャツ",
    src: "/tech/tshirt.jpg"
  },
  {
    title: "テントウダイス / 1〜6の目を実際のテントウムシの模様で表したダイス",
    src: "/tech/tentoudice.jpg"
  },
  {
    title: "絵はがき",
    src: "/tech/postcard.jpg"
  }
]

const highSchoolImages: ImageItem[] = [
  {
    title: "生け花",
    src: "/tech/ikebana.png"
  },
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
  },
  {
    title: "『生長の樹』 紙 高さ170cm",
    src: "/tech/seichounoki.jpg"
  },
  {
    title: "『生長の樹』/中学の時の成長を樹で表現",
    src: "/tech/seichounoki_2.jpg"
  },
  {
    title: "『生長の樹』",
    src: "/tech/seichounoki_3.jpg"
  }, {
    title: "『生長の樹』/中学の時の思い出を配置",
    src: "/tech/seichounoki_4.jpg"
  },
  {
    title: "中学の会誌の扉絵",
    src: "/tech/hanaminokasago.jpg"
  },
  {
    title: "林間学校のしおり",
    src: "/tech/asagimadara.jpg"
  },
  {
    title: "陶芸",
    src: "/tech/pottery.jpg"
  }
]

const IndexPage: React.FC = () => {
  return (
    <div>
      <Seo />
      <Hero />

      <Accordion.Root type="multiple">

        {/* Tech */}

        <Accordion.Item value="item-tech">
          <Accordion.Trigger>
            Software
          </Accordion.Trigger>

          <Accordion.Content>
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
                高校３年で校長賞を受賞。
              </p>
              <SupportingText>
                - 企画・実装・デザイン
              </SupportingText>
              <SupportingText>
                - Firebase, Next.js, Recoil
              </SupportingText>
            </TechWork>
            <Br style="large" />

            {/* @moyotsukai/bezier */}
            <TechWork title="@moyotsukai/bezier" imgSrc="/tech/color-converter.png">
              <Jump href="https://www.npmjs.com/package/@moyotsukai/bezier">
                @moyotsukai/bezier
              </Jump>
              <Spacer size={5} />
              <p>
                コードでベジェ曲線を描画するライブラリ。
                ベジェ曲線の直感的な定義方法を考案し、３通りのパラメータを使って曲線を生成できるnpmパッケージ。
                ペーパークラフトの展開図などをコードで管理することを目的としている。
              </p>
              <SupportingText>
                - 企画・実装
              </SupportingText>
              <SupportingText>
                - TypeScript
              </SupportingText>
            </TechWork>
            <Br style="large" />

            {/* LaunchHub */}
            <TechWork title="LaunchHub" imgSrc="/tech/launchhub.png">
              <Jump href="https://github.com/moyotsukai/launch-hub-clone">
                GitHub
              </Jump>
              <Spacer size={5} />
              <p>
                「労働を投資活動に」をコンセプトとした起業家と労働者のマッチングプラットフォーム。
                web3の技術を使ったDappで、フロントエンドの実装を担当した。
                AI+Crypto Hackathonに参加し、ASTAR Prizeを受賞。
              </p>
              <SupportingText>
                - フロントエンド実装
              </SupportingText>
            </TechWork>
            <Br style="large" />

            {/* 展覧会キャプション生成ツール */}
            <TechWork title="展覧会キャプション生成ツール" imgSrc="/tech/color-converter.png">
              <Jump href="https://caption.moyotsukai.dev/">
                caption.moyotsukai.dev
              </Jump>
              <Spacer size={5} />
              <p>
                Excelデータから展覧会のキャプションをPDF形式で自動生成します。
              </p>
              <SupportingText>
                - 企画・実装・デザイン
              </SupportingText>
              <SupportingText>
                - Next.js
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
                - Next.js, React Context
              </SupportingText>
            </TechWork>
            <Br style="large" />

            {/* てんとうやホームページ */}
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
                - Next.js, Emotion, microCMS
              </SupportingText>
            </TechWork>
            <Br style="large" />

            {/* てんとうや */}
            <TechWork title="ポートフォリオサイト" imgSrc="/tech/color-converter.png">
              <Jump href="https://www.moyotsukai.dev/">
                moyotsukai.dev
              </Jump>
              <Spacer size={5} />
              <SupportingText>
                - Next.js, Radix UI, Emotion
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

          </Accordion.Content>
        </Accordion.Item>

        <Spacer size={30} />

        {/* Art */}
        <Accordion.Item value="item-art">
          <Accordion.Trigger>
            Art
          </Accordion.Trigger>
          <Accordion.Content>
            {/* もようつかい */}
            <TechWork title="もようつかい" imgSrc="/tech/moyotsukai.png">
              <p>
                「もようつかい」として紙で立体作品を作っています。
                主に昆虫など生き物のペーパークラフトを開発しています。
                「てんとうや」で販売したり、展覧会に出品したりしています。
              </p>
              <Spacer size={5} />
              <ImageGallery images={moyotsukaiImages_1} />
              <Br style="small" />
              <ImageGallery images={moyotsukaiImages_2} />
              <Br style="small" />
              <ImageGallery images={moyotsukaiImages_3} />
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

            {/* その他 */}
            <TechWork title="その他 中学・高校時の作品" imgSrc="/tech/moyotsukai.png">
              <p>
                中学生の時に制作した作品は、母校から依頼を受け永久展示されています。
              </p>
              <Spacer size={5} />
              <ImageGallery images={highSchoolImages} />
            </TechWork>
          </Accordion.Content>
        </Accordion.Item>

        <Spacer size={30} />

        {/* About */}
        <Accordion.Item value="item-about">
          <Accordion.Trigger>
            About
          </Accordion.Trigger>
          <Accordion.Content>
            <p>青井新太郎</p>
            <Br />

            <SupportingText>リンク</SupportingText>
            <div>
              <p>
                GitHub:
                <Spacer size={5} isVertical={false} />
                <Jump href="https://github.com/moyotsukai">
                  moyotsukai
                </Jump>
              </p>
              <p>
                ブログ:
                <Spacer size={5} isVertical={false} />
                <Jump href="/blog">
                  /blog
                </Jump>
              </p>
              <p>
                Qiita:
                <Spacer size={5} isVertical={false} />
                <Jump href="https://qiita.com/oishin">
                  @oishin
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
                Twitter:
                <Spacer size={5} isVertical={false} />
                <Jump href="https://twitter.com/moyotsukai">
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

            <SupportingText>関心</SupportingText>
            <div>
              <p>経済学(社会的選択理論等)</p>
              <p>デザイン(UIデザイン, Webデザイン, タイポグラフィ)</p>
              <p>アート(ペーパークラフト開発, 生け花)</p>
              <p>プログラミング(Webフロントエンド, iOSアプリ)</p>
            </div>
            <Br />

            <SupportingText>スキル</SupportingText>
            <div>
              <p>React, Swift, TypeScript, HTML, CSS, Illustrator, Photoshop, Premiere Pro, After Effects, Rhinoceros</p>
            </div>
            <Br />

            <div>
              <p>2003年生まれ</p>
              <p>2022- Life is Tech ! iPhoneメンター</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

      </Accordion.Root>

      <Spacer size={30} />
    </div>
  )
}

export default IndexPage