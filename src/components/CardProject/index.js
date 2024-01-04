import { GitHubIcon, WebIcon } from '@assets/icons'
import { Glow } from '@codaworks/react-glow'
import Image from 'next/image'
import Link from 'next/link'

export function CardProject({
  title,
  img,
  labels,
  url,
  repo,
  description = '',
  color,
  styles
}) {
  return (
    <>
      <Glow color={color} className='flex justify-center'>
        <article
          className={`
          flex h-full flex-col justify-between gap-4 rounded-md border-[3px] border-primary-200/50 bg-primary-500 p-6 ${color} 
             ${styles} w-full  max-w-xs
            flex-col items-center gap-4 rounded-md border-2 p-6 text-white glow:border-glow lg:min-w-full
          `}
        >
          <h3 className='text-xl font-semibold uppercase text-white'>
            {title}
          </h3>
          {/* Imagen */}
          <Image
            src={img}
            width='400'
            height='400'
            className='rounded-md object-cover'
            alt='title'
          />
          {/* Etiquetas */}
          <ul className='flex items-center gap-3'>
            {labels.map((label, index) => (
              <li
                key={index}
                className='rounded-md bg-primary-700 px-2 py-1 text-center text-sm font-extrabold text-orange-500'
              >
                {label}
              </li>
            ))}
          </ul>
          {/* Descripcion */}
          <p
            className='text-sm'
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* Links */}
          <div className='flex w-full justify-end gap-5'>
            {repo && (
              <Link
                target={'_blank'}
                href={repo}
                className='transition-all duration-1000 ease-out [&>svg]:hover:fill-white '
              >
                <GitHubIcon width='25' height='25' />
              </Link>
            )}
            {url && (
              <Link
                target={'_blank'}
                href={url}
                className='stroke-[#9aa2ad] transition-all duration-100 ease-out [&>svg]:hover:stroke-white  '
              >
                <WebIcon width='25' height='25' />
              </Link>
            )}
          </div>
        </article>
      </Glow>
    </>
  )
}
