import React from 'react'

import modulesNavData from '../config/modulesNavData.js'
import O_PartList from './O_PartList.jsx'

function S_ModulesNavBar() {
  const { parts } = modulesNavData

  return (
    <div className="W_CollapsingLists">
      {parts.map((part) => (
        <O_PartList key={part.id} part={part} />
      ))}
    </div>
  )
}

export default S_ModulesNavBar
