import { BurguerIcon, XIcon } from '@assets/icons'
import { LanguajeToogle } from '@components/LanguajeToggle'
import { useLanguaje } from 'context/useLanguaje'
import { useState } from 'react'

export function TopBar() {
  const { lang } = useLanguaje()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [positionDiv, setPositionDiv] = useState({})

  const changeDiv = (evt) => {
    const { left, width, top, height } =
    evt.currentTarget.getBoundingClientRect()
    const stylesDiv = {
      height: `${Math.round(height)}px`,
      transform: `translateX(${Math.round(left)}px)`,
      top: `${top}px`,
      width: `${Math.round(width)}px`
    }
    setPositionDiv(stylesDiv)
  }
  const hideDiv = () => {
    setPositionDiv((prev) => ({ ...prev, opacity: '0', visibility: 'hidden' }))
  }

  return (
    <>
      <div
        className='pointer-events-none fixed left-0 top-0 z-20 box-content hidden rounded bg-orange-800 transition-all duration-200 ease-linear md:block'
        style={positionDiv}
      />
      <header className='fixed top-0 left-0 right-0 z-30 w-full'>
        <div
          className={`relative h-10 w-full backdrop-blur-[20px] md:hidden ${
            isOpenMenu ? 'hidden' : 'flex'
          }`}
        >
          <BurguerIcon
            className={'absolute top-1 right-2 z-10 h-8 w-8 cursor-pointer'}
            onClick={() => setIsOpenMenu(true)}
          />
        </div>
        <nav className='relative md:flex md:items-center md:justify-between md:py-4 md:px-4 md:backdrop-blur-[20px]'>
          <p className='hidden min-w-max text-xl lg:flex'>Andres Laguilavo</p>
          <ul
            className={`absolute right-0 flex h-screen w-52 flex-col items-center justify-center gap-8 bg-primary-500 text-white ${
              isOpenMenu ? 'right-0' : 'translate-x-60'
            } shadow-2xl shadow-primary-300 transition-all duration-300 ease-in
            md:relative md:flex md:h-auto md:w-full md:translate-x-0 md:flex-row md:items-start md:justify-end md:bg-transparent md:text-center md:text-base md:shadow-none
            `}
          >
            {isOpenMenu && (
              <XIcon
                className=' absolute top-2 left-2 h-8 w-8 md:hidden'
                onClick={() => setIsOpenMenu(false)}
              />
            )}
            {lang.header.map((item) => (
              <li
                className='transition-transform duration-150 ease-linear hover:scale-110 '
                onMouseEnter={changeDiv}
                onMouseLeave={hideDiv}
                key={item.href}
              >
                <a href={`#${item.href}`}>{item.name}</a>
              </li>
            ))}
            <li>
              <LanguajeToogle />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
