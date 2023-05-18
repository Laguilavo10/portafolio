import { AboutMe } from '@components/AboutMe'
import { Certifications } from '@components/Certifications'
import { Contact } from '@components/Contact'
import { Experience } from '@components/Experience'
import { Profile } from '@components/Profile'
import { Projects } from '@components/Projects'
import { Skills } from '@components/Skills'
import { TopBar } from '@components/TopBar'

export default function Home({ images }) {
  return (
    <main className='m-auto flex min-h-screen max-w-[1440px] flex-col gap-10 bg-primary-500 p-5 font-poppins text-primary-200 sm:px-20'>
      <TopBar />
      <Profile />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Certifications images={images} />
      <Contact />
    </main>
  )
}

export const getServerSideProps = async () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(
        `${process.env.API_KEY}:${process.env.API_SECRET}`
      ).toString('base64')})}`
    },
    body: JSON.stringify({ expression: 'folder=Certifications/*' })
  }
  const data = await fetch(process.env.URL_API, options)
  const images = await data.json()
  return {
    props: {
      images: images.resources.splice(0, 5)
    }
  }
}
