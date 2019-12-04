import React from 'react'
import CommonButton from './CommonButton'
const Header = () => {
    return (
      <nav>
        <a href="https://www.himama.com/">
          <img src="logomobile.png" alt="WoofMama logo" />
          <h2>
            woof<span>mama</span>
          </h2>
        </a>
        <ul>
          <li>
            <a href="https://www.himama.com/">Who Uses WoofMama</a>
          </li>
          <li>
            <a href="https://www.himama.com/">
                Features
            </a>
          </li>
          <li>
            <a href="https://www.himama.com/">
                Resources
            </a>
          </li>
            <CommonButton text="Start Now"/>
            <CommonButton text="Log In"/>
        </ul>
      </nav>
    );
}

export default Header
