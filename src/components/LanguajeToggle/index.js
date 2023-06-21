import { ColombiaIcon, EEUUIcon } from '@assets/icons'
import { useLanguaje } from 'context/useLanguaje'
import React, { useState } from 'react'
import { languajes } from '../../locales/languajes'
export function LanguajeToogle() {
  const { setLang } = useLanguaje()
  const [LanguajeToogle, setLanguajeToogle] = useState('ES')
  const handleLanguaje = () => {
    if (LanguajeToogle === 'ES') {
      setLanguajeToogle('EN')
      setLang(languajes.EN)
      return
    }
    setLanguajeToogle('ES')
    setLang(languajes.ES)
  }
  return (
    <>
      <div
        className='relative ml-8 flex h-6 w-[2px] items-center justify-center bg-white cursor-pointer'
        onClick={handleLanguaje}>
        <span
          className={`absolute top-0 flex h-3 w-3 rounded-full bg-orange-400 transition-all duration-200 ease-out ${
            LanguajeToogle === 'ES' ? 'top-0' : 'translate-y-4'
          }`}
        />
        <ColombiaIcon
          className={` absolute -top-2 -left-6 h-4 w-4 ${
            LanguajeToogle === 'EN' && 'opacity-40'
          }`}
        />
        <EEUUIcon
          className={` absolute -bottom-2 -left-6 h-4 w-4 ${
            LanguajeToogle === 'ES' && 'opacity-40'
          }`}
        />
      </div>
    </>
  )
}
