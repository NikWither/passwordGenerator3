import React, { useState } from 'react'
import { Checkboxes } from './passwordsInfo/Checkboxes';
import { InputsInfo } from './passwordsInfo/InputsInfo';

import './Sidebar.scss';

export const SideBar = (
    { 
        checkboxStates, 
        handleCheckboxChange, 
        handleInputChange, 
        generatePassword,
    }
    
    ) => {

    return (
        <div className="sidebar">
            <div className="sidebar__inputs">
                <InputsInfo
                    title={'Длина пароля'} 
                    id={'passwordLength'} 
                    supText={'символов,'} 
                    handleInputChange={handleInputChange}
                />
                <InputsInfo 
                    title={'Количество'} 
                    id={'passwordCount'} 
                    supText={'паролей'} 
                    handleInputChange={handleInputChange}
                />
            </div>
            <div className="sidebar__checkboxes">
                {
                    checkboxStates.map((checkbox, index) => (
                        <Checkboxes 
                            id={checkbox.id} 
                            value={checkbox.value}
                            checked={checkbox.state}
                            info={checkbox.info}
                            handleCheckboxChange={handleCheckboxChange}
                            key={index}
                        />
                        )
                    )
                }
            </div>
            <button 
                className="button"
                onClick={generatePassword}>
                <p className="button__text">Сгенерировать пароли</p>
            </button>
        </div>
    )
}