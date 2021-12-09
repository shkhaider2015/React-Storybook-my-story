import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './components/Dropdown';
import { useOnClickOutside } from './Utils/hooks/useOutSideHook';

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
      <header className="App-header">
        <div style={{ border: '1px solid green' }} ref={pRef} onClick={() => setIsPopup(true) } >Click Me
        {isPopup && <DropDown  />}
        </div>

      </header>
    </div>
  );
}

export default App;
