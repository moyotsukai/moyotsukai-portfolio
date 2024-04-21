import Head from 'next/head'
import React from 'react'

const Seo: React.FC = () => {
  return (
    <Head>
      <title>Shintaro Aoi Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="青井新太郎のポートフォリオサイトです。" />
      <meta property="og:url" content="https://moyotsukai.dev" />
      <meta property="og:title" content="Shintaro Aoi Portfolio" />
      <meta property="og:description" content="青井新太郎のポートフォリオサイトです。" />
      <meta property="og:image" content="https://moyotsukai.dev/profile.jpeg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Shintaro Aoi Portfolio" />
      <meta name="twitter:image" content="https://moyotsukai.dev/profile.jpeg" />
      <meta name="theme-color" content="#f2faff" />
    </Head>
  )
}

export default Seo