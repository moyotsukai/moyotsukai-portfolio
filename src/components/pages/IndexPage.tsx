import React from "react"
import Spacer from "../ui/Spacer"
import Hero from "../functional/Hero"
import Br from "../ui/Br"
import Jump from "../ui/Jump"
import TechWork from "../functional/TechWork"
import SupportingText from "../ui/SupportingText"
import { ImageItem } from "../../types/ImageItem.type"
import ImageGallery from "../functional/ImageGallery"
import Seo from "../common/Seo"
import Accordion from "../ui/Accordion"

const moyotsukaiImages_1: ImageItem[] = [
  {
    title: "『循環』 紙 140cm×140cm",
    src: "/image/cycle.jpeg"
  },
  {
    title: "『循環』 / 無限に流れる生命の循環のワンシーンを切り出した",
    src: "/image/cycle_2.jpg"
  },
  {
    title: "『軌道』 紙 63cm×116cm",
    src: "/image/orbit_2.jpg"
  },
  {
    title: "『軌道』 / コウイカのペーパークラフト",
    src: "/image/orbit.jpg"
  },
  {
    title: "《Stride》 紙 42cm×91cm",
    src: "/image/stride_1.jpg"
  },
  {
    title: "《Stride》 / ヤドカリが一歩一歩進んでいき、時間と共に平面から立体へと進展していく",
    src: "/image/stride_2.jpg"
  },
  {
    title: "『再帰』 紙 140cm×140cm",
    src: "/image/reccurence.png"
  }
]

const moyotsukaiImages_2: ImageItem[] = [
  {
    title: "『紙によるセザンヌ的キュビスム』 紙 45cm×60cm",
    src: "/image/cubism_3_1.jpg"
  },
  {
    title: "",
    src: "/image/cubism_3_2.jpg"
  },
  {
    title: "『紙によるセザンヌ的キュビスム』 紙 31cm×38cm",
    src: "/image/cubism_1_1.jpg"
  },
  {
    title: "",
    src: "/image/cubism_1_2.jpg"
  },
  {
    title: "『紙によるセザンヌ的キュビスム』 紙 31cm×38cm",
    src: "/image/cubism_2_1.jpg"
  },
  {
    title: "",
    src: "/image/cubism_2_2.jpg"
  },
  {
    title: "『穏やかさの形』 紙 38cm×60cm",
    src: "/image/seahorse.jpg"
  }
]

const moyotsukaiImages_3: ImageItem[] = [
  {
    title: "オオセンチコガネ",
    src: "/image/oosenchi.jpg"
  },
  {
    title: "カブトガニ",
    src: "/image/horseshoecrab.jpg"
  },
  {
    title: "マイマイカブリ",
    src: "/image/maimaikaburi.jpg"
  },
  {
    title: "カメノコテントウ",
    src: "/image/kamenokotentou.jpg"
  }
]

const tentouyaImages: ImageItem[] = [
  {
    title: "テントウトランプ / トランプの数字とテントウムシの模様が対応",
    src: "/image/tentouplayingcards.jpg"
  },
  {
    title: "Tシャツ",
    src: "/image/tshirt.jpg"
  },
  {
    title: "テントウダイス / 1〜6の目を実際のテントウムシの模様で表したダイス",
    src: "/image/tentoudice.jpg"
  },
  {
    title: "絵はがき",
    src: "/image/postcard.jpg"
  }
]

const highSchoolImages: ImageItem[] = [
  {
    title: "スクラッチのお皿",
    src: "/image/okinawachoutonbo.jpg"
  },
  {
    title: "スクラッチのお皿",
    src: "/image/youjiuo.jpg"
  },
  {
    title: "生け花",
    src: "/image/ikebana.png"
  },
  {
    title: "花器",
    src: "/image/ikebana.jpg"
  },
  {
    title: "『生長の樹』 紙 高さ170cm",
    src: "/image/seichounoki.jpg"
  },
  {
    title: "『生長の樹』/中学の時の成長を樹で表現",
    src: "/image/seichounoki_2.jpg"
  },
  {
    title: "『生長の樹』",
    src: "/image/seichounoki_3.jpg"
  },
  {
    title: "『生長の樹』/中学の時の思い出を配置",
    src: "/image/seichounoki_4.jpg"
  },
  {
    title: "中学の会誌の扉絵",
    src: "/image/hanaminokasago.jpg"
  },
  {
    title: "林間学校のしおり",
    src: "/image/asagimadara.jpg"
  },
  {
    title: "陶芸",
    src: "/image/pottery.jpg"
  }
]

