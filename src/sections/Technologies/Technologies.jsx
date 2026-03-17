import { useState, useRef, useCallback, useEffect } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import { TECHNOLOGIES, TAG_LABELS, getTechnologyIconUrl } from '../../data/technologies'
import './Technologies.css'

function TechIcon({ tech }) {
  const src = getTechnologyIconUrl(tech.id, tech.devicon)
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className="technologies__card-icon-img"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none'
          const wrap = e.target.closest('.technologies__card-icon')
          const fallback = wrap?.querySelector('.technologies__card-icon-fallback')
          if (fallback) fallback.classList.add('technologies__card-icon-fallback--show')
        }}
      />
    )
  }
  return (
    <span className="technologies__card-icon-text" aria-hidden>
      {tech.name.slice(0, 2).toUpperCase()}
    </span>
  )
}

const ALL_TAGS = [...new Set(TECHNOLOGIES.flatMap((t) => t.tags))].sort()

function normalizeForSearch(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function matchTechByKeywords(tech, searchTerms) {
  if (!tech.keywords || tech.keywords.length === 0) return false
  const normalizedKeywords = tech.keywords.map(normalizeForSearch)
  return searchTerms.some((term) =>
    normalizedKeywords.some((kw) => kw.includes(term) || term.includes(kw))
  )
}

export function Technologies() {
  const { t, locale } = useI18n()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [paused, setPaused] = useState(false)
  const [modalTech, setModalTech] = useState(null)
  const scrollRef = useRef(null)

  const searchTerms = searchQuery
    .trim()
    .split(/\s+/)
    .map(normalizeForSearch)
    .filter(Boolean)

  const filtered =
    searchTerms.length > 0
      ? TECHNOLOGIES.filter((tech) => matchTechByKeywords(tech, searchTerms))
      : selectedTags.length === 0
        ? TECHNOLOGIES
        : TECHNOLOGIES.filter((tech) => selectedTags.some((tag) => tech.tags.includes(tag)))

  const toggleTag = useCallback((tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }, [])

  const labelForTag = (tag) => (TAG_LABELS[tag] ? TAG_LABELS[tag][locale] || TAG_LABELS[tag].en : tag)

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value.length > 0) setSelectedTags([])
  }, [])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  useEffect(() => {
    if (!modalTech) return
    const onEscape = (e) => { if (e.key === 'Escape') setModalTech(null) }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [modalTech])

  return (
    <section id="technologies" className="technologies section">
      <div className="technologies__container section__container">
        <h2 className="technologies__title section__title">{t('technologies.title')}</h2>
        <p className="technologies__subtitle section__subtitle">{t('technologies.subtitle')}</p>

        <div className="technologies__search-wrap">
          <input
            type="search"
            className="technologies__search-input"
            placeholder={t('technologies.searchPlaceholder')}
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label={t('technologies.searchPlaceholder')}
          />
          <button
            type="button"
            className="technologies__search-clear"
            onClick={clearSearch}
            aria-label={t('technologies.clearSearch')}
            title={t('technologies.clearSearch')}
            hidden={!searchQuery.trim()}
          >
            ×
          </button>
        </div>

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
                        <div
                          key={`${copy}-${tech.id}`}
                          className="technologies__card"
                          role="button"
                          tabIndex={0}
                          onClick={() => setModalTech(tech)}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModalTech(tech) } }}
                          title={tech.name}
                        >
                          <div className="technologies__card-icon">
                            <TechIcon tech={tech} />
                            <span className="technologies__card-icon-fallback" aria-hidden>
                              {tech.name.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className="technologies__card-label">{tech.name}</span>
                          {tech.experience_time && (
                            <span className="technologies__card-experience">{tech.experience_time}</span>
                          )}
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

      {modalTech && (
        <div
          className="technologies__modal-backdrop"
          onClick={() => setModalTech(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-modal-title"
        >
          <div
            className="technologies__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="technologies__modal-header">
              <div className="technologies__modal-icon-wrap">
                <TechIcon tech={modalTech} />
              </div>
              <h3 id="tech-modal-title" className="technologies__modal-title">{modalTech.name}</h3>
            </div>
            {modalTech.experience_time && (
              <p className="technologies__modal-experience">
                <span className="technologies__modal-label">{t('technologies.experience')}:</span>{' '}
                {modalTech.experience_time}
              </p>
            )}
            <button
              type="button"
              className="technologies__modal-close"
              onClick={() => setModalTech(null)}
              aria-label={t('technologies.close')}
            >
              {t('technologies.close')}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
