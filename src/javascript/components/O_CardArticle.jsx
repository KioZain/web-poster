import React from 'react'
function O_CardArticle({ article }) {
  const { href, cover, articleType, readingTime, title, description } = article

  return (
    <a className="O_CardArticle" href={href}>
      <div className="Q_ArticleImage">
        <img src={cover} alt="" />
      </div>
      <div className="M_ArticleCardBio">
        <p className="caption-caps">
          {articleType} · {readingTime} минут
        </p>
        <div className="M_AboutArticle">
          <h4>{title}</h4>
          <p className="body">{description}</p>
        </div>
      </div>
    </a>
  )
}

export default O_CardArticle
