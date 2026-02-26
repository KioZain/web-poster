import React from 'react'

import handbookNavData from '../config/handbookNavData.js'
import O_PartList from './O_PartList.jsx'
import { buildProjectionTransform } from 'framer-motion'

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
const chapter = document.querySelector('.L_Chapter')
const anchorLinks = document.querySelector('.O_ArticleContent')

// Кнопка есть на обеих страницах, поэтому слушатель вешаем только если она найдена
if (button) {
  button.addEventListener('click', () => {
    // Сайдбар тоже есть на обеих страницах — переключаем всегда
    if (sidebar) {
      sidebar.classList.toggle('is-open')
    }

    // --- Логика для страницы ГЛАВЫ ---
    // L_Chapter есть только на странице главы
    if (chapter) {
      chapter.classList.toggle('navbar-margin')
    }

    // --- Логика для страницы СТАТЬИ ---
    // O_ArticleContent есть только на странице статьи
    if (anchorLinks) {
      anchorLinks.classList.toggle('is-hidden')
      button.classList.toggle('opened')
    }
  })
}

export default S_LeftNavbar
