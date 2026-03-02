import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SHIFT = 150
const SCRUB = 2
const START = 'top center'

const rows = document.querySelectorAll('.C_PostersRow')
const firstRow = rows[0]

rows.forEach((row, index) => {
  const inner = row.querySelector('.W_RowPostersAnim')
  const direction = index % 2 === 0 ? SHIFT : -SHIFT

  gsap.to(inner, {
    x: direction,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: firstRow,
      start: START,
      end: () => {
        const rowBottom =
          row.getBoundingClientRect().top + window.scrollY + row.offsetHeight
        const firstRowTop =
          firstRow.getBoundingClientRect().top + window.scrollY
        const distance = rowBottom - firstRowTop
        return `+=${distance}`
      },
      invalidateOnRefresh: true,
      scrub: SCRUB
      // markers: true
    }
  })
})
