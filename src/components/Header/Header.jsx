import { useState } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import { useTheme } from '../../context/ThemeContext'
import './Header.css'

const SECTION_IDS = ['about', 'experience', 'technologies', 'projects']

export function Header() {
  const { t, locale, setLanguage } = useI18n()
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <a href="#about" className="header__logo" onClick={(e) => { e.preventDefault(); handleNavClick('about') }} aria-label="Home">
          <img src="/logo_1.png" alt="FF - Federico Frade" className="header__logo-img" />
        </a>

        <button
          type="button"
          className="header__burger"
          aria-expanded={menuOpen}
          aria-controls="header-nav"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header__burger-bar" />
          <span className="header__burger-bar" />
          <span className="header__burger-bar" />
        </button>

        <nav id="header-nav" className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main">
          <ul className="header__links">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <button type="button" className="header__link" onClick={() => handleNavClick(id)}>
                  {t(`nav.${id}`)}
                </button>
              </li>
            ))}
          </ul>
          <div className="header__controls">
            <div className="header__lang" role="group" aria-label="Language">
              <button
                type="button"
                className={`header__lang-btn ${locale === 'en' ? 'header__lang-btn--active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-pressed={locale === 'en'}
              >
                EN
              </button>
              <button
                type="button"
                className={`header__lang-btn ${locale === 'es' ? 'header__lang-btn--active' : ''}`}
                onClick={() => setLanguage('es')}
                aria-pressed={locale === 'es'}
              >
                ES
              </button>
            </div>
            <div className="header__theme" role="group" aria-label="Theme">
              <button
                type="button"
                className={`header__theme-btn ${theme === 'light' ? 'header__theme-btn--active' : ''}`}
                onClick={() => setTheme('light')}
                aria-pressed={theme === 'light'}
                title={t('theme.light')}
              >
                <span className="header__theme-icon" aria-hidden>☀</span>
              </button>
              <button
                type="button"
                className={`header__theme-btn ${theme === 'dark' ? 'header__theme-btn--active' : ''}`}
                onClick={() => setTheme('dark')}
                aria-pressed={theme === 'dark'}
                title={t('theme.dark')}
              >
                <span className="header__theme-icon" aria-hidden>🌙</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
