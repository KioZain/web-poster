import { gsap } from 'gsap'

import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export function initInfiniteCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper')
  const track = document.querySelector('.carousel-track')
  const items = Array.from(document.querySelectorAll('.carousel-item'))

  if (!track || items.length === 0) return

  const minScale = 0.65
  const maxScale = 1.0
  const pixelsPerSecond = 50

  let halfItemWidth = 0
  let viewportCenterInTrack = 0
  let maxDistance = 0
  let step = 0
  let totalWidth = 0

  let tl = null
  let scaleSetters = []
  let logCounter = 0

  function cacheLayout() {
    const itemRect = items[0].getBoundingClientRect()
    const trackRect = track.getBoundingClientRect()
    const gap = parseFloat(getComputedStyle(track).gap) || 16

    halfItemWidth = itemRect.width / 2
    const viewportCenter = window.innerWidth / 2
    viewportCenterInTrack = viewportCenter - trackRect.left
    maxDistance = Math.min(viewportCenter, window.innerWidth * 0.6)
    step = itemRect.width + gap
    totalWidth = step * items.length

    console.log('[cacheLayout]', {
      trackLeft: trackRect.left,
      viewportCenter,
      viewportCenterInTrack,
      halfItemWidth,
      maxDistance,
      step,
      totalWidth
    })
  }

  function updateScales() {
    for (let i = 0; i < items.length; i++) {
      let x = gsap.getProperty(items[i], 'x')
      x = x % totalWidth
      if (x > totalWidth - step) x -= totalWidth

      const itemCenter = x + halfItemWidth
      const distance = Math.abs(itemCenter - viewportCenterInTrack)
      const normalized = distance < maxDistance ? distance / maxDistance : 1
      const eased = Math.pow(normalized, 1.5)
      const scale = maxScale - (maxScale - minScale) * eased

      gsap.set(items[i], { scale })
    }
  }

  function initAnimation() {
    if (tl) tl.kill()

    cacheLayout()

    const startOffset = -step
    const duration = totalWidth / pixelsPerSecond
    gsap.set(items, {
      x: (i) => startOffset + i * step,
      yPercent: -50,
      top: '50%',
      scale: 1
    })

    // scaleSetters = items.map((item) => gsap.quickSetter(item, 'scale'))

    console.log('[init] gsap.version =', gsap.version)
    console.log(
      '[init] items =',
      items.length,
      'scaleSetters =',
      scaleSetters.length,
      'typeof setter =',
      typeof scaleSetters[0]
    )

    tl = gsap.to(items, {
      duration,
      ease: 'none',
      x: `+=${totalWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          let val = parseFloat(x) % totalWidth
          if (val > totalWidth - step) val -= totalWidth
          return val
        })
      },
      repeat: -1,
      onUpdate: updateScales
    })

    updateScales()
  }

  // === RESIZE HANDLER ===
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(initAnimation, 250)
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

const videoStart = textDelay - 0.4 // появляется за 0.4s до текста

tl.fromTo(
  '.A_VideoContainer',
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
  videoStart
)
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

const bubon = document.querySelector('#shimer')
console.log(bubon)
bubon.addEventListener('mouseenter', () => {
  const overlay = document.createElement('span')

  overlay.style.cssText = `position:absolute;
  top:0;
  left:-100%;
  width:70%;
  height:100%;background:linear-gradient(90deg,transparent,rgba(255, 255, 255, 0.1),transparent);`
  bubon.appendChild(overlay)
  gsap.to(overlay, {
    left: '200%',
    duration: 1.5,
    onComplete: () => overlay.remove()
  })
})

document.addEventListener('DOMContentLoaded', initInfiniteCarousel)
// reaksjdlkajsldjaksjdlkajslkdjBL
// asdasd
