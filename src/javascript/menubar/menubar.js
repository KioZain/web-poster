document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader')
  const hamburgerBtn = document.getElementById('hamburgerButton')
  const searchBtn = document.getElementById('searchButton')
  const mobileLinks = header?.querySelector('.С_MobileHeaderLinks')
  const searchResults = header?.querySelector('.W_SearchResults')

  if (!header) return

  hamburgerBtn?.addEventListener('click', () => {
    const isOpen = mobileLinks.classList.toggle('open')

    hamburgerBtn.classList.toggle('close', isOpen)
    hamburgerBtn.setAttribute('aria-expanded', isOpen)
    header.classList.toggle('is-open', isOpen)

    // Закрываем поиск если был открыт
    searchResults.classList.remove('open')
    searchBtn.classList.remove('close')
    searchBtn.setAttribute('aria-expanded', false)
  })

  searchBtn?.addEventListener('click', () => {
    const isOpen = searchResults.classList.toggle('open')

    searchBtn.classList.toggle('close', isOpen)
    searchBtn.setAttribute('aria-expanded', isOpen)
    header.classList.toggle('is-open', isOpen)

    // Закрываем мобильное меню если было открыто
    mobileLinks.classList.remove('open')
    hamburgerBtn.classList.remove('close')
    hamburgerBtn.setAttribute('aria-expanded', false)
  })
})
