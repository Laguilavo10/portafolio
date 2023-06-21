import React from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowIcon } from '@assets/icons'
import { useLanguaje } from 'context/useLanguaje'

export function Certifications({ images }) {
  const duplicateImages = [...images, ...images]
  const { lang } = useLanguaje()
  // const duplicateImages = images.slice(1, 2)
  return (
    <section
      className='flex flex-col overflow-hidden pt-16'
      id='certifications'>
      <TitleSection>{lang.certifications.title}</TitleSection>
      <ul className='w-[calc(300px * 10)] mt-16 mb-4 flex animate-slider snap-x gap-7 hover:animate-stop'>
        {duplicateImages.map((image, index) => (
          <li key={index} className='mb-2 max-h-[230px] snap-center'>
            <Image
              src={image.url}
              width={800}
              height={200}
              className='min-w-[300px] max-w-[300px]'
              alt={image.filename}
            />
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
