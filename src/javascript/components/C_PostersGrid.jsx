import React from 'react'
import PosterCard from './A_PosterCard.jsx'

function PostersGrid({ posters, isLoading, hasMore, onLoadMore }) {
  if (isLoading && posters.length === 0) {
    return <span className="loader"></span>
  }

  if (posters.length === 0) {
    return (
      <div>
        <p>no posters for you buddy</p>
      </div>
    )
  }

  return (
    <div className="W_PostersWrap">
      <div className="C_PostersGrid">
        {posters.map((poster) => (
          <PosterCard key={poster.id} poster={poster} />
        ))}
      </div>

      {hasMore && (
        <button onClick={onLoadMore} className="A_Button secondary">
          Показать ещё
        </button>
      )}
    </div>
  )
}

export default PostersGrid
