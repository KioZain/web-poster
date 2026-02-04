import React from 'react'
import chevronDown from '../../../images/icons/Q_chevron-down.svg'

function A_FilterDropdown({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`A_FilterDropdown ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="label">{label}</span>
      <img src={chevronDown} alt="" className="chevron" />
    </button>
  )
}

export default A_FilterDropdown
