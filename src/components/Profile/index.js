import { GitHubIcon, LinkedinIcon, ResumeIcon } from '@assets/icons.js'
import LinkCustom from '@components/LinkCustom'
// import Image from 'next/image'
// import avatar from '../../../public/AR.png'

export function Profile() {
  const LINKS = [
    {
      label: 'Github',
      icon: <GitHubIcon width='25' height='25' />,
      href: 'https://github.com/Laguilavo10'
    },
    {
      label: 'LinkedIn',
      icon: <LinkedinIcon width='25' height='25' />,
      href: 'https://www.linkedin.com/in/andres-laguilavo-2a2848205/'
    },
    {
      label: 'Resume',
      icon: <ResumeIcon width='25' height='25' />,
      href: 'https://drive.google.com/file/d/1VOtnGhdWROxqm6nhvWqHwZxDuBwpRNC4/view'
    }
  ]
  return (
    <>
      <section className='grid h-screen grid-cols-2 items-center justify-center pt-10 '>
        <div className=' flex flex-col gap-6 '>
          <h1 className='text-6xl text-primary-200'>
            I&apos;m <br /> Andres Laguilavo
          </h1>
          <h3 className='bg-[linear-gradient(90deg,#31235e,#a6a8b0)] bg-clip-text text-3xl font-bold text-transparent'>
            Frontend Developer
          </h3>
          <div className='flex gap-4'>
            {LINKS.map(({ label, icon, href }) => (
              <LinkCustom href={href} key={label} styles=''>
                {icon}
                <span className='hidden sm:flex'>{label}</span>
              </LinkCustom>
            ))}
          </div>
        </div>
        <aside className='m-auto'>
          {/* <Image src={avatar} alt='avatar'/> */}
          <img
            src='https://laguilavo10.github.io/portafolio-personal/assets/AR.be277711.png'
            alt='avatar'
          />
          {/* <img src='' alt=''/> */}
        </aside>
      </section>
    </>
  )
}
