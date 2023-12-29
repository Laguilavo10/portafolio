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
          flex h-full flex-col justify-between gap-4 rounded-md border-primary-200/50 bg-primary-500 p-6 border-[3px] ${color} 
           text-center  ${styles} glow:border-glow  text-white
            max-w-xs flex-col gap-4 rounded-md border-2 p-6 lg:min-w-full w-full items-center
          `}
        >
          <h4 className='text-xl font-semibold text-white uppercase'>{title}</h4>
          {/* Imagen */}
          <Image
            src={img}
            width='400'
            height='400'
            className='object-cover rounded-md'
            alt='title'
          />
          {/* Etiquetas */}
          <ul className='flex items-center gap-3'>
            {labels.map((label, index) => (
              <li
                key={index}
                className='px-2 py-1 text-sm font-extrabold text-center text-orange-500 rounded-md bg-primary-700'
              >
                {label}
              </li>
            ))}
          </ul>
          {/* Descripcion */}
          <p className='text-sm'>{description}</p>
          {/* Links */}
          <div className='flex gap-5 w-full justify-end'>
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
