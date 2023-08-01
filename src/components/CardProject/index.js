import { GitHubIcon, WebIcon } from '@assets/icons'
import Image from 'next/image'
import Link from 'next/link'

export function CardProject({
  title,
  img,
  labels,
  url,
  repo,
  description = ''
}) {
  return (
    <>
      <article className='relative flex max-w-xs flex-col gap-4 rounded-md border-2 border-orange-200 p-6 pb-14 transition-all ease-in hover:scale-105 lg:min-w-full bg-primary-500'>
        <h4 className='text-white font-semibold text-xl'>{title}</h4>
        {/* Imagen */}
        <Image
          src={img}
          width='400'
          height='400'
          className='rounded-md object-cover'
          alt='title'
        />
        {/* Etiquetas */}
        <ul className='flex gap-3'>
          {labels.map((label, index) => (
            <li
              key={index}
              className=' rounded-md bg-primary-700 px-2 py-1 text-sm font-extrabold text-orange-500'>
              {label}
            </li>
          ))}
        </ul>
        {/* Descripcion */}
        <p className='text-sm'>{description}</p>
        {/* Links */}
        <div className='self absolute bottom-5 right-6 flex gap-5'>
          {repo && (
            <Link
              target={'_blank'}
              href={repo}
              className='transition-all duration-1000 ease-out [&>svg]:hover:fill-white '>
              <GitHubIcon width='25' height='25' />
            </Link>
          )}
          {url && (
            <Link
              target={'_blank'}
              href={url}
              className='transition-all duration-100 ease-out [&>svg]:hover:stroke-white stroke-[#9aa2ad]  '>
              <WebIcon width='25' height='25' />
            </Link>
          )}
        </div>
      </article>
    </>
  )
}
