import { useState, useRef, useCallback } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import { TECHNOLOGIES, TAG_LABELS } from '../../data/technologies'
import './Technologies.css'

const ALL_TAGS = [...new Set(TECHNOLOGIES.flatMap((t) => t.tags))].sort()

export function Technologies() {
  const { t, locale } = useI18n()
  const [selectedTags, setSelectedTags] = useState([])
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef(null)

  const filtered =
    selectedTags.length === 0
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((tech) => selectedTags.some((tag) => tech.tags.includes(tag)))

  const toggleTag = useCallback((tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }, [])

  const labelForTag = (tag) => (TAG_LABELS[tag] ? TAG_LABELS[tag][locale] || TAG_LABELS[tag].en : tag)

  return (
    <section id="technologies" className="technologies section">
      <div className="technologies__container section__container">
        <h2 className="technologies__title section__title">{t('technologies.title')}</h2>
        <p className="technologies__subtitle section__subtitle">{t('technologies.subtitle')}</p>

        <div className="technologies__filter">
          <span className="technologies__filter-label">{t('technologies.filterBy')}:</span>
          <div className="technologies__filter-tags">
            <button
              type="button"
              className={`technologies__filter-btn ${selectedTags.length === 0 ? 'technologies__filter-btn--active' : ''}`}
              onClick={() => setSelectedTags([])}
            >
              {t('technologies.all')}
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`technologies__filter-btn ${selectedTags.includes(tag) ? 'technologies__filter-btn--active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {labelForTag(tag)}
              </button>
            ))}
          </div>
        </div>

        <div
          className="technologies__carousel-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          ref={scrollRef}
        >
          <div className={`technologies__carousel ${paused ? 'technologies__carousel--paused' : ''}`}>
            <div className="technologies__track">
              {filtered.length > 0 ? (
                <>
                  {[1, 2].map((copy) => (
                    <div key={copy} className="technologies__set">
                      {filtered.map((tech) => (
                        <div key={`${copy}-${tech.id}`} className="technologies__card">
                          <div className="technologies__card-icon" title={tech.name}>
                            <span className="technologies__card-icon-text">{tech.name.slice(0, 2).toUpperCase()}</span>
                          </div>
                          <span className="technologies__card-label">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </>
              ) : (
                <p className="technologies__empty">{t('technologies.all')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
