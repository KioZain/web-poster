import React from 'react'
import { createRoot } from 'react-dom/client'

import S_LeftNavbar from './components/S_LeftNavBar.jsx'
import handbookNavData from './config/handbookNavData.js'

// sidebar
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('handbook-nav-root')

    if (container) {
        const root = createRoot(container)
        root.render(<S_LeftNavbar />)
    }
    initArticleNavigation()
})

// bottom navigation
function initArticleNavigation() {
    const navContainer = document.querySelector('.W_ArticleButtonsNavigation')
    if (!navContainer) return


    const currentId = navContainer.dataset.articleId

    if (!currentId) {
        console.warn('[ArticleNav] Контейнер найден, но data-article-id не указан')
        return
    }

    const allArticles = flattenArticles(handbookNavData)
    const currentIndex = allArticles.findIndex((article) => article.id === currentId)

    if (currentIndex === -1) {
        console.log(`net article :( "${currentId}"`)
        return
    }

    // next and prev
    const prev = currentIndex > 0 ? allArticles[currentIndex - 1] : null

    const next = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

    console.log('Предыдущая:', prev ? `${prev.title} (${prev.id})` : 'нет статьи')
    console.log('Следующая:', next ? `${next.title} (${next.id})` : 'нет статьи')


    renderNavButtons(navContainer, prev, next)
    setupHotkeys(prev, next)
}

// flatteing tree
function flattenArticles(navData) {
    const result = []

    for (const part of navData.parts) {
        for (const chapter of part.chapters) {
            for (const article of chapter.articles) {
                result.push({
                    id: article.id,
                    title: article.title,
                    href: article.href,
                })
            }
        }
    }
    // console.log(result)
    return result
}
// html generation
function renderNavButtons(container, prev, next) {
    const parts = []

    if (prev) {
        parts.push(`
    <a href="${prev.href}" class="O_ChapterButtonArrow left">
        <div class="A_IconButton left"></div>
        <div class="M_ChapterButton">
          <b>${prev.title}</b>
          <div class="C_KeysButton">
            <div class="A_KeyButton">ctrl</div>
            <span>+</span>
            <div class="A_KeyButton">alt</div>
            <span>+</span>
            <div class="A_KeyButton">←</div>
          </div>
        </div>
    </a>`)
    }

    if (next) {
        parts.push(`
    <a href="${next.href}" class="O_ChapterButtonArrow right">
        <div class="M_ChapterButton right">
          <b>${next.title}</b>
          <div class="C_KeysButton">
            <div class="A_KeyButton">ctrl</div>
            <span>+</span>
            <div class="A_KeyButton">alt</div>
            <span>+</span>
            <div class="A_KeyButton">→</div>
          </div>
        </div>
        <div class="A_IconButton right"></div>
    </a>`)
    }

    container.innerHTML = parts.join('')
}

// hot keys
function setupHotkeys(prev, next) {
    document.addEventListener('keydown', (event) => {
        if (!event.ctrlKey || !event.altKey || event.shiftKey) return

        if (event.key === 'ArrowLeft' && prev) {
            event.preventDefault()
            window.location.href = prev.href
        }

        if (event.key === 'ArrowRight' && next) {
            event.preventDefault()
            window.location.href = next.href
        }
    })
}