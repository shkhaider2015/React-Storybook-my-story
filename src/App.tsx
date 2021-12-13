import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './components/Dropdown';
import { useOnClickOutside } from './Utils/hooks/useOutSideHook';
import HaiderButton from './components/Button';

function App() {
  const [isPopup, setIsPopup] = useState<boolean>();
  const pRef = useRef<HTMLDivElement>(null);

 const handleClick = () => {
  console.log("Click Outside : ")
  setIsPopup(false)
 }

useOnClickOutside(pRef, handleClick)

  return (
    <div className="App">
      <header >
        <div style={{ width: '400px' }} >
          <HaiderButton text='Click Me' outlined={true} disable={true} onClick={() => ''} />
        </div>

      </header>
    </div>
  );
}

export default App;
