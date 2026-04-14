import lottie from 'lottie-web'
import animationData from '../../animations/LogoAnim.json'

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

const header = document.getElementById('siteHeader')
const hamburgerBtn = document.getElementById('hamburgerButton')
const searchBtn = document.getElementById('searchButton')
const mobileLinks = header?.querySelector('.С_MobileHeaderLinks')
const searchResults = header?.querySelector('.W_SearchResults')

// if (!header) return

hamburgerBtn?.addEventListener('click', () => {
  const isOpen = mobileLinks.classList.toggle('open')

  hamburgerBtn.classList.toggle('close', isOpen)
  hamburgerBtn.setAttribute('aria-expanded', isOpen)
  header.classList.toggle('is-open', isOpen)
  searchResults.classList.remove('open')
  searchBtn.classList.remove('close')
  searchBtn.setAttribute('aria-expanded', false)
})

searchBtn?.addEventListener('click', () => {
  const isOpen = searchResults.classList.toggle('open')

  searchBtn.classList.toggle('close', isOpen)
  searchBtn.setAttribute('aria-expanded', isOpen)
  header.classList.toggle('is-open', isOpen)
  mobileLinks.classList.remove('open')
  hamburgerBtn.classList.remove('close')
  hamburgerBtn.setAttribute('aria-expanded', false)
})
