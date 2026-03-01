import gsap from 'gsap'

const content = document.querySelector(".W_MarqueeContent");
const gap = parseFloat(getComputedStyle(content).gap) || 0;

const totalWidth = content.scrollWidth / 2 + gap;

content.innerHTML += content.innerHTML;

gsap.to(".W_MarqueeContent", {
  x: -totalWidth,
  duration: 20,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
  }
});


const irisLeft = document.getElementById("irisLeft");
const irisRight = document.getElementById("irisRight");
const eyeLeft = document.getElementById("eyeLeft");
const eyeRight = document.getElementById("eyeRight");
const lidLeft = document.getElementById("lidLeft");
const lidRight = document.getElementById("lidRight");

const MAX_MOVE = 28;

function getIrisOffset(eye, mouseX, mouseY) {
  const rect = eye.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = mouseX - cx;
  const dy = mouseY - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const clamp = Math.min(dist, MAX_MOVE) / (dist || 1);
  return { x: dx * clamp, y: dy * clamp };
}

window.addEventListener("mousemove", (e) => {
  const l = getIrisOffset(eyeLeft, e.clientX, e.clientY);
  const r = getIrisOffset(eyeRight, e.clientX, e.clientY);

  gsap.to(irisLeft, { x: l.x, y: l.y, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  gsap.to(irisRight, { x: r.x, y: r.y, duration: 0.3, ease: "power2.out", overwrite: "auto" });
});

function blink() {
  const tl = gsap.timeline({ onComplete: scheduleNextBlink });

  tl.to([lidLeft, lidRight], { scaleY: 1, duration: 0.08, ease: "power2.in" })
    .to([lidLeft, lidRight], { scaleY: 0, duration: 0.12, ease: "power2.out" });

  if (Math.random() < 0.2) {
    tl.to([lidLeft, lidRight], { scaleY: 1, duration: 0.06, ease: "power2.in" }, "+=0.08")
      .to([lidLeft, lidRight], { scaleY: 0, duration: 0.1, ease: "power2.out" });
  }
}

function scheduleNextBlink() {
  gsap.delayedCall(2 + Math.random() * 4, blink);
}

scheduleNextBlink();

document.addEventListener("mousedown", () => {
  gsap.to(".pupil", { scale: 1.4, duration: 0.15, ease: "power2.out" });
});

document.addEventListener("mouseup", () => {
  gsap.to(".pupil", { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });
});