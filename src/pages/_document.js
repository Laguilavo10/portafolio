import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name='description'
          content='Apasionado Frontend Developer con experiencia en la creación de aplicaciones web modernas y atractivas.'
        />
        <meta
          name='keywords'
          content='Frontend Developer, HTML, CSS, JavaScript, React, TailwindCSS, NextJS, Astro, Bogotá, Colombia, Desarrollador de Software '
        />
        <meta name='author' content='Andres Felipe Laguilavo Ruiz' />
        <meta
          property='og:title'
          content='Andres Felipe Laguilavo Ruiz - Software Developer'
        />
        <meta
          property='og:description'
          content='Desarrollador de Software con enfasis en las tecnologias Web. Interesado en temas sociales, me gusta contribuir con soluciones a los problemas a través de la tecnología.Con experiencia en el desarrollo de aplicaciones web escalables y sitios interactivos.'
        />
        <meta property='og:image' content='/cover-link.png' />
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
      </Head>
      <body className=' relative h-full w-full overflow-x-hidden bg-primary-900'>
        <div
          className='dark:bg-neutral-950 absolute top-0 bottom-0 z-[-2] min-h-screen w-full
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]'
        ></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
