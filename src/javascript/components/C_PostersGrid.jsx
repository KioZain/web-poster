import React from 'react'
import PosterCard from './A_PosterCard.jsx'
import notFound from '../../images/notfound.svg'

function PostersGrid({ posters, isLoading, hasMore, onLoadMore }) {
  return (
    <div className="W_PostersWrap">
      {posters.length === 0 ? (
        <div className="M_NoContent">
          <img src={notFound} alt="" />
          <h4>Ничего не найдено</h4>
          <p className="light">Такой работы не существует</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default PostersGrid
