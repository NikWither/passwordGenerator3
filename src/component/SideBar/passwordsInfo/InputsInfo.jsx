import React from 'react'

import '../Sidebar.scss';

export const InputsInfo = ({ title, id, placeholder, supText, handleInputChange, }) => {
  return (
    <div className="input">
        <h3 className="input__title">{title}</h3>
        <div className="entry">
          <input
            className="entry__inputCounter" 
            type="text" 
            id={id}
            onChange={handleInputChange}
          />
          <p className="entry__supText">{supText}</p>
        </div>
    </div>
  )
}
