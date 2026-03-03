import { gsap } from 'gsap'

import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export function initInfiniteCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper')
  const track = document.querySelector('.carousel-track')
  const items = document.querySelectorAll('.carousel-item')

  if (!track || items.length === 0) return

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
// gsap.set('.text-go-gsap', { visibility: 'visible' })
// gsap.set('#buttonsGsap', { visibility: 'visible' })

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
const split = SplitText.create('.text-go-gsap', { type: 'words' })
gsap.set(split.words, { opacity: 0 })
const totalDuration = tl.duration()
const textDelay = 0.5
const wordsCount = split.words.length

const textDuration = 0.6
const textStagger =
  (totalDuration - textDelay - textDuration) / (wordsCount - 1)

const buttons = document.querySelector('#buttonsGsap')
const buttonsDuration = 0.5
const buttonsStart = totalDuration - buttonsDuration - 0.15

tl.fromTo(
  split.words,
  { opacity: 0, y: 35 },
  {
    opacity: 1,
    y: 0,
    duration: textDuration,
    stagger: textStagger,
    ease: 'power4.out'
  },
  textDelay
)

tl.fromTo(
  buttons,
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: buttonsDuration,
    ease: 'power2.out'
  },
  buttonsStart
)

document.addEventListener('DOMContentLoaded', initInfiniteCarousel)
