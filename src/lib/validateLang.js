export const validateLang = (lang) => {
  const langSelected = lang?.toUpperCase()
  if (!langSelected || (langSelected !== 'EN' && langSelected !== 'ES')) {
    return 'EN'
  }
  return langSelected
}
