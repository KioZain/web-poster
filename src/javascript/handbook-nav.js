import React from 'react'
import { createRoot } from 'react-dom/client'

import S_LeftNavbar from './components/S_LeftNavBar.jsx'
import handbookNavData from './config/handbookNavData.js'

// CHANGE IT
const LAST_AVAILABLE_CHAPTER = 'chapter-2-6'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('handbook-nav-root')

  if (container) {
    const activeChapterId = getActiveChapterId()
    const root = createRoot(container)
    root.render(<S_LeftNavbar activeChapterId={activeChapterId} />)
  }

  // Prev next
  initArticleNavigation()
  initChapterNavigation()
})

function getActiveChapterId() {
  const navContainer = document.querySelector('.W_ArticleButtonsNavigation')

  if (!navContainer) {
    console.error('[Navbar] .W_ArticleButtonsNavigation не найден на странице')
    return null
  }

  if (navContainer.dataset.chapterId) {
    return navContainer.dataset.chapterId
  }

  if (navContainer.dataset.articleId) {
    return findChapterByArticleId(
      navContainer.dataset.articleId,
      handbookNavData
    )
  }

  console.error(
    '[Navbar] .W_ArticleButtonsNavigation найден, но нет ни data-chapter-id, ни data-article-id'
  )
  return null
}

function findChapterByArticleId(articleId, navData) {
  for (const part of navData.parts) {
    for (const chapter of part.chapters) {
      for (const article of chapter.articles) {
        if (article.id === articleId) {
          return chapter.id
        }
      }
    }
  }

  return null
}

function initArticleNavigation() {
  const navContainer = document.querySelector('.W_ArticleButtonsNavigation')
  if (!navContainer) return

  const currentId = navContainer.dataset.articleId

  if (!currentId) {
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

  renderNavButtons(navContainer, prev, next)
}

function flattenChapters(navData) {
  const result = []

  for (const part of navData.parts) {
    for (const chapter of part.chapters) {
      if (chapter.id === LAST_AVAILABLE_CHAPTER) return result

      result.push({ id: chapter.id, title: chapter.title, href: chapter.href })
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
