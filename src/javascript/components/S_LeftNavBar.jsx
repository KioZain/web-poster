import React from 'react'

import handbookNavData from '../config/handbookNavData.js'
import O_PartList from './O_PartList.jsx'

function S_LeftNavbar() {
  const { parts } = handbookNavData

  return (
    <div className="W_CollapsingLists">
      {parts.map((part) => (
        <O_PartList key={part.id} part={part} />
      ))}
    </div>
  )
}

export default S_LeftNavbar
