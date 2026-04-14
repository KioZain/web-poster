import React, { useState } from 'react'

function PosterCard({ poster, priority = false }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <a href={`/posters/poster.html?id=${poster.id}`} className="A_Poster">
      <div className={`Q_PosterCover ${isLoaded ? 'loaded' : ''}`}>
        <img
          src={poster.cover}
          alt={poster.name}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      </div>
      <div className="W_PosterAbout">
        <div className="M_PosterTitleAuthor">
          <h4>{poster.name}</h4>
          <p>{poster.author}</p>
        </div>
        <p className="caption-bold">
          {poster.type} · {poster.year}
        </p>
      </div>
    </a>
  )
}

export default PosterCard
