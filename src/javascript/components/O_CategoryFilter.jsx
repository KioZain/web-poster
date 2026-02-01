import React, { useState } from 'react'
import chevronUp from '../../images/icons/Q_chevron-up.svg'
import chevronDown from '../../images/icons/Q_chevron-down.svg'

function O_CategoryFilter({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`O_CategoryFilter ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="A_CategoryFilterHeader"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <img
          src={isOpen ? chevronUp : chevronDown}
          alt=""
          className="arrow-icon"
        />

        <span className="title">{title}</span>
      </button>

      {isOpen && <div className="content">{children}</div>}
    </div>
  )
}

export default O_CategoryFilter
