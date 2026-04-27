import React from 'react'

import handbookNavData from '../config/handbookNavData.js'
import O_PartList from './O_PartList.jsx'

function S_LeftNavbar({ activeChapterId }) {
  const { parts } = handbookNavData

  return (
    <div className="W_CollapsingLists">
      {parts.map((part) => (
        <O_PartList
          key={part.id}
          part={part}
          activeChapterId={activeChapterId}
        />
      ))}
    </div>
  )
}

const button = document.querySelector('.A_NavigationMenuButton')
const sidebar = document.querySelector('.S_LeftNavBar')
const chapter = document.querySelector('.L_Chapter')
const anchorLinks = document.querySelector('.O_ArticleContent')

if (button) {
  button.addEventListener('click', () => {
    if (sidebar) {
      sidebar.classList.toggle('is-open')
    }
    if (chapter) {
      chapter.classList.toggle('navbar-margin')
    }
    if (anchorLinks) {
      anchorLinks.classList.toggle('is-hidden')
      button.classList.toggle('opened')
    }
  })
}

export default S_LeftNavbar
