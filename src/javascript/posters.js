import React from 'react'
import { createRoot } from 'react-dom/client'
import PostersCatalog from './components/PostersCatalog.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('posters-catalog-root')

  if (container) {
    const root = createRoot(container)
    root.render(<PostersCatalog />)
  }
})
