import { AboutMe } from '@components/AboutMe'
import { Profile } from '@components/Profile'
import { Skills } from '@components/Skills'
import { TopBar } from '@components/TopBar'

export default function Home() {
  return (
    <main className='min-h-screen bg-primary-500 font-poppins text-primary-200 sm:px-24 px-5 flex flex-col gap-10'>
      <TopBar />
      <Profile />
      <AboutMe/>
      <Skills/>
    </main>
  )
}
