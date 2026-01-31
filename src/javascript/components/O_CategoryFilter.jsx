import React, { useState } from 'react'

function O_CategoryFilter({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`o-category-filter ${isOpen ? 'o-category-filter--open' : ''}`}
    >
      <button
        type="button"
        className="o-category-filter__header"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="o-category-filter__arrow">{isOpen ? '▼' : '▶'}</span>

        <span className="o-category-filter__title">{title}</span>
      </button>

      {/* is shown */}
      {isOpen && <div className="o-category-filter__content">{children}</div>}
    </div>
  )
}

export default O_CategoryFilter
