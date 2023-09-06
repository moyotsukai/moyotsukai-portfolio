import { useRouter } from 'next/router'
import Footer from '../components/common/Footer'
import Layout from '../components/common/Layout'
import '../styles/globals.css'
import Header from '../components/common/Header'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const showHeader = router.pathname !== "/"

  return (
    <div>
      {showHeader &&
        <Header />
      }
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  )
}

export default MyApp
