import React, { useState } from 'react'
import searchIcon from '../../images/icons/32/Q_Search-32.svg'
import hamburgerIcon from '../../images/icons/32/Q_Hamburger-32.svg'
import closeIcon from '../../images/icons/32/Q_Close-32.svg'
import { getUrl } from '../config/paths.js'

export default function Menubar() {
  const [openPanel, setOpenPanel] = useState(null)

  const handleSearchClick = () => {
    setOpenPanel((prev) => (prev === 'search' ? null : 'search'))
  }

  const handleMenuClick = () => {
    setOpenPanel((prev) => (prev === 'menu' ? null : 'menu'))
  }

  const navLinks = [
    { href: getUrl('/handbook.html'), label: 'Учебник' },
    { href: getUrl('/modules.html'), label: 'Модули' },
    { href: getUrl('/posters.html'), label: 'Веб-плакаты' }
  ]

  console.log({ href: getUrl('/handbook.html'), label: 'Учебник' })

  const isOpen = openPanel !== null
  return (
    <header className={`S_Header ${isOpen ? 'is-open' : ''}`}>
      <div className="W_HeaderAllContent margin-container">
        <div className="W_HeaderTopNavigation">
          <a className="A_Logo" href={getUrl('/index.html')}></a>
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
                alt=""
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
                alt=""
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
