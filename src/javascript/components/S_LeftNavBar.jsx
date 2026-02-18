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

const button = document.querySelector('.A_NavigationMenuButton')
const sidebar = document.querySelector('.S_LeftNavBar')
const container = document.querySelector('.L_Chapter')

button.addEventListener('click', () => {
  sidebar.classList.toggle('is-open')
  container.classList.toggle('navbar-margin')
})

export default S_LeftNavbar
