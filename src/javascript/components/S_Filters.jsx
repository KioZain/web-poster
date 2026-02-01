import React from 'react'
import O_CategoryFilter from './O_CategoryFilter.jsx'
import C_Filters from './C_Filters.jsx'

function S_Filters({ availableFilters, selectedFilters, onFilterChange }) {
  return (
    <div className="S_Filters">
      {availableFilters.tags && availableFilters.tags.length > 0 && (
        <O_CategoryFilter title="Особенности" defaultOpen={true}>
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
