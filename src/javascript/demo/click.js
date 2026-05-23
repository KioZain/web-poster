function initToggleProps(root) {
  root.querySelectorAll('.toggle-box').forEach((box) => {
    box.addEventListener('click', () => {
      box.classList.toggle('active')
    })
  })
}

// --- effect ---

function initAffectOther(root) {
  const btn = root.querySelector('.trigger-btn')
  const target = root.querySelector('.target-box')

  btn.addEventListener('click', () => {
    target.classList.toggle('morphed')
  })
}

// --- cycle ---

function initCycle(root) {
  const box = root.querySelector('.cycle-box')
  const totalStates = 4

  box.addEventListener('click', () => {
    let state = parseInt(box.dataset.state)
    state = (state + 1) % totalStates
    box.dataset.state = state
    box.textContent = state
  })
}

// --- spawnigng objects ---

function initSpawn(root) {
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']

  root.addEventListener('click', (e) => {
    if (e.target.classList.contains('spawn-hint')) return
    const rect = root.getBoundingClientRect()
    const dot = document.createElement('div')
    dot.className = 'spawned'
    dot.style.left = e.clientX - rect.left + 'px'
    dot.style.top = e.clientY - rect.top + 'px'
    dot.style.background = colors[Math.floor(Math.random() * colors.length)]
    root.appendChild(dot)
    dot.addEventListener('animationend', () => dot.remove())
  })
}

// --- collection---

function initCollection(root) {
  const cells = root.querySelectorAll('.cell')
  const counter = root.querySelector('.counter')

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      cell.classList.toggle('selected')
      const count = root.querySelectorAll('.cell.selected').length
      counter.textContent = `Выбрано: ${count}`
    })
  })
}

// --- data ---

function initDataAttr(root) {
  const swatches = root.querySelectorAll('.swatch')
  const canvas = root.querySelector('.canvas')
  const label = root.querySelector('.canvas-label')
  const value = root.querySelector('.canvas-value')

  const brightColors = ['#9eff70', '#82e1f1', '#febbed']

  swatches.forEach((sw) => {
    sw.addEventListener('click', () => {
      const color = sw.dataset.color
      const name = sw.dataset.name

      canvas.style.backgroundColor = color
      label.textContent = name
      value.textContent = color
      label.style.color = brightColors.includes(color) ? 'black' : 'white'

      swatches.forEach((s) => s.classList.remove('active-swatch'))
      sw.classList.add('active-swatch')
    })
  })
}

const registry = {
  'click-toggle-props': initToggleProps,
  'click-affect-other': initAffectOther,
  'click-cycle': initCycle,
  'click-spawn': initSpawn,
  'click-collection': initCollection,
  'click-data-attr': initDataAttr
}

function boot() {
  const areas = document.querySelectorAll('.M_PreviewArea[data-demo]')
  console.log('Найдено areas:', areas.length)

  areas.forEach((area) => {
    const name = area.dataset.demo
    const init = registry[name]
    if (init) init(area)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
