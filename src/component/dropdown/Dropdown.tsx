import React, { useState, FC } from "react"
import {Items} from '../../model/species';

type DropdownProps = {
   label: string;
   defaultValue: string;
   items: Items[];
}

type returnProps = [string, FC, (url: string) => void]

const useDropdown = ({label, defaultValue, items}: DropdownProps): returnProps  => {

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
