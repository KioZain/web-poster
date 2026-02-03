import React from 'react'
import C_CollapsibleLists from './C_CollapsibleLists.jsx'

function O_PartList({ part }) {
  return (
    <div className="O_PartList">
      <p className="subtitle">{part.title}</p>

      <C_CollapsibleLists chapters={part.chapters} />
    </div>
  )
}

export default O_PartList
