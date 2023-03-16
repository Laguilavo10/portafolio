import { AboutMe } from '@components/AboutMe'
import { Profile } from '@components/Profile'
import { Projects } from '@components/Projects'
import { Skills } from '@components/Skills'
import { TopBar } from '@components/TopBar'

export default function Home() {
  return (
    <main className='min-h-screen bg-primary-500 font-poppins text-primary-200 sm:px-20 p-5 flex flex-col gap-10'>
      <TopBar />
      <Profile />
      <AboutMe/>
      <Skills/>
      <Projects/>
    </main>
  )
}
