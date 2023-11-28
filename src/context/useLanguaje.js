import { createContext, useState, useContext, useEffect } from 'react'
import { languajes } from '../locales/languajes'
import { useRouter } from 'next/router'
import { validateLang } from 'lib/validateLang'
const LanguajeSite = createContext()

export const LanguajeProvider = ({ children }) => {
  const router = useRouter()
  const [lang, setLang] = useState(languajes.EN)
  useEffect(() => {
    const langSelected = validateLang(router?.query?.lang)
    setLang(languajes[langSelected])
  }, [router?.query?.lang])

  return (
    <LanguajeSite.Provider value={{ lang, setLang }}>
      {children}
    </LanguajeSite.Provider>
  )
}
export const useLanguaje = () => {
  const { lang, setLang } = useContext(LanguajeSite)
  return { lang, setLang }
}
