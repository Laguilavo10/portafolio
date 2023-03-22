// import { useState } from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import cara from '../../../public/cara.jpg'
export function AboutMe() {
  return (
    <>
      {/* <section className='pt-12' id='about'> */}
      <section id='about' className='lg:pt-24 pt-10 m-auto'>
        <div className='relative flex flex-col items-center gap-4 rounded-md p-10 md:grid-cols-5 lg:grid lg:bg-secondary-800 max-w-[1200px] '>
          <Image
            src={cara.src}
            width='340'
            height='300'
            className='rounded-lg lg:absolute lg:left-10'
          />
          <div className='col-span-4 col-start-3 flex flex-col items-center gap-2'>
            <TitleSection>Sobre Mi</TitleSection>
            <p>
              Soy un apasionado de la tecnología y el desarrollo web, siempre
              buscando nuevas formas de crear experiencias digitales únicas y
              emocionantes. Con mi experiencia en programación y diseño, puedo
              crear sitios web que sean tanto visualmente atractivos como
              funcionales. Siempre estoy buscando nuevos proyectos emocionantes
              que me permitan seguir aprendiendo y creciendo en mi carrera.
            </p>
          </div>
        </div>
      </section>
      {/* </section> */}
    </>
  )
}
