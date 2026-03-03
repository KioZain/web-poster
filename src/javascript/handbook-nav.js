import React from 'react'
import { createRoot } from 'react-dom/client'

import S_LeftNavbar from './components/S_LeftNavBar.jsx'
import handbookNavData from './config/handbookNavData.js'

// last chapter
const LAST_AVAILABLE_CHAPTER = 'chapter-1-4'

// sidebar
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('handbook-nav-root')

  if (container) {
    const root = createRoot(container)
    root.render(<S_LeftNavbar />)
  }

  initArticleNavigation()
  initChapterNavigation()
})

// article nav
function initArticleNavigation() {
  const navContainer = document.querySelector('.W_ArticleButtonsNavigation')
  if (!navContainer) return

  const currentId = navContainer.dataset.articleId

  if (!currentId) {
    console.warn('[ArticleNav] Контейнер найден, но data-article-id не указан')
    return
  }

  const allArticles = flattenArticles(handbookNavData)
  const currentIndex = allArticles.findIndex(
    (article) => article.id === currentId
  )

  if (currentIndex === -1) {
    console.log(`net article :( "${currentId}"`)
    return
  }

  const prev = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const next =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  console.log(
    'Предыдущая статья:',
    prev ? `${prev.title} (${prev.id})` : 'нет статьи'
  )
  console.log(
    'Следующая статья:',
    next ? `${next.title} (${next.id})` : 'нет статьи'
  )

  renderNavButtons(navContainer, prev, next)
}

function flattenArticles(navData) {
  const result = []

  for (const part of navData.parts) {
    for (const chapter of part.chapters) {
      for (const article of chapter.articles) {
        result.push({
          id: article.id,
          title: article.title,
          href: article.href
        })
      }
    }
  }
  return result
}

// chapter nav
function initChapterNavigation() {
  const navContainer = document.querySelector('.W_ArticleButtonsNavigation')
  if (!navContainer) return

  const currentId = navContainer.dataset.chapterId

  if (!currentId) {
    console.warn('[ChapterNav] Контейнер найден, но data-chapter-id не указан')
    return
  }

  const allChapters = flattenChapters(handbookNavData)
  const currentIndex = allChapters.findIndex(
    (chapter) => chapter.id === currentId
  )

  if (currentIndex === -1) {
    console.log(`net chapter :( "${currentId}"`)
    return
  }

  const prev = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const next =
    currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null

  console.log(
    'Предыдущая глава:',
    prev ? `${prev.title} (${prev.id})` : 'нет главы'
  )
  console.log(
    'Следующая глава:',
    next ? `${next.title} (${next.id})` : 'нет главы'
  )

  renderNavButtons(navContainer, prev, next)
}

// flattenning tree
function flattenChapters(navData) {
  const result = []

  for (const part of navData.parts) {
    for (const chapter of part.chapters) {
      // Временное ограничение: дошли до границы — останавливаемся
      if (chapter.id === LAST_AVAILABLE_CHAPTER) return result

      result.push({
        id: chapter.id,
        title: chapter.title,
        href: chapter.href
      })
    }
  }
  return result
}

function renderNavButtons(container, prev, next) {
  const parts = []

  if (prev) {
    parts.push(`
    <a href="${prev.href}" class="O_ChapterButtonArrow left">
        <div class="A_IconButton left"></div>
        <div class="M_ChapterButton">
        <p class="caption light">Назад</p>
          <p class="caption-bold">${prev.title}</p>
        </div>
    </a>`)
  }

  if (next) {
    parts.push(`
    <a href="${next.href}" class="O_ChapterButtonArrow right">
        <div class="M_ChapterButton right">
        <p class="caption light">Далее</p>
          <p class="caption-bold">${next.title}</p>
        </div>
        <div class="A_IconButton right"></div>
    </a>`)
  }

  container.innerHTML = parts.join('')
}
