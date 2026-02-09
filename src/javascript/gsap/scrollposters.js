import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

console.log('scroll inited')

gsap.to('.Q_PosterImage', {
  scrollTrigger: {
    trigger: '.Q_PosterImage',
    start: 'top center',
    markers: true,
    scrub: 1,
    toggleActions: 'play pause reverse none'
  }, // start animation when ".box" enters the viewport
  //   scale: 1.1,
  duration: 3
  //   width: '110%'
})