const IndexPage: React.FC = () => {
  return (
    <div>
      <Seo />
      <Hero />

      <Accordion.Root type="multiple">
        {/* Art */}
        <Accordion.Item value="item-art">
          <Accordion.Trigger>Art</Accordion.Trigger>
          <Accordion.Content>
            {/* もようつかい */}
            <TechWork
              title="もようつかい"
              imgSrc="/image/moyotsukai.png"
            >
              <p>
                「もようつかい」という名前で紙の立体作品を作っています。紙を曲線に沿って折ることでペーパークラフトなどを設計しています。展覧会に出品したり、販売したりしています。
              </p>
              <Spacer size={5} />
              <Jump href="/blog">テーマについて→</Jump>
              <Spacer size={10} />
              <ImageGallery images={moyotsukaiImages_1} />
              <Br style="small" />
              <ImageGallery images={moyotsukaiImages_2} />
              <Br style="small" />
              <ImageGallery images={moyotsukaiImages_3} />
            </TechWork>
            <Br style="large" />

            {/* てんとうや */}
            <TechWork
              title="てんとうや"
              imgSrc="/image/tentouya.png"
            >
              <Jump href="https://tentouya.com">tentouya.com</Jump>
              <Spacer size={5} />
              <p>
                兄弟で昆虫のユニークなデザインを活かしたグッズを制作・販売しています。ネットでの販売に加え、イベントにも出展しています。
              </p>
              <Spacer size={5} />
              <ImageGallery images={tentouyaImages} />
            </TechWork>
            <Br style="large" />

            {/* その他 */}
            <TechWork
              title="その他 中学・高校時の作品"
              imgSrc="/image/moyotsukai.png"
            >
              <p>中学生の時に制作した作品は、母校から依頼を受け永久展示されています。</p>
              <Spacer size={5} />
              <ImageGallery images={highSchoolImages} />
            </TechWork>
          </Accordion.Content>
        </Accordion.Item>

        <Spacer size={30} />

        {/* Tech */}
        <Accordion.Item value="item-image">
          <Accordion.Trigger>Software</Accordion.Trigger>

          <Accordion.Content>
            {/* ErabeRule */}
            <TechWork
              title="ErabeRule"
              imgSrc="/image/eraberule.png"
            >
              <Jump href="https://eraberule.com">eraberule.com</Jump>
              <Spacer size={5} />
              <p>
                経済学的に望ましいとされる投票ルールを実験的に用いることができる投票アプリ。
                社会的選択理論の社会実装を目的としたWebアプリとしては国内初。
                母校の経済の授業にて、教材として活用して頂いている。 高校３年で校長賞を受賞。
              </p>
              <SupportingText>- 企画・実装・デザイン</SupportingText>
              <SupportingText>- Firebase, Next.js, Recoil</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* @moyotsukai/bezier */}
            <TechWork
              title="@moyotsukai/bezier"
              imgSrc="/image/color-converter.png"
            >
              <Jump href="https://www.npmjs.com/package/@moyotsukai/bezier">@moyotsukai/bezier</Jump>
              <Spacer size={5} />
              <p>
                コードでベジェ曲線を描画するライブラリ。
                ベジェ曲線の直感的な定義方法を考案し、３通りのパラメータを使って曲線を生成できるnpmパッケージ。
                ペーパークラフトの展開図などをコードで管理することを目的としている。
              </p>
              <SupportingText>- 企画・実装</SupportingText>
              <SupportingText>- TypeScript</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* LaunchHub */}
            <TechWork
              title="LaunchHub"
              imgSrc="/image/launchhub.png"
            >
              <Jump href="https://github.com/moyotsukai/launch-hub-clone">GitHub</Jump>
              <Spacer size={5} />
              <p>
                「労働を投資活動に」をコンセプトとした起業家と労働者のマッチングプラットフォーム。
                web3の技術を使ったDappで、フロントエンドの実装を担当した。 AI+Crypto Hackathonに参加し、ASTAR
                Prizeを受賞。
              </p>
              <SupportingText>- フロントエンド実装</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* 展覧会キャプション生成ツール */}
            <TechWork
              title="展覧会キャプション生成ツール"
              imgSrc="/image/color-converter.png"
            >
              <Jump href="https://caption.moyotsukai.dev/">caption.moyotsukai.dev</Jump>
              <Spacer size={5} />
              <p>Excelデータから展覧会のキャプションをPDF形式で自動生成します。</p>
              <SupportingText>- 企画・実装・デザイン</SupportingText>
              <SupportingText>- Next.js</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* Color Converter */}
            <TechWork
              title="Color Converter"
              imgSrc="/image/color-converter.png"
            >
              <Jump href="https://color.moyotsukai.dev">color.moyotsukai.dev</Jump>
              <Spacer size={5} />
              <p>
                Hex, RGBAなど５つの形式に相互に対応したカラー変換ツール。
                一覧性が高く、カラーを編集すると他のカラーモードの値がレスポンシブに更新される。
              </p>
              <SupportingText>- 企画・実装・デザイン</SupportingText>
              <SupportingText>- Next.js</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* 年賀状アプリ */}
            <TechWork
              title="年賀状アプリ"
              imgSrc="/image/color-converter.png"
            >
              <Jump href="https://newyearscard.moyotsukai.dev/guide">newyearscard.moyotsukai.dev/guide</Jump>
            </TechWork>
            <Br style="large" />

            {/* 自己紹介カードジェネレータ */}
            <TechWork
              title="自己紹介カードジェネレータ"
              imgSrc="/image/color-converter.png"
            >
              <Jump href="https://self-introduction.moyotsukai.dev/">self-introduction.moyotsukai.dev</Jump>
            </TechWork>
            <Br style="large" />

            {/* てんとうやホームページ */}
            <TechWork
              title="てんとうや ホームページ"
              imgSrc="/image/tentouya.png"
            >
              <Jump href="https://tentouya.com">tentouya.com</Jump>
              <Spacer size={5} />
              <p>自分達の運営する昆虫グッズブランドのホームページ</p>
              <SupportingText>- 企画・実装・デザイン</SupportingText>
              <SupportingText>- Next.js, Emotion, microCMS</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* てんとうや */}
            <TechWork
              title="ポートフォリオサイト"
              imgSrc="/image/color-converter.png"
            >
              <Jump href="https://www.moyotsukai.dev/">moyotsukai.dev</Jump>
              <Spacer size={5} />
              <SupportingText>- Next.js, Radix UI, Emotion</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* ByColor */}
            <TechWork
              title="ByColor"
              imgSrc="/image/bycolor.png"
            >
              <Jump href="https://apps.apple.com/us/app/bycolor-sort-photos-by-color/id1498754477">App Store</Jump>
              <Spacer size={5} />
              <p>写真を色で分類するという視点を提案するiOSアプリ</p>
              <SupportingText>- 企画・実装・デザイン</SupportingText>
              <SupportingText>- Swift</SupportingText>
            </TechWork>
            <Br style="large" />

            {/* CameraLayer */}
            <TechWork
              title="CameraLayer"
              imgSrc="/image/cameralayer.png"
            >
              <Jump href="https://apps.apple.com/us/app/cameralayer-translucent-screen/id1502882036">App Store</Jump>
              <Spacer size={5} />
              <p>アルバムにある写真を半透明に重ねて写真撮影ができるiOSアプリ</p>
              <SupportingText>- 企画・実装・デザイン</SupportingText>
              <SupportingText>- Swift</SupportingText>
            </TechWork>
            <Br style="large" />
          </Accordion.Content>
        </Accordion.Item>

        <Spacer size={30} />

        {/* About */}
        <Accordion.Item value="item-about">
          <Accordion.Trigger>About</Accordion.Trigger>
          <Accordion.Content>
            <p>青井新太郎</p>
            <Br />

            <SupportingText>リンク</SupportingText>
            <div>
              <p>
                GitHub:
                <Spacer
                  size={5}
                  isVertical={false}
                />
                <Jump href="https://github.com/moyotsukai">moyotsukai</Jump>
              </p>
              <p>
                ブログ:
                <Spacer
                  size={5}
                  isVertical={false}
                />
                <Jump href="/blog">/blog</Jump>
              </p>
              <p>
                Qiita:
                <Spacer
                  size={5}
                  isVertical={false}
                />
                <Jump href="https://qiita.com/oishin">@oishin</Jump>
              </p>
              <p>
                Zenn:
                <Spacer
                  size={5}
                  isVertical={false}
                />
                <Jump href="https://zenn.dev/moyotsukai">@moyotsukai</Jump>
              </p>
              <p>
                Twitter:
                <Spacer
                  size={5}
                  isVertical={false}
                />
                <Jump href="https://twitter.com/moyotsukai">@moyotsukai</Jump>
              </p>
              <p>
                てんとうやTwitter:
                <Spacer
                  size={5}
                  isVertical={false}
                />
                <Jump href="https://twitter.com/tentouya64">@tentouya64</Jump>
              </p>
            </div>
            <Br />

            <SupportingText>関心</SupportingText>
            <div>
              <p>ミクロ経済学（社会的選択理論など）</p>
              <p>デザイン（UIデザイン, Webデザイン）</p>
              <p>アート（ペーパークラフト開発, 絵画）</p>
              <p>プログラミング（Webフロントエンド, iOSアプリ）</p>
              <p>アニメ</p>
            </div>
            <Br />

            <SupportingText>スキル</SupportingText>
            <div>
              <p>
                React, Swift, TypeScript, HTML, CSS, Illustrator, Photoshop, Premiere Pro, After Effects, Rhinoceros
              </p>
            </div>
            <Br />

            <div>
              <p>2003年生まれ</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <Spacer size={60} />
    </div>
  )
}

export default IndexPage
