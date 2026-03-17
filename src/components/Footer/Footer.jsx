import { useI18n } from '../../i18n/I18nContext'
import './Footer.css'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Federico Frade. {t('footer.rights')}
        </p>
        <p className="footer__contact">
          <span className="footer__label">{t('footer.contact')}:</span>{' '}
          <a href="mailto:fedefrade21@gmail.com" className="footer__link">fedefrade21@gmail.com</a>
          {' · '}
          <a href="https://www.linkedin.com/in/federico-frade-full-stack-senior-developer" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
        </p>
      </div>
    </footer>
  )
}
