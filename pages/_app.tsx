import React from 'react'
import Footer from '../components/common/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
