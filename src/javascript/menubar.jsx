import React from 'react'

export default function Menubar() {
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
  console.log('Base path:', navLinks)

  return (
    <header className="S_Header">
      <div className="O_HeaderItems margin-container">
        <a className="A_Logo" href="/index.html"></a>
        <div className="W_HeaderLinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="M_IconButtons"></div>
      </div>
    </header>
  )
}
