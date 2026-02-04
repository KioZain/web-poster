import React from 'react'

function A_FilterToggle({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`A_FilterToggle ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default A_FilterToggle
