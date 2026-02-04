import React, { useState } from 'react'
import A_FilterToggle from './A_FilterToggle.jsx'
import A_FilterDropdown from './A_FilterDropdown.jsx'
import O_FilterModal from './O_FilterModal.jsx'
import iconFilters from '../../../images/icons/Q_filters.svg'

function S_FiltersRow({
  availableFilters,
  selectedFilters,
  onFilterChange,
  onReset
}) {
  // (null = closed all)
  const [openModal, setOpenModal] = useState(null)

  // active filter
  const isFilterActive = (key) => {
    return selectedFilters[key]?.length > 0
  }

  const handleTypeToggle = (typeValue) => {
    const currentTypes = selectedFilters.type || []

    if (currentTypes.includes(typeValue)) {
      onFilterChange(
        'type',
        currentTypes.filter((t) => t !== typeValue)
      )
    } else {
      onFilterChange('type', [...currentTypes, typeValue])
    }
  }

  // apply modal
  const handleApplyFilter = (filterKey, values) => {
    onFilterChange(filterKey, values)
  }

  // apply ALL filters modal
  const handleApplyAllFilters = (newFilters) => {
    Object.keys(newFilters).forEach((key) => {
      onFilterChange(key, newFilters[key])
    })
  }

  // reset one filter
  const handleResetFilter = (filterKey) => {
    onFilterChange(filterKey, [])
  }

  // reset all
  const handleResetAllFilters = () => {
    onReset()
  }

  // data
  const allFiltersData = {
    availableFilters,
    selectedFilters
  }

  return (
    <div className="S_FiltersRow">
      <button
        type="button"
        className="A_FilterToggle all-filters"
        onClick={() => setOpenModal('all')}
      >
        <img src={iconFilters} alt="" className="icon" />
      </button>

      <A_FilterToggle
        label="Статичный"
        isActive={selectedFilters.type?.includes('Статичный')}
        onClick={() => handleTypeToggle('Статичный')}
      />

      <A_FilterToggle
        label="Динамичный"
        isActive={selectedFilters.type?.includes('Динамичный')}
        onClick={() => handleTypeToggle('Динамичный')}
      />

      <A_FilterDropdown
        label="Вёрстка"
        isActive={isFilterActive('layout')}
        onClick={() => setOpenModal('layout')}
      />

      <A_FilterDropdown
        label="Год создания"
        isActive={isFilterActive('year')}
        onClick={() => setOpenModal('year')}
      />

      <A_FilterDropdown
        label="Детали"
        isActive={isFilterActive('tags')}
        onClick={() => setOpenModal('tags')}
      />

      <O_FilterModal
        isOpen={openModal === 'all'}
        onClose={() => setOpenModal(null)}
        title="Все фильтры"
        isAllFilters={true}
        allFiltersData={allFiltersData}
        onApply={handleApplyAllFilters}
        onReset={handleResetAllFilters}
      />

      <O_FilterModal
        isOpen={openModal === 'layout'}
        onClose={() => setOpenModal(null)}
        title="Вёрстка"
        filterKey="layout"
        options={availableFilters.layout || []}
        selectedValues={selectedFilters.layout || []}
        onApply={handleApplyFilter}
        onReset={handleResetFilter}
      />

      <O_FilterModal
        isOpen={openModal === 'year'}
        onClose={() => setOpenModal(null)}
        title="Год создания"
        filterKey="year"
        options={availableFilters.year || []}
        selectedValues={selectedFilters.year || []}
        onApply={handleApplyFilter}
        onReset={handleResetFilter}
      />

      <O_FilterModal
        isOpen={openModal === 'tags'}
        onClose={() => setOpenModal(null)}
        title="Детали"
        filterKey="tags"
        options={availableFilters.tags || []}
        selectedValues={selectedFilters.tags || []}
        onApply={handleApplyFilter}
        onReset={handleResetFilter}
      />
    </div>
  )
}

export default S_FiltersRow
