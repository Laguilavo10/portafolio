import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer className='absolute bottom-5 right-0 left-0 m-auto flex w-fit justify-self-center text-center text-primary-300'>
      Made with ❤️ by
      <Link
        href='https://github.com/Laguilavo10'
        className='text-white pl-1 border-b border-dashed border-white transition-colors duration-200 ease-in hover:border-orange-400 hover:text-orange-400'>
        @laguilavo10
      </Link>
    </footer>
  )
}
