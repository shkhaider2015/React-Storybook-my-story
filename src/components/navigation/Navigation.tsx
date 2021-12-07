import React, { useState } from "react";
import { ReactComponent as AppIcon } from "../../images/app_icon.svg";
import "./Navigation.css";

function Navigation(): React.ReactElement {

  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleHamburger(!toggleHamburger);
  }
  return (
    <div className="nav-root">
      <div className="left-nav">
        <div className="nav-item">
          <AppIcon className="app-icon" />
          <h1>Goldi</h1>
        </div>
        <div className="nav-item">
          <h3>Features</h3>
        </div>
        <div className="nav-item">
          <h3>Pricing</h3>
        </div>
        <div className="nav-item">
          <h3>About</h3>
        </div>
        <div className="nav-item">
          <h3>Support</h3>
        </div>
      </div>
      <div className="right-nav">
        <button className="login-button">Login</button>
      </div>
      <div className="mob-nav">
        <div className="mob-logo">
          <AppIcon className="app-icon" />
          <h1>Goldi</h1>
        </div>
        <div className="mob-hamburger">
          <button
            className={`menu ${toggleHamburger ? "opened" : "" }`}
            onClick={handleToggle}
            aria-label="Main Menu"
            aria-expanded={toggleHamburger}
          >
            <svg className="svg-image" width="100" height="70" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>
      {toggleHamburger && (<div className="mob-nav-item" >
          <div className="single-item" >
              <h3>Features</h3>
          </div>
          <div className="single-item" >
              <h3>Pricing</h3>
          </div>
          <div className="single-item" >
              <h3>About</h3>
          </div>
          <div className="single-item" >
              <h3>Support</h3>
          </div>
      </div>)}
    </div>
  );
}

export default React.memo(Navigation);
