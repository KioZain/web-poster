import React from 'react'

function C_Filters({
  // array avaliable
  options,
  // array selected
  selectedValues,
  // (newSelectedValues) => {}
  onChange,
  filterKey
}) {
  const handleCheckboxChange = (value) => {
    // is selected?
    const isSelected = selectedValues.includes(value)

    let newSelectedValues

    if (isSelected) {
      newSelectedValues = selectedValues.filter((v) => v !== value)
    } else {
      newSelectedValues = [...selectedValues, value]
    }

    // callback
    onChange(filterKey, newSelectedValues)
  }

  return (
    <div className="C_Filters">
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            className="c-filters__checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <span className="c-filters__label">{option}</span>
        </label>
      ))}
    </div>
  )
}

export default C_Filters
