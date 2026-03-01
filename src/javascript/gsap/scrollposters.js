import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// === Настройки ===
const SHIFT = 250
const SCRUB = 3
const START = 'top center' // ← регулируй: когда все анимации стартуют одновременно

const rows = document.querySelectorAll('.C_PostersRow')
const firstRow = rows[0]

rows.forEach((row, index) => {
  const inner = row.querySelector('.W_RowPostersAnim')
  const direction = index % 2 === 0 ? SHIFT : -SHIFT

  gsap.to(inner, {
    x: direction,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: firstRow,        // все триггеры привязаны к первой строке — старт одновременный
      start: START,
      end: () => {
        // конец у каждой строки свой — привязан к её нижнему краю
        const rowBottom = row.getBoundingClientRect().top + window.scrollY + row.offsetHeight
        const firstRowTop = firstRow.getBoundingClientRect().top + window.scrollY
        const distance = rowBottom - firstRowTop
        return `+=${distance}`   // конец = старт + расстояние до низа конкретной строки
      },
      invalidateOnRefresh: true, // пересчитывает end при ресайзе
      scrub: SCRUB,
      // markers: true,
    },
  })
})