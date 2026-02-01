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
        <label className="M_CheckBoxLabel" key={option}>
          <input
            type="checkbox"
            className="Q_CheckBox"
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <span className="A_FilterLabel">{option}</span>
        </label>
      ))}
    </div>
  )
}

export default C_Filters
