import React, { useState, useEffect } from 'react'
import postersData from '../../data/posters.json'
import ghIcon from '../../images/icons/Q_GithubIcon.svg'
import { getUrl } from '../config/paths.js'

function getPosterIdFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get('id')
  console.log(params.get('id'))
}

function getBasePath() {
  const path = window.location.pathname
  const segments = path.split('/').filter((segment) => segment.length > 0)

  if (segments.length > 0 && segments[segments.length - 1].includes('.html')) {
    segments.pop()
  }

  if (segments.length === 0) {
    return './'
  }

  return '../'.repeat(segments.length)
}

// main component
function PosterPage() {
  const [poster, setPoster] = useState(null)
  const [error, setError] = useState(null)
  const basePath = getBasePath()

  useEffect(() => {
    const posterId = getPosterIdFromUrl()

    if (!posterId) {
      setError('ID плаката не указан в URL')
      return
    }

    const found = postersData.find((p) => p.id === posterId)

    if (!found) {
      setError(`Плакат с ID "${posterId}" не найден`)
      return
    }

    setPoster(found)
    document.title = `${found.name} — Web Poster`
  }, [])

  // error
  if (error) {
    return (
      <div className="poster-page__error" style={{ padding: '2rem' }}>
        <p>{error}</p>
        <a href={getUrl('/posters.html')}>← Вернуться к каталогу</a>
      </div>
    )
  }

  if (!poster) {
    return <span className="loader"></span>
  }

  // main component
  return (
    <div className="poster-page">
      <nav className="M_Breadcrumbs">
        <div className="W_BreadCrumbsContainer margin-container">
          <a className="caption-caps" href={getUrl('/index.html')}>
            Главная
          </a>
          •
          <a className="caption-caps" href={getUrl('/posters.html')}>
            Веб-плакаты
          </a>
          •
          <span className="caption-caps" id="breadcrumb-type">
            {poster.name}
          </span>
        </div>
      </nav>
      <div className="S_PosterInfo margin-container">
        {/* left */}
        <div className="A_PosterCover">
          <img
            src={poster.cover}
            alt={poster.name}
            className="poster-page__image"
          />
        </div>

        {/* right */}
        <div className="O_PosterInfo">
          <div className="M_TitleBio">
            <h2 className="poster-page__title">{poster.name}</h2>

            {/* links */}
            <div className="M_EssentialLinks">
              {poster.github && (
                <a
                  href={poster.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subtitle"
                >
                  <img src={ghIcon} alt="GitHub" />
                  GitHub репозиторий
                </a>
              )}
              {poster.project && (
                <a
                  href={poster.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subtitle"
                >
                  О проекте
                </a>
              )}
            </div>
          </div>

          {/* metadata */}
          <div className="С_MetaDataPoster">
            <div className="M_MetaDataRow">
              <p className="caption-caps">Автор(ка)</p>
              <p className="caption-caps">{poster.author}</p>
            </div>

            <div className="M_MetaDataRow">
              <p className="caption-caps">Год создания</p>
              <p className="caption-caps">{poster.year}</p>
            </div>

            {poster.type && (
              <div className="M_MetaDataRow">
                <p className="caption-caps">Тип веб-плаката</p>
                <p className="caption-caps">{poster.type}</p>
              </div>
            )}

            {poster.layout && (
              <div className="M_MetaDataRow">
                <p className="caption-caps">Вёрстка</p>
                <p className="caption-caps">{poster.layout}</p>
              </div>
            )}

            {poster.tags && poster.tags.length > 0 && (
              <div className="M_MetaDataRow">
                <p className="caption-caps">Детали</p>
                <p className="caption-caps">
                  {poster.tags.map((tag, index) => (
                    <span key={tag} className="poster-page__tag">
                      {tag}
                      {index < poster.tags.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>

          {/* view button */}
          {poster.ghPages && (
            <a
              href={poster.ghPages}
              target="_blank"
              rel="noopener noreferrer"
              className="A_Button"
            >
              Посмотреть веб-плакат
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PosterPage
