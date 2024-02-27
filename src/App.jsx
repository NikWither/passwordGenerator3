import React, { useState } from 'react';
import { Header } from './component/Header/Header';
import { SideBar } from './component/SideBar/SideBar';
import { Column } from './component/Column/Column';

import { validCharacters } from './utils/utils.js';

import './App.scss';

function App() {

  // states

  const [checkboxStates, setCheckboxStates] = useState([
    {
        state: false,
        value: 'Прописные буквы',
        id: 'checkbox1',
        info: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
    {
        state: true,
        value: 'Строчные буквы',
        id: 'checkbox2',
        info: 'abcdefghijklmnopqrstuvwxyz',
    },
    {
        state: true,
        value: 'Цифры',
        id: 'checkbox3',
        info: '0123456789'
    },
    {
        state: false,
        value: 'Специальные символы',
        id: 'checkbox4',
        info: '!@#$%^&*()"?><{}[].~:;"',
    },
  ]);

  const [inputValueStates, setInputValueStates] = useState({
    passwordLength: 0,
    passwordCount: 0,
  });

  const [passwords, setPasswords] = useState([]);

  // SideBars functions

  const handleCheckboxChange = (event) => {
    const id = event.target.id;
    setCheckboxStates((prevState) => {
        return prevState.map((checkbox) => {
            if (checkbox.id === id) {
                return {...checkbox, state: !checkbox.state};
            }
            return checkbox;
        })
    })
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValueStates({
        ...inputValueStates,
        [id] : value,
    })
  }

  // Column functions

  const generatePassword = () => {

    const characters = validCharacters(checkboxStates);

    let allPasswords = []

    if (characters === '') {
      alert('Выберите чебокс');
      return;
    } else {
      for (let i = 0; i < inputValueStates.passwordCount; i++) {
        let password = '';
        for (let j = 0; j < inputValueStates.passwordLength; j++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          password += characters[randomIndex];
        }
        allPasswords.push(password);
      }
  
      setPasswords(allPasswords);
    }
  }

  return (
    <div>
      <div className="app">
        <div className="app__body">
          <SideBar 
            checkboxStates={checkboxStates}
            handleCheckboxChange={handleCheckboxChange}
            inputValueStates={inputValueStates}
            handleInputChange={handleInputChange}
            generatePassword={generatePassword}
            passwords={passwords}
          />
          <Column
            passwords={passwords}
          />
        </div>
      </div>
    </div>
  )
}

export default App
