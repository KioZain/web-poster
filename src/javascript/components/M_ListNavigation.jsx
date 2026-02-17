import React, { useState } from 'react'
import { getUrl } from '../config/paths.js'

import chevronUp from '../../images/icons/Q_chevron-up.svg'
import chevronDown from '../../images/icons/Q_chevron-down.svg'

//  * - chapter:{ id, title, href, articles: [] }
//  * - defaultOpen:

function M_ListNavigation({ chapter, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const handleContainerClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="M_ListNavigation">
      <div
        className={`A_CollapseList ${isOpen ? 'open' : ''}`}
        onClick={handleContainerClick}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleContainerClick()
          }
        }}
      >
        <img src={isOpen ? chevronUp : chevronDown} alt="" aria-hidden="true" />

        <a
          className="A_CollapseName"
          href={getUrl(chapter.href)}
          onClick={handleLinkClick}
        >
          {chapter.title}
        </a>
      </div>

      {isOpen && (
        <div className="C_AticleLinks">
          {chapter.articles.map((article) => (
            <a
              key={article.id}
              href={getUrl(article.href)}
              className="A_ListItem"
            >
              {article.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default M_ListNavigation
