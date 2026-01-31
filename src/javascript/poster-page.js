import React from 'react'
import { createRoot } from 'react-dom/client'
import PosterPage from './components/PosterPage.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('poster-page-root')

  if (container) {
    const root = createRoot(container)
    root.render(<PosterPage />)
  }
})
