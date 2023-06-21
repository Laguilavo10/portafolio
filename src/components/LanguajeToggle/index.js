import { ColombiaIcon, EEUUIcon } from '@assets/icons'
import React, { useState } from 'react'

export function LanguajeToogle() {
  const [LanguajeToogle, setLanguajeToogle] = useState('ES')
  const handleLanguaje = () => {
    if (LanguajeToogle === 'ES') {
      setLanguajeToogle('EN')
      return
    }
    setLanguajeToogle('ES')
  }

  return (
    <>
      <div className='relative ml-8 flex h-6 w-[2px] items-center justify-center bg-white'>
        <span
          className={`absolute top-0 flex h-3 w-3 rounded-full bg-orange-400 transition-all duration-200 ease-out ${
            LanguajeToogle === 'ES' ? 'top-0' : 'translate-y-4'
          }`}
          onClick={handleLanguaje}
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
