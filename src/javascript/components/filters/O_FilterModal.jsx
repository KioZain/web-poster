import React, { useState, useEffect } from 'react'
import {
  motion,
  useAnimate,
  useMotionValue,
  useDragControls
} from 'framer-motion'
import useMeasure from 'react-use-measure'
import iconClose from '../../../images/icons/Q_close.svg'
import O_FilterSection from './O_FilterSection.jsx'

function O_FilterModal({
  isOpen,
  onClose,
  title,
  filterKey,
  options,
  selectedValues,
  onApply,
  onReset,
  isAllFilters = false,
  allFiltersData = null
}) {
  const [pending, setPending] = useState({})

  const [scope, animate] = useAnimate()
  const [drawerRef, { height }] = useMeasure()
  const y = useMotionValue(0)
  const controls = useDragControls()

  useEffect(() => {
    if (isOpen) {
      if (isAllFilters && allFiltersData) {
        setPending({ ...allFiltersData.selectedFilters })
      } else {
        setPending({ [filterKey]: [...(selectedValues || [])] })
      }
    }
  }, [isOpen, filterKey, selectedValues, isAllFilters, allFiltersData])

  const handleClose = async () => {
    const yStart = typeof y.get() === 'number' ? y.get() : 0

    await animate(
      '#filter-drawer',
      {
        y: [yStart, height]
      },
      { duration: 0.25, ease: 'easeIn' }
    )

    onClose()
  }

  const handleChange = (key, values) => {
    setPending((prev) => ({ ...prev, [key]: values }))
  }

  const handleApply = async () => {
    if (isAllFilters) {
      onApply(pending)
    } else {
      onApply(filterKey, pending[filterKey] || [])
    }
    await handleClose()
  }

  const handleReset = () => {
    if (isAllFilters) {
      const empty = {}
      Object.keys(pending).forEach((key) => {
        empty[key] = []
      })
      setPending(empty)
      onReset()
    } else {
      setPending({ [filterKey]: [] })
      onReset(filterKey)
    }
  }

  const handleHeaderPointerDown = (e) => {
    controls.start(e)
  }

  if (!isOpen) return null

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      onClick={handleClose}
      className="Q_FilterModal"
    >
      <motion.div
        id="filter-drawer"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ ease: 'easeOut', duration: 0.25 }}
        className="O_FilterModal"
        style={{ y }}
        drag="y"
        dragControls={controls}
        onDragEnd={() => {
          if (y.get() >= 100) {
            handleClose()
          }
        }}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
      >
        <div
          className="M_FilterModalHeader"
          onPointerDown={handleHeaderPointerDown}
          style={{ touchAction: 'none' }}
        >
          <div className="drag-handle" />
          <p className="subtitle">{title}</p>
          <button
            type="button"
            className="A_CloseButton"
            onClick={(e) => {
              e.stopPropagation()
              handleClose()
            }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <img src={iconClose} alt="" />
          </button>
        </div>

        {/* Content */}
        <div className="C_FilterModalContent">
          {isAllFilters && allFiltersData ? (
            <>
              {allFiltersData.availableFilters.type?.length > 0 && (
                <O_FilterSection
                  title="Тип веб-плаката"
                  filterKey="type"
                  options={allFiltersData.availableFilters.type}
                  selectedValues={pending.type || []}
                  onChange={handleChange}
                />
              )}

              {allFiltersData.availableFilters.layout?.length > 0 && (
                <O_FilterSection
                  title="Вёрстка"
                  filterKey="layout"
                  options={allFiltersData.availableFilters.layout}
                  selectedValues={pending.layout || []}
                  onChange={handleChange}
                />
              )}

              {allFiltersData.availableFilters.year?.length > 0 && (
                <O_FilterSection
                  title="Год создания"
                  filterKey="year"
                  options={allFiltersData.availableFilters.year}
                  selectedValues={pending.year || []}
                  onChange={handleChange}
                />
              )}

              {allFiltersData.availableFilters.tags?.length > 0 && (
                <O_FilterSection
                  title="Особенности"
                  filterKey="tags"
                  options={allFiltersData.availableFilters.tags}
                  selectedValues={pending.tags || []}
                  onChange={handleChange}
                />
              )}
            </>
          ) : (
            <O_FilterSection
              filterKey={filterKey}
              options={options}
              selectedValues={pending[filterKey] || []}
              onChange={handleChange}
            />
          )}
        </div>

        {/* Footer */}
        <div className="M_FilterModalFooter">
          <button
            type="button"
            className="A_Button secondary"
            onClick={handleReset}
          >
            Сбросить
          </button>
          <button type="button" className="A_Button" onClick={handleApply}>
            Применить
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default O_FilterModal
