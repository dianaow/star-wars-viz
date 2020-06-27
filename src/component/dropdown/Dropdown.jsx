import React, { useState, useEffect } from "react"

const useDropdown = (label, defaultValue, items) => {

  const [value, setValue] = useState(defaultValue)

  const DropdownTemplate = () => (
    <label htmlFor={label}>
      {label}
      <select
        disabled={!items.length}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      >
        {items.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )

  return [value, DropdownTemplate, setValue]

}

export default useDropdown