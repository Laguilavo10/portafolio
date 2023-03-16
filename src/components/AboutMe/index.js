// import { useState } from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import cara from '../../../public/cara.jpg'
export function AboutMe() {
  return (
    <>
      {/* <section className='pt-12' id='about'> */}
        <section className='pt-12 flex gap-16 flex-col md:flex-row items-center' id='about'>
          <Image src={cara.src} width='300' height='300' className='rounded-lg'/>
          <div className='flex flex-col items-center gap-12'>
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
        </section>
      {/* </section> */}
    </>
  )
}
