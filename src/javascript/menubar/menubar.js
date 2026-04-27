import lottie from 'lottie-web'
import React from 'react'
import { createRoot } from 'react-dom/client'

import animationData from '../../animations/LogoAnim.json'
import S_Search from '../components/S_Search.jsx'

// logo lottie
const logoContainer = document.getElementById('logoAnimation')

if (logoContainer) {
  const logoAnim = lottie.loadAnimation({
    container: logoContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: animationData
  })

  const logoLink = logoContainer.closest('.A_Logo')
  let isPlaying = false

  logoLink.addEventListener('mouseenter', () => {
    logoAnim.goToAndPlay(0)
    isPlaying = true
  })

  logoLink.addEventListener('mouseleave', () => {
    if (!isPlaying) {
      logoAnim.goToAndStop(0)
    }
  })

  logoAnim.addEventListener('complete', () => {
    isPlaying = false
    logoAnim.goToAndStop(0)
  })
}

// toggle menu
const header = document.getElementById('siteHeader')
const hamburgerBtn = document.getElementById('hamburgerButton')
const searchBtn = document.getElementById('searchButton')
const mobileLinks = header?.querySelector('.С_MobileHeaderLinks')
const searchPanel = document.getElementById('search-root')

hamburgerBtn?.addEventListener('click', () => {
  const isOpen = mobileLinks.classList.toggle('open')

  hamburgerBtn.classList.toggle('close', isOpen)
  hamburgerBtn.setAttribute('aria-expanded', isOpen)
  header.classList.toggle('is-open', isOpen)
  searchPanel?.classList.remove('open')
  searchBtn.classList.remove('close')
  searchBtn.setAttribute('aria-expanded', false)
})


// btn search open

searchBtn?.addEventListener('click', () => {
  const isOpen = searchPanel.classList.toggle('open')

  searchBtn.classList.toggle('close', isOpen)
  searchBtn.setAttribute('aria-expanded', isOpen)
  header.classList.toggle('is-open', isOpen)
  mobileLinks.classList.remove('open')
  hamburgerBtn.classList.remove('close')
  hamburgerBtn.setAttribute('aria-expanded', false)

  if (isOpen) {
    const searchInput = searchPanel.querySelector('.A_SearchInput')
    searchInput?.focus()
  }
})

const searchRoot = document.getElementById('search-root')

if (searchRoot) {
  const root = createRoot(searchRoot)
  root.render(<S_Search />)
}