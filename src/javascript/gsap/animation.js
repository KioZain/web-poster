import { gsap } from 'gsap'

import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export function initInfiniteCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper')
  const track = document.querySelector('.carousel-track')
  const items = document.querySelectorAll('.carousel-item')

  if (!track || items.length === 0) return

  // === ДИНАМИЧЕСКОЕ ВЫЧИСЛЕНИЕ РАЗМЕРОВ ===
  function getItemDimensions() {
    const firstItem = items[0]
    const rect = firstItem.getBoundingClientRect()
    const style = getComputedStyle(track)
    const gap = parseFloat(style.gap) || 16

    return {
      width: rect.width,
      height: rect.height,
      gap: gap,
      step: rect.width + gap
    }
  }

  // Параметры градации размера
  const minScale = 0.65
  const maxScale = 1.0

  let dimensions = getItemDimensions()
  let tl = null

  function getViewportCenter() {
    return window.innerWidth / 2
  }

  function updateScales() {
    const center = getViewportCenter()

    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const itemCenter = rect.left + rect.width / 2

      const distanceFromCenter = Math.abs(itemCenter - center)
      const maxDistance = Math.min(center, window.innerWidth * 0.6)
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1)

      const easedDistance = Math.pow(normalizedDistance, 1.5)
      const scale = maxScale - (maxScale - minScale) * easedDistance

      gsap.set(item, { scale: scale })
    })
  }

  function initAnimation() {
    if (tl) {
      tl.kill()
    }

    dimensions = getItemDimensions()

    const { step } = dimensions
    const totalItems = items.length
    const totalWidth = step * totalItems
    const pixelsPerSecond = 50
    const duration = totalWidth / pixelsPerSecond
    const startOffset = -step

    gsap.set(items, {
      x: (i) => startOffset + i * step,
      yPercent: -50,
      top: '50%',
      scale: 1
    })

    tl = gsap.to(items, {
      duration: duration,
      ease: 'none',
      x: `+=${totalWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          let val = parseFloat(x) % totalWidth
          if (val > totalWidth - step) {
            val -= totalWidth
          }
          return val
        })
      },
      repeat: -1,
      onUpdate: updateScales
    })

    updateScales()

    console.log('Carousel initialized:', {
      itemWidth: dimensions.width,
      step: step,
      totalWidth: totalWidth,
      duration: duration
    })
  }

  // === RESIZE HANDLER ===
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      initAnimation()
    }, 250)
  })

  initAnimation()
}

const container = document.querySelector('.W_HeadingContainer')
const W = container.offsetWidth
const H = container.offsetHeight
const sq = 6
const gap = 2
const fast = 0.6
const slow = 0.9

gsap.set('#lt', { x: -(sq + gap), y: -(sq + gap) })
gsap.set('#rt', { x: gap, y: -(sq + gap) })
gsap.set('#lb', { x: -(sq + gap), y: gap })
gsap.set('#rb', { x: gap, y: gap })

const tl = gsap.timeline()

tl.to('#lt', { x: -W / 2, duration: fast, ease: 'power2.inOut' }, 0)
  .to('#rt', { x: W / 2 - sq, duration: fast, ease: 'power2.inOut' }, 0)
  .to('#lb', { x: -W / 2, duration: slow, ease: 'power2.inOut' }, 0)
  .to('#rb', { x: W / 2 - sq, duration: slow, ease: 'power2.inOut' }, 0)

  .to('#lt', { y: -H / 2, duration: fast, ease: 'power2.inOut' })
  .to('#rt', { y: -H / 2, duration: fast, ease: 'power2.inOut' }, '<')
  .to('#lb', { y: H / 2 - sq, duration: slow, ease: 'power2.inOut' }, '<')
  .to('#rb', { y: H / 2 - sq, duration: slow, ease: 'power2.inOut' }, '<')

gsap.registerPlugin(SplitText)
// ===== SPLIT TEXT =====

const split = SplitText.create('.text-go-gsap', { type: 'words' })

// Общая длительность таймлайна квадратиков
const totalDuration = tl.duration()

// Маленькая задержка в начале текста
const textDelay = 0.5

// Сколько слов
const wordsCount = split.words.length

// Мы хотим, чтобы текст закончился в totalDuration
// Формула: delay + duration + stagger*(wordsCount-1) = totalDuration

const textDuration = 0.6
const textStagger =
  (totalDuration - textDelay - textDuration) / (wordsCount - 1)

tl.from(
  split.words,
  {
    opacity: 0,
    y: 35,
    duration: textDuration,
    stagger: textStagger,
    ease: 'power4.out'
  },
  textDelay
)

const buttons = document.querySelector('#buttonsGsap')

// финальная длительность всей сцены

// хотим, чтобы кнопки появились чуть раньше конца
const buttonsDuration = 0.5
const buttonsStart = totalDuration - buttonsDuration - 0.15

tl.from(
  buttons,
  {
    opacity: 0,
    y: 20,
    duration: buttonsDuration,
    ease: 'power2.out'
  },
  buttonsStart
)

const svgs = document.querySelectorAll('.frame-svg')

// небольшая анимация "пульса"
const svgDuration = 0.6
const svgStart = tl.duration() - svgDuration - 0.2

tl.fromTo(
  svgs,
  {
    scale: 1,
    transformOrigin: '50% 50%'
  },
  {
    scale: 1.2,
    duration: svgDuration,
    ease: 'power2.out',
    stagger: 0.05
  },
  svgStart
)

document.addEventListener('DOMContentLoaded', initInfiniteCarousel)
