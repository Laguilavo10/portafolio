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
          className={`relative h-10 w-full backdrop-blur-[20px] lg:hidden 
          ${isOpenMenu ? 'bg-primary-500' : 'bg-transparent'}
          `}
        >
          <button
            type='button'
            className='absolute top-1 right-2 z-10 ml-1 inline-flex h-8 w-8 cursor-pointer items-center self-end justify-self-end rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden '
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <svg
              className='h-10 w-10'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <nav className='relative lg:flex lg:items-center lg:justify-between lg:py-4 lg:px-4 lg:backdrop-blur-[20px]'>
          <p className='hidden min-w-max text-xl lg:flex'>Andres Laguilavo</p>
          <div
            className={`
              w-full items-center justify-between bg-primary-500 transition-transform duration-150 ease-linear lg:order-1 lg:flex lg:w-auto lg:bg-transparent lg:translate-y-0 
              ${isOpenMenu ? 'flex translate-y-0' : ' -translate-y-[150%] '}
              `}
          >
            <ul className='mt-4 flex w-full flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
              {lang.header.map((item) => (
                <li
                  className={`  rounded  
                  border-b  border-gray-700 bg-primary-500  py-2 px-2 
                  text-center 
                  text-white
                  transition-all duration-150 
                  ease-linear 
                hover:bg-gray-700
                hover:text-white
                  lg:border-none lg:bg-transparent lg:p-0 lg:text-white  lg:hover:scale-105 lg:hover:bg-transparent`}
                  onMouseEnter={changeDiv}
                  onMouseLeave={hideDiv}
                  key={item.href}
                  onClick={() => setIsOpenMenu(false)}
                >
                  <a href={`#${item.href}`} className='m-auto w-auto '>
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <LanguajeToogle />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
