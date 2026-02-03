import React from 'react'
import C_CollapsibleLists from './C_CollapsibleLists.jsx'

function O_PartList({ part }) {
  return (
    <div className="O_PartList">
      {/*
        Заголовок части — статичный текст
        Используем класс subtitle, как в твоём примере HTML
      */}
      <p className="subtitle">{part.title}</p>

      {/*
        Список глав этой части
      */}
      <C_CollapsibleLists chapters={part.chapters} />
    </div>
  )
}

export default O_PartList
