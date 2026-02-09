import gsap from 'gsap'

const marquee = document.querySelector('.W_MarqueeContent')

marquee.innerHTML += marquee.innerHTML

const totalWidth = marquee.scrollWidth / 2

gsap.to(marquee, {
  x: -totalWidth,
  duration: 24,
  ease: 'linear',
  repeat: -1
})

console.log('inited bro')
