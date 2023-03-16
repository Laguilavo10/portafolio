import { Profile } from '@components/Profile'
import { TopBar } from '@components/TopBar'

export default function Home() {
  return (
    <main className='min-h-screen bg-primary-500 font-poppins text-white px-24'>
      <TopBar />
      <Profile />
    </main>
  )
}
