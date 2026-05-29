function initCursorCoords(root) {
  const display = root.querySelector('.coords-display')
  const dot = root.querySelector('.cursor-dot')

  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    display.textContent = `x: ${x}  y: ${y}`
    dot.style.left = x + 'px'
    dot.style.top = y + 'px'
  })
}

// --- following elem ---

function initCursorFollow(root) {
  const follower = root.querySelector('.follower')
  const dot = root.querySelector('.follower-dot')

  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    dot.style.left = x + 'px'
    dot.style.top = y + 'px'
    follower.style.left = x + 'px'
    follower.style.top = y + 'px'
  })

  root.addEventListener('mousedown', () => {
    follower.style.width = '40px'
    follower.style.height = '40px'
  })

  root.addEventListener('mouseup', () => {
    follower.style.width = '60px'
    follower.style.height = '60px'
  })
}

// --- eyes ---

function initCursorEyes(root) {
  const eyes = root.querySelectorAll('.eye')

  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    eyes.forEach((eye) => {
      const pupil = eye.querySelector('.pupil')
      const eyeRect = eye.getBoundingClientRect()
      const ex = eyeRect.left - rect.left + eyeRect.width / 2
      const ey = eyeRect.top - rect.top + eyeRect.height / 2

      const angle = Math.atan2(my - ey, mx - ex)
      const maxDist = 18
      const dx = Math.cos(angle) * maxDist
      const dy = Math.sin(angle) * maxDist

      pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`
    })
  })
}

// --- pushing away---

function initCursorRepel(root) {
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']
  const items = []

  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div')
    el.className = 'repel-item'
    const size = 15 + Math.random() * 35
    el.style.width = size + 'px'
    el.style.height = size + 'px'
    el.style.background = colors[Math.floor(Math.random() * colors.length)]
    el.style.left = Math.random() * 90 + '%'
    el.style.top = Math.random() * 85 + '%'
    root.appendChild(el)
    items.push({
      el,
      origX: parseFloat(el.style.left),
      origY: parseFloat(el.style.top),
      size
    })
  }

  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    items.forEach((item) => {
      const elRect = item.el.getBoundingClientRect()
      const ex = elRect.left - rect.left + item.size / 2
      const ey = elRect.top - rect.top + item.size / 2
      const dist = Math.hypot(mx - ex, my - ey)
      const threshold = 100

      if (dist < threshold) {
        const angle = Math.atan2(ey - my, ex - mx)
        const force = ((threshold - dist) / threshold) * 40
        item.el.style.transform = `translate(${Math.cos(angle) * force}px, ${Math.sin(angle) * force}px)`
      } else {
        item.el.style.transform = 'translate(0, 0)'
      }
    })
  })
}

// --- Tilt ---

function initCursorTilt(root) {
  const card = root.querySelector('.tilt-card')

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`
  })

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
  })
}

// --- paralax ---

function initCursorParallax(root) {
  const layers = []
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed']
  const depths = [0.02, 0.04, 0.07]

  depths.forEach((depth, li) => {
    const layer = document.createElement('div')
    layer.className = 'parallax-layer'
    layer.dataset.depth = depth

    for (let i = 0; i < 3; i++) {
      const shape = document.createElement('div')
      shape.className = 'par-shape'
      const size = 30 + Math.random() * 80
      shape.style.width = size + 'px'
      shape.style.height = size + 'px'
      shape.style.background = colors[Math.floor(Math.random() * colors.length)]
      shape.style.opacity = (0.15 + li * 0.15).toFixed(2)
      shape.style.left = Math.random() * 80 + '%'
      shape.style.top = Math.random() * 70 + '%'
      layer.appendChild(shape)
    }

    root.appendChild(layer)
    layers.push(layer)
  })

  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth)
      layer.style.transform = `translate(${x * depth * -800}px, ${y * depth * -800}px)`
    })
  })
}

// --- trail ---

function initCursorTrail(root) {
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']
  let lastTime = 0

  root.addEventListener('mousemove', (e) => {
    const now = Date.now()
    if (now - lastTime < 30) return
    lastTime = now

    const rect = root.getBoundingClientRect()
    const dot = document.createElement('div')
    dot.className = 'trail-dot'
    const size = 6 + Math.random() * 14
    dot.style.width = size + 'px'
    dot.style.height = size + 'px'
    dot.style.left = e.clientX - rect.left + 'px'
    dot.style.top = e.clientY - rect.top + 'px'
    dot.style.background = colors[Math.floor(Math.random() * colors.length)]
    root.appendChild(dot)
    dot.addEventListener('animationend', () => dot.remove())
  })
}

// --- compos ---

function initCursorPoster(root) {
  const ring = root.querySelector('.poster-ring')
  const label = root.querySelector('.poster-label')
  const parLayer = root.querySelector('.poster-par-layer')

  // Создаём декор
  const colors = ['#fe3904', '#9eff70', '#82e1f1']
  for (let i = 0; i < 5; i++) {
    const d = document.createElement('div')
    d.className = 'poster-decor'
    const size = 40 + Math.random() * 100
    d.style.width = size + 'px'
    d.style.height = size + 'px'
    d.style.background = colors[Math.floor(Math.random() * colors.length)]
    d.style.left = Math.random() * 80 + '%'
    d.style.top = Math.random() * 70 + '%'
    parLayer.appendChild(d)
  }

  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const nx = x / rect.width - 0.5
    const ny = y / rect.height - 0.5

    ring.style.left = x + 'px'
    ring.style.top = y + 'px'

    const dist = Math.hypot(nx, ny)
    const ringSize = 40 + dist * 120
    ring.style.width = ringSize + 'px'
    ring.style.height = ringSize + 'px'

    label.style.letterSpacing = 2 + dist * 16 + 'px'
    parLayer.style.transform = `translate(${nx * -30}px, ${ny * -30}px)`
  })

  root.addEventListener('mouseleave', () => {
    label.style.letterSpacing = '2px'
    ring.style.width = '40px'
    ring.style.height = '40px'
  })
}

// --- registry ---

const registry = {
  'cursor-coords': initCursorCoords,
  'cursor-follow': initCursorFollow,
  'cursor-eyes': initCursorEyes,
  'cursor-repel': initCursorRepel,
  'cursor-tilt': initCursorTilt,
  'cursor-parallax': initCursorParallax,
  'cursor-trail': initCursorTrail,
  'cursor-poster': initCursorPoster
}

// --- areas ---

document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.M_PreviewArea[data-demo]')
  areas.forEach((area) => {
    const name = area.dataset.demo
    const init = registry[name]
    if (init) init(area)
  })
})
