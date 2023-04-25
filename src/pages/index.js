import { AboutMe } from '@components/AboutMe'
import { Contact } from '@components/Contact'
import { Experience } from '@components/Experience'
import { Profile } from '@components/Profile'
import { Projects } from '@components/Projects'
import { Skills } from '@components/Skills'
import { TopBar } from '@components/TopBar'

export default function Home() {
  return (
    <main className='m-auto flex min-h-screen max-w-[1440px] flex-col gap-10 bg-primary-500 p-5 font-poppins text-primary-200 sm:px-20'>
      <TopBar />
      <Profile />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
