import { Html, Head, Main, NextScript } from 'next/document'
// import favicon from '../../public/favicon.svg'
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,300&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='https://laguilavo10.github.io/portafolio-personal/portfolio.svg' type='image/x-icon'/>
        <title>Andres Laguilavo</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
