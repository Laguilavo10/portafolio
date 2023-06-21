import { BurguerIcon, XIcon } from '@assets/icons'
import { useState } from 'react'

export function TopBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-30 w-full'>
        <div
          className={`relative h-10 w-full backdrop-blur-[20px] md:hidden ${
            isOpenMenu ? 'hidden' : 'flex'
          }`}>
          <BurguerIcon
            className={'absolute top-1 right-2 z-10 h-8 w-8'}
            onClick={() => setIsOpenMenu(true)}
          />
        </div>
        <nav className='relative sm:flex sm:items-center sm:justify-between sm:py-4 sm:px-4 sm:backdrop-blur-[20px]'>
          <p className='hidden min-w-max text-xl lg:flex'>Andres Laguilavo</p>
          <ul
            className={`absolute right-0 flex h-screen w-52 flex-col items-center justify-center gap-8 bg-primary-500 text-white ${
              isOpenMenu ? 'right-0' : 'translate-x-60'
            } shadow-2xl shadow-primary-300 transition-all duration-300 ease-in
            md:relative md:flex md:h-auto md:w-full md:translate-x-0 md:flex-row md:items-start md:justify-end md:bg-transparent md:text-center md:text-base md:shadow-none
            `}>
            {isOpenMenu && (
              <XIcon
                className=' absolute top-2 left-2 h-8 w-8 md:hidden'
                onClick={() => setIsOpenMenu(false)}
              />
            )}
            <li className='transition-transform duration-150 ease-linear hover:scale-125'>
              <a href='#about'>Sobre Mi</a>
            </li>
            <li className='transition-transform duration-150 ease-linear hover:scale-125'>
              <a href='#experience'>Experiencia</a>
            </li>
            <li className='transition-transform duration-150 ease-linear hover:scale-125'>
              <a href='#skills'>Habilidades</a>
            </li>
            <li className='transition-transform duration-150 ease-linear hover:scale-125'>
              <a href='#projects'>Proyectos</a>
            </li>
            <li className='transition-transform duration-150 ease-linear hover:scale-125'>
              <a href='#certifications'>Certificaciones</a>
            </li>
            <li className='transition-transform duration-150 ease-linear hover:scale-125'>
              <a href='#contact'>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
