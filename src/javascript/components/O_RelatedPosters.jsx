// src/javascript/components/M_RelatedPosters.jsx

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import arrowLeft from '../../images/icons/Q_arrow-left.svg'
import arrowRight from '../../images/icons/Q_arrow-right.svg'

function RelatedPosters({ posters, priorityTag, cardSpan = 1 }) {
  if (posters.length === 0) return null
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const x = useMotionValue(0)

  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const CARD_WIDTH = 220
  const GAP = 16
  const STEP = (CARD_WIDTH + GAP) * 3

  function getMaxOffset() {
    if (!containerRef.current || !trackRef.current) return 0
    return -(trackRef.current.scrollWidth - containerRef.current.offsetWidth)
  }

  function updateButtons(currentX) {
    setCanPrev(currentX < 0)
    setCanNext(currentX > getMaxOffset())
  }

  useEffect(() => {
    updateButtons(x.get())
  }, [posters])

  function slideTo(newX) {
    const clamped = Math.min(0, Math.max(newX, getMaxOffset()))

    // animate() и
    animate(x, clamped, {
      type: 'spring',
      stiffness: 300,
      damping: 35
    })

    updateButtons(clamped)
  }

  const handleNext = () => slideTo(x.get() - STEP)
  const handlePrev = () => slideTo(x.get() + STEP)

  return (
    <div className="O_RelatedPosters">
      <div className="M_RelatedPostersHead margin-container">
        <div className="M_RelatedPostersTitle">
          <h4>Похожие веб-плакаты</h4>
          {priorityTag && (
            <span className="caption-bold light">{priorityTag}</span>
          )}
        </div>

        <div className="M_ArrowControls">
          <button
            className="A_SliderButton"
            onClick={handlePrev}
            disabled={!canPrev}
          >
            <img src={arrowLeft} alt="" />
          </button>
          <button
            className="A_SliderButton"
            onClick={handleNext}
            disabled={!canNext}
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>

      <div
        className="W_RelatedPostersViewport margin-container"
        ref={containerRef}
      >
        <motion.div
          ref={trackRef}
          className="C_RelatedPostersTrack"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: getMaxOffset(),
            right: 0
          }}
          // dragElastic:
          dragElastic={0.05}
          onDragEnd={() => updateButtons(x.get())}
        >
          {posters.map((poster) => (
            <a
              key={poster.id}
              href={`/posters/poster.html?id=${poster.id}`}
              className="A_RelatedPosterCard"
            >
              <img src={poster.cover} alt={poster.name} loading="lazy" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default RelatedPosters
