import React from 'react'

function PosterCard({ poster }) {
  return (
    <a href={`/posters/poster.html?id=${poster.id}`} className="A_Poster">
      <img src={poster.cover} alt={poster.name} loading="lazy" />
    </a>
  )
}

export default PosterCard
