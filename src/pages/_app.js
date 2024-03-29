import Head from 'next/head'
import '../../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Andres Laguilavo | Desarrollador de Software - JavaScript - React - NextJS</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
