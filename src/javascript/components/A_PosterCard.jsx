import React from 'react'
import { getUrl } from '../config/paths.js'

function PosterCard({ poster }) {
  return (
    <a
      href={getUrl(`/posters/poster.html?id=${poster.id}`)}
      className="A_Poster"
    >
      <img src={poster.cover} alt={poster.name} loading="lazy" />
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
