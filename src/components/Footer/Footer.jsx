import { useI18n } from '../../i18n/I18nContext'
import { publicUrl } from '../../utils/publicUrl'
import './Footer.css'

const CONTACT_LOGOS = {
  gmail: publicUrl('contact-logos/gmail-logo.svg'),
  linkedin: publicUrl('contact-logos/linkedin-logo.svg'),
  github: publicUrl('contact-logos/github-logo.svg'),
}

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Federico Frade. {t('footer.rights')}
        </p>
        <nav className="footer__contact" aria-label={t('footer.contact')}>
          <ul className="footer__social" role="list">
            <li>
              <a
                href="mailto:fedefrade21@gmail.com"
                className="footer__social-link"
                aria-label={t('footer.emailAria')}
              >
                <img
                  src={CONTACT_LOGOS.gmail}
                  alt=""
                  className="footer__icon"
                  width={24}
                  height={24}
                  decoding="async"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/federico-frade-full-stack-senior-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={t('footer.linkedinAria')}
              >
                <img
                  src={CONTACT_LOGOS.linkedin}
                  alt=""
                  className="footer__icon"
                  width={24}
                  height={24}
                  decoding="async"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/fedefrade"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={t('footer.githubAria')}
              >
                <img
                  src={CONTACT_LOGOS.github}
                  alt=""
                  className="footer__icon"
                  width={24}
                  height={24}
                  decoding="async"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
