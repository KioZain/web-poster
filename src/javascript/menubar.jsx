import React, { useState } from 'react'
import searchIcon from '../images/icons/32/Q_Search-32.svg'
import hamburgerIcon from '../images/icons/32/Q_Hamburger-32.svg'
import closeIcon from '../images/icons/32/Q_Close-32.svg'

export default function Menubar() {
  // null — всё закрыто, 'menu' — мобильные ссылки, 'search' — поиск
  const [openPanel, setOpenPanel] = useState(null)

  const handleSearchClick = () => {
    setOpenPanel((prev) => (prev === 'search' ? null : 'search'))
  }

  const handleMenuClick = () => {
    setOpenPanel((prev) => (prev === 'menu' ? null : 'menu'))
  }

  const getBasePath = () => {
    const path = window.location.pathname
    const segments = path.split('/').filter((segment) => segment.length > 0)

    if (
      segments.length > 0 &&
      segments[segments.length - 1].includes('.html')
    ) {
      segments.pop()
    }

    if (segments.length === 0) {
      return './'
    }
    return '../'.repeat(segments.length)
  }

  const basePath = getBasePath()
  const navLinks = [
    { href: `${basePath}handbook.html`, label: 'Учебник' },
    { href: `${basePath}modules.html`, label: 'Модули' },
    { href: `${basePath}posters.html`, label: 'Веб-плакаты' }
  ]

  const isOpen = openPanel !== null

  return (
    <header className={`S_Header ${isOpen ? 'is-open' : ''}`}>
      <div className="W_HeaderAllContent margin-container">
        <div className="W_HeaderTopNavigation">
          <a className="A_Logo" href="/index.html"></a>
          <div className="W_HeaderLinks">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="M_IconButtons">
            <button
              className="A_IconButton search"
              onClick={handleSearchClick}
              aria-label="Поиск"
              aria-expanded={openPanel === 'search'}
            >
              <img
                src={openPanel === 'search' ? closeIcon : searchIcon}
                alt={openPanel === 'search' ? 'Закрыть поиск' : 'Поиск'}
              />
            </button>
            <button
              className="A_IconButton hamburger"
              onClick={handleMenuClick}
              aria-label="Меню"
              aria-expanded={openPanel === 'menu'}
            >
              <img
                src={openPanel === 'menu' ? closeIcon : hamburgerIcon}
                alt={openPanel === 'menu' ? 'Закрыть меню' : 'Меню'}
              />
            </button>
          </div>
        </div>

        {/* Search panel */}
        {openPanel === 'search' && (
          <div className="W_SearchResults">
            <div className="M_SearchBar">
              <input
                type="text"
                placeholder="Поиск по учебнику"
                className="A_SearchInput"
              />
              <button className="A_Button">Найти</button>
            </div>
            <div className="A_Found caption-caps">24 результата найдено</div>
            <div className="C_Articles result"></div>
          </div>
        )}

        {/* Mobile links */}
        {openPanel === 'menu' && (
          <div className="С_MobileHeaderLinks">
            {navLinks.map((link) => (
              <a
                className="A_MobileHeaderLink"
                key={link.href}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
