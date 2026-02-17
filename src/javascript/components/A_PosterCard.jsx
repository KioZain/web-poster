import React from 'react'
import { getUrl } from '../config/paths.js'

function PosterCard({ poster }) {
  return (
    <a
      href={getUrl(`/posters/poster.html?id=${poster.id}`)}
      className="A_Poster"
    >
      <img src={poster.cover} alt={poster.name} loading="lazy" />
    </a>
  )
}

export default PosterCard
