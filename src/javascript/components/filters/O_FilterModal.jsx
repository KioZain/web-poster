import React, { useState, useEffect } from 'react'
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
  // all filters
  isAllFilters = false,
  allFiltersData = null
}) {
  // while choosing timed
  const [pending, setPending] = useState({})
  useEffect(() => {
    if (isOpen) {
      if (isAllFilters && allFiltersData) {
        setPending({ ...allFiltersData.selectedFilters })
      } else {
        setPending({ [filterKey]: [...selectedValues] })
      }
    }
  }, [isOpen, filterKey, selectedValues, isAllFilters, allFiltersData])

  const handleChange = (key, values) => {
    setPending((prev) => ({ ...prev, [key]: values }))
  }

  // apply
  const handleApply = () => {
    if (isAllFilters) {
      onApply(pending)
    } else {
      onApply(filterKey, pending[filterKey] || [])
    }
    onClose()
  }

  // reset
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

  if (!isOpen) return null

  // reetuuuuuuuuuurn
  return (
    <div className="Q_FilterModal" onClick={onClose}>
      <div className="O_FilterModal" onClick={(e) => e.stopPropagation()}>
        {/* head*/}
        <div className="M_FilterModalHeader">
          <div className="drag-handle" />
          <p className="subtitle">{title}</p>
          <button type="button" className="A_CloseButton" onClick={onClose}>
            <img src={iconClose} alt="" />
          </button>
        </div>

        {/* content */}
        <div className="C_FilterModalConent margin-container">
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
            // catefory only one
            <O_FilterSection
              filterKey={filterKey}
              options={options}
              selectedValues={pending[filterKey] || []}
              onChange={handleChange}
            />
          )}
        </div>

        {/* footer */}
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
      </div>
    </div>
  )
}

export default O_FilterModal
