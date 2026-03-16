import { useI18n } from '../../i18n/I18nContext'
import './Experience.css'

export function Experience() {
  const { t, getContent } = useI18n()
  const entries = getContent('experience.entries') ?? []

  /** Group entries by company, keeping order (most recent first) */
  const byCompany = entries.reduce((acc, entry, index) => {
    const company = entry.company
    if (!acc[company]) acc[company] = []
    acc[company].push({ ...entry, index })
    return acc
  }, {})

  const companies = Object.keys(byCompany)

  return (
    <section id="experience" className="experience section section--alt">
      <div className="experience__container section__container">
        <h2 className="experience__title section__title">{t('experience.title')}</h2>
        <p className="experience__subtitle section__subtitle">{t('experience.subtitle')}</p>

        <div className="timeline">
          {companies.map((company) => (
            <div key={company} className="timeline__company">
              <h3 className="timeline__company-name">{company}</h3>
              <p className="timeline__company-period">
                {byCompany[company][0]?.companyPeriod ?? byCompany[company][0]?.period}
              </p>
              <div className="timeline__roles">
                {byCompany[company].map((role, i) => (
                  <article key={`${company}-${role.index}`} className="timeline__role">
                    <div className="timeline__role-marker" aria-hidden />
                    <div className="timeline__role-content">
                      <div className="timeline__role-header">
                        <h4 className="timeline__role-title">{role.role}</h4>
                        <span className="timeline__role-period">{role.period}</span>
                      </div>
                      <p className="timeline__role-summary">{role.summary}</p>
                      <div className="timeline__role-block">
                        <h5 className="timeline__role-block-title">{t('experience.keyResponsibilities')}</h5>
                        <ul className="timeline__role-list">
                          {(role.responsibilities || []).map((r, j) => (
                            <li key={j}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      {role.achievement && (
                        <div className="timeline__role-block timeline__role-block--highlight">
                          <h5 className="timeline__role-block-title">{t('experience.keyAchievement')}</h5>
                          <p className="timeline__role-achievement">{role.achievement}</p>
                        </div>
                      )}
                      <div className="timeline__role-skills">
                        <span className="timeline__role-skills-label">{t('experience.keySkills')}:</span>
                        <div className="timeline__role-tags">
                          {(role.skills || []).map((s) => (
                            <span key={s} className="timeline__tag">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
