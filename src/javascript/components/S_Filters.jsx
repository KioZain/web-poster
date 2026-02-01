import React from 'react'
import O_CategoryFilter from './O_CategoryFilter.jsx'
import C_Filters from './C_Filters.jsx'

function S_Filters({
  availableFilters,
  selectedFilters,
  onFilterChange,
  onReset
}) {
  const hasActiveFilters =
    selectedFilters.tags?.length > 0 ||
    selectedFilters.type?.length > 0 ||
    selectedFilters.layout?.length > 0 ||
    selectedFilters.year?.length > 0 ||
    selectedFilters.modules?.length > 0

  return (
    <div className="S_Filters">
      <div className="M_FiltersTitle">
        <p className="subtitle">Фильтры</p>
        {hasActiveFilters && (
          <button className="A_ResetFilters" onClick={onReset}>
            Сбросить
          </button>
        )}
      </div>

      {availableFilters.type?.length > 0 && (
        <O_CategoryFilter title="Тип веб-плаката">
          <C_Filters
            filterKey="type"
            options={availableFilters.type}
            selectedValues={selectedFilters.type || []}
            onChange={onFilterChange}
          />
        </O_CategoryFilter>
      )}

      {availableFilters.layout?.length > 0 && (
        <O_CategoryFilter title="Вёрстка">
          <C_Filters
            filterKey="layout"
            options={availableFilters.layout}
            selectedValues={selectedFilters.layout || []}
            onChange={onFilterChange}
          />
        </O_CategoryFilter>
      )}

      {availableFilters.year?.length > 0 && (
        <O_CategoryFilter title="Год создания">
          <C_Filters
            filterKey="year"
            options={availableFilters.year}
            selectedValues={selectedFilters.year || []}
            onChange={onFilterChange}
          />
        </O_CategoryFilter>
      )}

      {availableFilters.tags?.length > 0 && (
        <O_CategoryFilter title="Особенности">
          <C_Filters
            filterKey="tags"
            options={availableFilters.tags}
            selectedValues={selectedFilters.tags || []}
            onChange={onFilterChange}
          />
        </O_CategoryFilter>
      )}
    </div>
  )
}

export default S_Filters
