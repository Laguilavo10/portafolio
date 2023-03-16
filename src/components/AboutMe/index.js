// import { useState } from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import cara from '../../../public/cara.jpg'
export function AboutMe() {
  return (
    <>
      <section className='' id='about'>
        <main className='flex gap-16'>
          <Image src={cara.src} width='300' height='300'/>
          <div className='flex flex-col items-center gap-12'>
            <TitleSection>About Me</TitleSection>
            <p>
              Soy un apasionado de la tecnología y el desarrollo web, siempre
              buscando nuevas formas de crear experiencias digitales únicas y
              emocionantes. Con mi experiencia en programación y diseño, puedo
              crear sitios web que sean tanto visualmente atractivos como
              funcionales. Siempre estoy buscando nuevos proyectos emocionantes
              que me permitan seguir aprendiendo y creciendo en mi carrera.
            </p>
          </div>
        </main>
      </section>
    </>
  )
}
