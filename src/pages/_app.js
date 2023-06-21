import Head from 'next/head'
import '../../styles/globals.css'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Andres Laguilavo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
