import React from 'react'
import { createRoot } from 'react-dom/client'

import S_LeftNavbar from './components/S_LeftNavBar.jsx'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('handbook-nav-root')

    if (container) {
        const root = createRoot(container)
        root.render(<S_LeftNavbar />)
    } else {
        console.log('Контейнер #handbook-nav-root не найден на странице')
    }
})