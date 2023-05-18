import React from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowIcon } from '@assets/icons'

export function Certifications({ images }) {
  return (
    <section className='flex flex-col pt-16' id='certifications'>
      <TitleSection>Certificados</TitleSection>
      <ul className='overflow-auto mt-16 flex snap-x gap-7 mb-4'>
        {images.map((image, index) => (
          <li key={index} className='mb-2 max-h-[230px] snap-center'>
            <Image
              src={image.url}
              width={800}
              height={200}
              className='min-w-[300px]'></Image>
          </li>
        ))}
      </ul>
      <Link
        href='https://certifications-beige.vercel.app/'
        className='flex max-w-fit items-center gap-2 self-end justify-self-end transition-all duration-100 ease-in-out hover:scale-110 hover:text-orange-300'>
        <ArrowIcon className={'stroke-current'} />
        Ver Más
      </Link>
    </section>
  )
}
