import { useI18n } from '../../i18n/I18nContext'
import './About.css'

const LANGUAGES = [
  { key: 'spanish', level: 'native' },
  { key: 'english', level: 'fluent' },
  { key: 'portuguese', level: 'basic' },
]

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="about section">
      <div className="about__container section__container">
        <h2 className="about__title section__title">{t('about.title')}</h2>
        <p className="about__subtitle section__subtitle">{t('about.subtitle')}</p>

        <div className="about__grid">
          <div className="about__photo-wrap">
            <img
              src="/ff-image-profile.jpg"
              alt="Federico Frade"
              className="about__photo-img"
            />
            <p className="about__photo-caption">Federico Frade</p>
          </div>
          <div className="about__content">
            <p className="about__intro">{t('about.intro')}</p>
            <p className="about__text">{t('about.specialty')}</p>
            <p className="about__text">{t('about.passion')}</p>

            <div className="about__achievements">
              <h3 className="about__achievements-title">{t('about.achievementsTitle')}</h3>
              <ul className="about__achievements-list">
                <li>{t('about.achievement1')}</li>
                <li>{t('about.achievement2')}</li>
                <li>{t('about.achievement3')}</li>
              </ul>
            </div>

            <div className="about__languages">
              <h3 className="about__languages-title">{t('about.languagesTitle')}</h3>
              <div className="about__languages-visual">
                {LANGUAGES.map(({ key, level }) => (
                  <div key={key} className="about__lang-card">
                    <span className="about__lang-name">{t(`about.${key}`)}</span>
                    <span className="about__lang-level">{t(`about.${level}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
