import React from 'react'
import { createRoot } from 'react-dom/client'

import S_ModulesNavBar from './components/S_ModulesNavBar.jsx'
import modulesNavData from './config/modulesNavData.js'


document.addEventListener('DOMContentLoaded', () => {
    // 1. Монтируем React-навигацию
    const container = document.getElementById('modules-nav-root')

    if (container) {
        const root = createRoot(container)
        root.render(<S_ModulesNavBar />)
    }
})

function flattenModules(navData) {
    const result = []

    for (const part of navData.parts) {
        for (const chapter of part.chapters) {
            result.push({
                id: chapter.id,
                title: chapter.title,
                href: chapter.href,
            })
        }
    }

    return result
}
