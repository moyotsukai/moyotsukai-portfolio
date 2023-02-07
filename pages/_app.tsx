import Footer from '../components/common/Footer'
import Layout from '../components/common/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default MyApp
