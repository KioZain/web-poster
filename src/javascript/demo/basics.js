function initIntroClick(root) {
  const btn = root.querySelector('.demo-btn')
  btn.addEventListener('click', () => {
    btn.classList.toggle('clicked')
    btn.textContent = btn.classList.contains('clicked')
      ? 'Готово!'
      : 'Нажми на меня'
  })
}

// ---classList: add, remove, toggle ---

function initClassList(root) {
  const target = root.querySelector('.target')

  root.querySelectorAll('.ctrl-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action
      if (action === 'reset') {
        target.className = 'target'
      } else {
        target.classList.toggle(action)
      }
    })
  })
}

// ---style ---

function initStyleDirect(root) {
  const colors = ['#fe3904', '#9eff70', '#82e1f1', '#febbed', '#3898e2']

  root.querySelectorAll('.style-box').forEach((box) => {
    box.addEventListener('click', () => {
      const c = colors[Math.floor(Math.random() * colors.length)]
      box.style.backgroundColor = c
      box.style.borderRadius = Math.random() > 0.5 ? '50%' : '8px'
      box.style.transform = `rotate(${Math.random() * 30 - 15}deg)`
    })
  })
}

// ---querySelectorAll + forEach ---

function initQueryAll(root) {
  root.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped')
    })
  })
}

// types ---

function initEvents(root) {
  const box = root.querySelector('.event-box')
  const label = root.querySelector('.event-label')

  box.addEventListener('mouseenter', () => {
    box.style.background = '#82e1f1'
    label.textContent = 'mouseenter'
  })

  box.addEventListener('mouseleave', () => {
    box.style.background = '#f0f0f0'
    box.style.color = 'black'
    box.style.transform = 'scale(1)'
    label.textContent = 'mouseleave'
  })

  box.addEventListener('mousedown', () => {
    box.style.background = '#fe3904'
    box.style.color = 'white'
    box.style.transform = 'scale(0.92)'
    label.textContent = 'mousedown'
  })

  box.addEventListener('mouseup', () => {
    box.style.transform = 'scale(1)'
    label.textContent = 'mouseup'
  })
}

// ---textContent ---

function initTextContent(root) {
  const display = root.querySelector('.display')
  let count = 0

  root.querySelector('.plus').addEventListener('click', () => {
    count++
    display.textContent = count
  })

  root.querySelector('.minus').addEventListener('click', () => {
    count--
    display.textContent = count
  })
}

// ---if / else ---

function initConditions(root) {
  const light = root.querySelector('.light')
  const label = root.querySelector('.light-label')
  let isOn = false

  light.addEventListener('click', () => {
    isOn = !isOn

    if (isOn) {
      light.classList.add('on')
      label.textContent = 'вкл'
    } else {
      light.classList.remove('on')
      label.textContent = 'выкл'
    }
  })
}

// ---setTimeout и setInterval ---

function initTimers(root) {
  const delayCircle = root.querySelector('.timer-delay')
  delayCircle.addEventListener('click', () => {
    setTimeout(() => {
      delayCircle.classList.toggle('fired')
    }, 1000)
  })

  const tickDisplay = root.querySelector('.tick-count')
  const intervalCircle = root.querySelector('.timer-interval')
  let ticks = 0
  let intervalId = null

  intervalCircle.addEventListener('click', () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    } else {
      intervalId = setInterval(() => {
        ticks++
        tickDisplay.textContent = ticks
      }, 500)
    }
  })
}

// --- registry ---

const registry = {
  'js-intro-click': initIntroClick,
  'js-classlist': initClassList,
  'js-style-direct': initStyleDirect,
  'js-query-all': initQueryAll,
  'js-events': initEvents,
  'js-text-content': initTextContent,
  'js-conditions': initConditions,
  'js-timers': initTimers
}

// --- dispatch ---

document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.M_PreviewArea[data-demo]')

  areas.forEach((area) => {
    const name = area.dataset.demo
    const init = registry[name]
    if (init) init(area)
  })
})
