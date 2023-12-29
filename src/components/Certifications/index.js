import { useEffect, useState } from 'react'
import { TitleSection } from '@components/TitleSection'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowIcon } from '@assets/icons'
import { useLanguaje } from 'context/useLanguaje'

export function Certifications() {
  const [images, setImages] = useState([])
  const { lang } = useLanguaje()
  const duplicateImages = [...images, ...images]

  const getImagesCertifications = async () => {
    const data = await fetch('/api/get-certifications')
    const response = await data.json()
    setImages(response.data)
  }

  useEffect(() => {
    getImagesCertifications()
  }, [])

  return (
    <section
      className='flex flex-col overflow-hidden pt-16'
      id='certifications'
    >
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
        href='https://my-certifications.vercel.app/user/andres-laguilavo-ec2dedef'
        target='_blank'
        className='z-[100] mr-2 mb-2 flex max-w-fit items-center gap-2 self-end justify-self-end rounded-md bg-primary-500/50 py-1 px-2 text-white transition-all duration-100 ease-in-out hover:scale-110 hover:text-orange-400/90'
        aria-description='See More Certifications of Andres Felipe Laguilavo Ruiz'
      >
        <ArrowIcon className={'stroke-current'} />
        {lang.certifications.footer}
      </Link>
    </section>
  )
}
