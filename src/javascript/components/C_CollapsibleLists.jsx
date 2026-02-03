import React from 'react'

import M_ListNavigation from './M_ListNavigation.jsx'

function C_CollapsibleLists({ chapters }) {
  return (
    <div className="C_CollapsibleLists">
      {chapters.map((chapter) => (
        <M_ListNavigation
          key={chapter.id}
          chapter={chapter}
          defaultOpen={false}
        />
      ))}
    </div>
  )
}

export default C_CollapsibleLists
