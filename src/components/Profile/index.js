import { GitHubIcon, LinkedinIcon, ResumeIcon } from '@assets/icons.js'
import LinkCustom from '@components/LinkCustom'
import Image from 'next/image'
import avatar from '../../../public/AR.png'
import { motion } from 'framer-motion'
import { useLanguaje } from 'context/useLanguaje'

export function Profile() {
  const { lang } = useLanguaje()
  console.log()
  const resumeLink =
    lang.aboutMe.title === 'Sobre Mi'
      ? 'https://drive.google.com/file/d/1VOtnGhdWROxqm6nhvWqHwZxDuBwpRNC4/view'
      : 'https://drive.google.com/file/d/1rTzBPxCwjW9x-U0NTyBgrKUVNueWgELt/view'
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
      href: resumeLink
    }
  ]
  return (
    <>
      <section className='grid h-screen items-center justify-center pt-10 md:grid-cols-2 '>
        <div className=' flex flex-col gap-6'>
          <h1 className='text-6xl text-primary-200'>
            I&apos;m <br /> Andres Laguilavo
          </h1>
          <h3 className='bg-[linear-gradient(90deg,#f97316,#a6a8b0)] bg-clip-text text-3xl font-bold text-transparent'>
            Frontend Developer
          </h3>
          <div className='flex flex-wrap gap-4'>
            {LINKS.map(({ label, icon, href }) => (
              <LinkCustom href={href} key={label} styles=''>
                {icon}
                <span className='hidden sm:flex'>{label}</span>
              </LinkCustom>
            ))}
          </div>
        </div>
        {/* <aside className='m-auto hidden md:flex'> */}
        <motion.div
          className='m-auto hidden w-full justify-center md:flex'
          animate={{ y: [8, -8] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}>
          <Image src={avatar} alt='avatar' quality={90} />
          {/* </aside> */}
        </motion.div>
      </section>
    </>
  )
}
