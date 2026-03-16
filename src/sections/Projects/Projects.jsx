import { useI18n } from '../../i18n/I18nContext'
import './Projects.css'

export function Projects() {
  const { t, getContent } = useI18n()
  const list = getContent('projects.list') ?? []

  return (
    <section id="projects" className="projects section">
      <div className="projects__container section__container">
        <h2 className="projects__title section__title">{t('projects.title')}</h2>
        <p className="projects__subtitle section__subtitle">{t('projects.subtitle')}</p>

        <div className="projects__grid">
          {list.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__name">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card__link">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="project-card__year">{project.year}</span>
              </div>
              <p className="project-card__roles">
                <span className="project-card__label">{t('projects.roles')}:</span> {project.roles}
              </p>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech">
                <span className="project-card__label">{t('projects.technologies')}:</span>
                <div className="project-card__tags">
                  {(project.technologies || []).map((tech) => (
                    <span key={tech} className="project-card__tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
