import React from 'react'

function PosterCard({ poster }) {
  return (
    <a href={`/posters/poster.html?id=${poster.id}`} className="A_Poster">
      {poster.cover ? (
        <img src={poster.cover} alt={poster.name} loading="lazy" />
      ) : (
        <div className="poster-card__placeholder">Нет изображения</div>
      )}
    </a>
  )
}

export default PosterCard
