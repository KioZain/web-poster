import lottie from 'lottie-web'
import React from 'react'
import { createRoot } from 'react-dom/client'

// import animationData from '../../animations/LogoAnim.json'
import S_Search from '../components/S_Search.jsx'

// logo lottie

const CONFIG = {
  scrollThreshold: 50,
  snapDuration: 700,
  snapEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// ─── INIT ─────────────────────────────────────────────────────────────────────

const card = document.querySelector('.A_Logo__card');
if (!card) throw new Error('.A_Logo__card не найден');
card.style.animation = 'none';
let currentAngle = 0;
let accumulatedY = 0;
let isSnapping = false;


function snapTo(targetAngle) {
  if (isSnapping) return;
  isSnapping = true;

  card.style.transition = `transform ${CONFIG.snapDuration}ms ${CONFIG.snapEasing}`;
  card.style.transform = `rotateY(${targetAngle}deg)`;

  card.addEventListener('transitionend', () => {
    isSnapping = false;
    card.style.transition = 'none';
  }, { once: true });
}

function flip(direction) {
  currentAngle -= direction * 180;
  snapTo(currentAngle);
  accumulatedY = 0;
}


function onScroll(delta) {
  if (isSnapping) return;

  accumulatedY += delta;

  if (accumulatedY >= CONFIG.scrollThreshold) {
    flip(+1);
  } else if (accumulatedY <= -CONFIG.scrollThreshold) {
    flip(-1);
  }
}

window.addEventListener('wheel', (e) => {
  onScroll(e.deltaY);
}, { passive: true });

let touchStartY = 0;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  const delta = touchStartY - e.touches[0].clientY;
  touchStartY = e.touches[0].clientY;
  onScroll(delta);
}, { passive: true });

// toggle menu
const header = document.getElementById('siteHeader')
const hamburgerBtn = document.getElementById('hamburgerButton')
const searchBtn = document.getElementById('searchButton')
const mobileLinks = header?.querySelector('.С_MobileHeaderLinks')
const searchPanel = document.getElementById('search-root')

hamburgerBtn?.addEventListener('click', () => {
  const isOpen = mobileLinks.classList.toggle('open')

  hamburgerBtn.classList.toggle('close', isOpen)
  hamburgerBtn.setAttribute('aria-expanded', isOpen)
  header.classList.toggle('is-open', isOpen)
  searchPanel?.classList.remove('open')
  searchBtn.classList.remove('close')
  searchBtn.setAttribute('aria-expanded', false)
})


// btn search open

searchBtn?.addEventListener('click', () => {
  const isOpen = searchPanel.classList.toggle('open')

  searchBtn.classList.toggle('close', isOpen)
  searchBtn.setAttribute('aria-expanded', isOpen)
  header.classList.toggle('is-open', isOpen)
  mobileLinks.classList.remove('open')
  hamburgerBtn.classList.remove('close')
  hamburgerBtn.setAttribute('aria-expanded', false)

  if (isOpen) {
    const searchInput = searchPanel.querySelector('.A_SearchInput')
    searchInput?.focus()
  }
})

const searchRoot = document.getElementById('search-root')

if (searchRoot) {
  const root = createRoot(searchRoot)
  root.render(<S_Search />)
}