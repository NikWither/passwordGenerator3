import React from 'react'

export const Checkboxes = ({ value, handleCheckboxChange, checked, id, info }) => {
  return (
    <div className="checkbox">
      <div className="entry">
        <input
          className="entry__input"
          type="checkbox" 
          id={id} 
          checked={checked} 
          onChange={handleCheckboxChange}
        />
        <label className="entry__label">{value}</label>
      </div>
      <p className="checkbox__supText">{info}</p>
    </div>
  )
}
