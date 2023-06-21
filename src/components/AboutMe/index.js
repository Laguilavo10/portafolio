// import { useState } from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import cara from '../../../public/cara.jpg'
import { useLanguaje } from 'context/useLanguaje'
export function AboutMe() {
  const { lang } = useLanguaje()
  return (
    <>
      <section id='about' className='m-auto pt-12 lg:pt-24'>
        <div className='relative flex max-w-[1200px] flex-col items-center gap-14 rounded-md p-10 md:grid-cols-5 lg:grid lg:bg-primary-400 lg:bg-opacity-30'>
          <Image
            src={cara.src}
            width='340'
            height='300'
            className='rounded-lg lg:absolute lg:left-10'
            alt='Andres Laguilavo'
          />
          <div className='col-span-4 col-start-3 flex flex-col items-center gap-4'>
            <TitleSection>{lang.aboutMe.title}</TitleSection>
            <p>{lang.aboutMe.description}</p>
          </div>
        </div>
      </section>
      {/* </section> */}
    </>
  )
}
