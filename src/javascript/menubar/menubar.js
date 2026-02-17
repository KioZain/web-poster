import React from 'react'
import { createRoot } from 'react-dom/client'

import Menubar from './menubar.jsx'
document.addEventListener('DOMContentLoaded', () => {

    const menuContainer = document.getElementById('menuRoot')

    if (menuContainer) {
        const menuRoot = createRoot(menuContainer)
        menuRoot.render(<Menubar />)
    }

})