import React from 'react'
import C_Filters from './C_Filters.jsx'

function O_FilterSection({
  title,
  filterKey,
  options,
  selectedValues,
  onChange
}) {
  return (
    <div className="O_FilterSection">
      {title && <p className="subtitle">{title}</p>}

      <C_Filters
        filterKey={filterKey}
        options={options}
        selectedValues={selectedValues}
        onChange={onChange}
      />
    </div>
  )
}

export default O_FilterSection
