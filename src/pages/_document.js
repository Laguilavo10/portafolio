import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="description" content="Apasionado Frontend Developer con experiencia en la creación de aplicaciones web modernas y atractivas."/>
      <meta name="keywords" content="Frontend Developer, HTML, CSS, JavaScript, React, TailwindCSS, NextJS"/>
      <meta name="author" content="Andres Felipe Laguilavo Ruiz"/>
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
        <link rel='shortcut icon' href='/favicon.svg' type='image/x-icon' />
        <title>Andres Laguilavo</title>
      </Head>
      <body className='bg-primary-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
