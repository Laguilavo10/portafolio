import { AboutMe } from '@components/AboutMe'
import { Certifications } from '@components/Certifications'
import { Contact } from '@components/Contact'
import { Experience } from '@components/Experience'
import { Footer } from '@components/Footer'
import { Profile } from '@components/Profile'
import { Projects } from '@components/Projects'
import { Skills } from '@components/Skills'
import { TopBar } from '@components/TopBar'
import { LanguajeProvider } from 'context/useLanguaje'

export default function Home() {
  return (
    <LanguajeProvider>
      <main className='relative m-auto flex min-h-screen max-w-[1440px] flex-col gap-10 overflow-x-hidden bg-primary-500 p-5 pb-28 font-poppins text-primary-200 sm:px-20'>
        <TopBar />
        <Profile />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </LanguajeProvider>
  )
}
