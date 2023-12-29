import { ColombiaIcon, EEUUIcon } from '@assets/icons'
import { useLanguaje } from 'context/useLanguaje'
import { languajes } from '../../locales/languajes'
import { useRouter } from 'next/router'
import { validateLang } from 'lib/validateLang'

export function LanguajeToogle() {
  const { setLang } = useLanguaje()
  const { replace, query } = useRouter()
  const langSelected = validateLang(query?.lang)

  const handleLanguaje = () => {
    if (langSelected === 'ES') {
      setLang(languajes.EN)
      replace('/?lang=en', undefined, { shallow: true })
      return
    }
    setLang(languajes.ES)
    replace('/?lang=es', undefined, { shallow: true })
  }

  return (
    <>
      <div
        className='lg:relative ml-8 flex h-6 w-[2px] cursor-pointer items-center justify-center bg-white absolute -top-6 left-3 lg:left-0 lg:top-0 '
        onClick={handleLanguaje}
      >
        <span
          className={`absolute top-0 flex h-3 w-3 rounded-full bg-orange-400 transition-all duration-200 ease-out ${
            langSelected === 'ES' ? 'top-0' : 'translate-y-4'
          }`}
        />
        <ColombiaIcon
          className={` absolute -top-2 -left-6 h-4 w-4 ${
            langSelected === 'EN' && 'opacity-40'
          }`}
        />
        <EEUUIcon
          className={` absolute -bottom-2 -left-6 h-4 w-4 ${
            langSelected === 'ES' && 'opacity-40'
          }`}
        />
      </div>
    </>
  )
}
