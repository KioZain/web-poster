import React, { useState, useEffect } from 'react'
import { AIRTABLE_CONFIG } from '../config/airtable.js'

function getPosterIdFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get('id')
}

/*
{ id: "...", fields: { Name: "...", ... } } -> { id, name, author, ... }
 */

function transformRecord(record) {
  return {
    id: record.id,
    name: record.fields.Name || 'Без названия',
    author: record.fields.Author || 'Неизвестен',
    year: record.fields.Year || '',
    type: record.fields.Type || null,
    layout: record.fields.Layout || null,
    tags: record.fields.Tags || [],
    modules: record.fields.Modules || [],
    cover: record.fields.Cover || '',
    ghPages: record.fields.GH_pages || '',
    github: record.fields.Github || '',
    project: record.fields.Project || ''
  }
}
function PosterPage() {
  const [poster, setPoster] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchPoster(posterId) {
    setIsLoading(true)
    setError(null)

    try {
      // GET /v0/{baseId}/{tableName}/{recordId}
      const url = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableName}/${posterId}`

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_CONFIG.apiKey}`
        }
      })

      // 404
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Плакат не найден')
        }
        throw new Error(`Ошибка сервера: ${response.status}`)
      }

      // parsing json
      const record = await response.json()
      const posterData = transformRecord(record)
      setPoster(posterData)

      document.title = `${posterData.name} — Web Poster`
    } catch (err) {
      console.error('Ошибка загрузки плаката:', err)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const posterId = getPosterIdFromUrl()

    if (!posterId) {
      setError('ID плаката не указан в URL')
      setIsLoading(false)
      return
    }

    fetchPoster(posterId)
  }, [])

  if (isLoading) {
    return (
      <div className="poster-page poster-page--loading">
        <p>Загрузка плаката...</p>
      </div>
    )
  }
  // render this shit plz
  return (
    <div className="poster-page">
      <div className="S_PosterInfo margin-container">
        {/* left */}
        <div className="A_PosterCover">
          {poster.cover ? (
            <img
              src={poster.cover}
              alt={poster.name}
              className="poster-page__image"
            />
          ) : (
            <div className="poster-page__placeholder">Нет изображения</div>
          )}
        </div>

        {/* right */}
        <div className="O_PosterInfo">
          <div className="M_TitleBio">
            <h2 className="poster-page__title">{poster.name}</h2>

            {/* links */}
            <div className="poster-page__links">
              {poster.github && (
                <a
                  href={poster.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-page__link"
                >
                  GitHub репозиторий
                </a>
              )}
              {poster.project && (
                <a
                  href={poster.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-page__link"
                >
                  О проекте
                </a>
              )}
            </div>
          </div>

          {/* etc */}
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

          {/* viewbutton */}
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
