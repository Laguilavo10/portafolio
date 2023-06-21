import { createContext, useState, useContext } from 'react'
import { languajes } from '../locales/languajes'
const LanguajeSite = createContext()

export const LanguajeProvider = ({ children }) => {
  // eslint-disable-next-line dot-notation
  const [lang, setLang] = useState(languajes['ES'])
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
