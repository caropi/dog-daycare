import React from 'react'
import CommonButton from './CommonButton'
const Header = () => {
    return (
        <div className="nav">
            <nav className="wrapper nav__container">
                <a href="https://www.himama.com/">
                    <img src="logomobile.png" alt="WoofMama logo" className="nav__img" />
                    <h2 className="nav__logo">
                        woof<span className="nav__logo--span">mama</span>
                    </h2>
                </a>
                <ul>
                    <li>
                        <a href="https://www.himama.com/">
                            Who Uses WoofMama
                        </a>
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
                </ul>
                <CommonButton text="Start Now"/>
                <CommonButton text="Log In"/>
            </nav>
        </div>
    );
}

export default Header
