import { createContext, useContext, useState, useCallback } from 'react'
import en from './locales/en.json'
import es from './locales/es.json'

const locales = { en, es }

const I18nContext = createContext(null)

export function I18nProvider({ children, defaultLocale = 'en' }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('portfolio-locale')
    return saved && (saved === 'en' || saved === 'es') ? saved : defaultLocale
  })

  const t = useCallback(
    (key) => {
      const keys = key.split('.')
      let value = locales[locale]
      for (const k of keys) {
        value = value?.[k]
      }
      return value ?? key
    },
    [locale]
  )

  /** Returns structured content (array or object) for the current locale. */
  const getContent = useCallback(
    (key) => {
      const keys = key.split('.')
      let value = locales[locale]
      for (const k of keys) {
        value = value?.[k]
      }
      return value
    },
    [locale]
  )

  const setLanguage = useCallback((newLocale) => {
    if (newLocale === 'en' || newLocale === 'es') {
      setLocale(newLocale)
      localStorage.setItem('portfolio-locale', newLocale)
    }
  }, [])

  return (
    <I18nContext.Provider value={{ locale, setLanguage, t, getContent }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
