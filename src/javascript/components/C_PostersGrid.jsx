import React from 'react'
import PosterCard from './A_PosterCard.jsx'

function PostersGrid({ posters, isLoading, hasMore, onLoadMore }) {
  if (isLoading && posters.length === 0) {
    return (
      <div className="posters-catalog__loading">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }

  if (posters.length === 0) {
    return (
      <div className="posters-catalog__empty">
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
        <div className="load-container">
          <button onClick={onLoadMore} className="A_Button">
            Показать ещё
          </button>
        </div>
      )}
    </div>
  )
}

export default PostersGrid
