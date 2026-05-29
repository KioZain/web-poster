console.log('init')

function initRandBasic(root) {
  const display = root.querySelector('.rand-display')
  const btn = root.querySelector('.rand-btn')

  btn.addEventListener('click', () => {
    const raw = Math.random()
    display.textContent = raw.toFixed(4)
  })
}

// random color ---

function initRandColor(root) {
  const colors = [
    '#fe3904',
    '#9eff70',
    '#82e1f1',
    '#febbed',
    '#3898e2',
    '#fe7d7d'
  ]

  root.querySelectorAll('.color-box').forEach((box) => {
    box.addEventListener('click', () => {
      const i = Math.floor(Math.random() * colors.length)
      box.style.backgroundColor = colors[i]
      box.style.borderRadius = Math.random() > 0.5 ? '50%' : '8px'
      box.style.transform = `scale(${0.8 + Math.random() * 0.5})`
    })
  })
}

// --- random from array ---

function initRandArray(root) {
  const phrases = [
    'Дизайн — это код',
    'Ошибки — это прогресс',
    'Браузер — это холст',
    'CSS — это магия',
    'Кликни ещё раз',
    'Пиксели не кусаются',
    'div не туда? Бывает.',
    'Код — новый карандаш'
  ]

  const phrase = root.querySelector('.phrase')
  const btn = root.querySelector('.shuffle-btn')

  btn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * phrases.length)
    phrase.style.opacity = '0'
    setTimeout(() => {
      phrase.textContent = phrases[i]
      phrase.style.opacity = '1'
    }, 200)
  })
}

// --- random position ---

function initRandPosition(root) {
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']
  const dots = []

  for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div')
    dot.className = 'rand-dot'
    const size = 10 + Math.random() * 30
    dot.style.width = size + 'px'
    dot.style.height = size + 'px'
    dot.style.background = colors[Math.floor(Math.random() * colors.length)]
    dot.style.opacity = (0.3 + Math.random() * 0.7).toFixed(2)
    dot.style.left = Math.random() * 90 + '%'
    dot.style.top = Math.random() * 85 + '%'
    root.appendChild(dot)
    dots.push(dot)
  }

  root.addEventListener('click', () => {
    dots.forEach((dot) => {
      dot.style.left = Math.random() * 90 + '%'
      dot.style.top = Math.random() * 85 + '%'
      dot.style.background = colors[Math.floor(Math.random() * colors.length)]
    })
  })
}

// --- random cycle generation ---

function initRandGenerate(root) {
  const btn = root.querySelector('.gen-btn')
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']

  function clearItems() {
    root.querySelectorAll('.gen-item').forEach((el) => el.remove())
  }

  function generate() {
    clearItems()
    const count = 15 + Math.floor(Math.random() * 20)

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      el.className = 'gen-item'
      const w = 10 + Math.random() * 60
      const h = 10 + Math.random() * 40
      el.style.width = w + 'px'
      el.style.height = h + 'px'
      el.style.left = Math.random() * 95 + '%'
      el.style.top = Math.random() * 85 + '%'
      el.style.background = colors[Math.floor(Math.random() * colors.length)]
      el.style.opacity = (0.3 + Math.random() * 0.7).toFixed(2)
      el.style.transform = `rotate(${Math.random() * 360}deg)`
      root.appendChild(el)
    }
  }

  generate()
  btn.addEventListener('click', generate)
}

// --- object with props ---

function initRandObject(root) {
  const names = ['Блоб', 'Пик', 'Зум', 'Фаз', 'Нод']
  const faces = ['◉', '◎', '●', '○', '◐']
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']

  function makeCreature() {
    return {
      name: names[Math.floor(Math.random() * names.length)],
      face: faces[Math.floor(Math.random() * faces.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 40 + Math.floor(Math.random() * 40),
      energy: Math.floor(Math.random() * 100)
    }
  }

  root.querySelectorAll('.creature').forEach((el) => {
    function render(c) {
      const body = el.querySelector('.creature-body')
      const nameEl = el.querySelector('.creature-name')
      const stats = el.querySelector('.creature-stats')
      body.style.backgroundColor = c.color
      body.style.width = c.size + 'px'
      body.style.height = c.size + 'px'
      body.textContent = c.face
      nameEl.textContent = c.name
      stats.textContent = `энергия: ${c.energy}`
    }

    render(makeCreature())
    el.addEventListener('click', () => render(makeCreature()))
  })
}

// --- array shuffle ---

function initRandShuffle(root) {
  const items = [
    { label: '1', color: '#fe3904' },
    { label: '2', color: '#9eff70' },
    { label: '3', color: '#82e1f1' },
    { label: '4', color: '#febbed' },
    { label: '5', color: '#3898e2' },
    { label: '6', color: '#fe7d7d' }
  ]

  const row = root.querySelector('.shuffle-row')
  const btn = root.querySelector('.shuffle-trigger')

  function render(arr) {
    row.innerHTML = ''
    arr.forEach((item) => {
      const div = document.createElement('div')
      div.className = 'shuffle-item'
      div.style.backgroundColor = item.color
      div.textContent = item.label
      row.appendChild(div)
    })
  }

  function shuffle(arr) {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  render(items)

  btn.addEventListener('click', () => {
    render(shuffle(items))
  })
}

// --- all comp ---

function initRandComposition(root) {
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']
  const shapes = []

  for (let i = 0; i < 8; i++) {
    const shape = document.createElement('div')
    shape.className = 'comp-shape'
    shapes.push(shape)
    root.appendChild(shape)
  }

  function randomize() {
    shapes.forEach((shape) => {
      const size = 20 + Math.random() * 120
      const isCircle = Math.random() > 0.4
      shape.style.width = size + 'px'
      shape.style.height = size + 'px'
      shape.style.borderRadius = isCircle ? '50%' : Math.random() * 12 + 'px'
      shape.style.background = colors[Math.floor(Math.random() * colors.length)]
      shape.style.opacity = (0.2 + Math.random() * 0.5).toFixed(2)
      shape.style.left = Math.random() * 85 + '%'
      shape.style.top = Math.random() * 75 + '%'
      shape.style.transform = `rotate(${Math.random() * 90}deg)`
    })
  }

  randomize()
  root.addEventListener('click', randomize)
}

// --- Реестр ---

const registry = {
  'rand-basic': initRandBasic,
  'rand-color': initRandColor,
  'rand-array': initRandArray,
  'rand-position': initRandPosition,
  'rand-generate': initRandGenerate,
  'rand-object': initRandObject,
  'rand-shuffle': initRandShuffle,
  'rand-composition': initRandComposition
}

// --- Диспетчер ---

document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.M_PreviewArea[data-demo]')

  areas.forEach((area) => {
    const name = area.dataset.demo
    const init = registry[name]
    if (init) init(area)
  })
})
