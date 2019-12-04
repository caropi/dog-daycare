import React from 'react'
import CommonButton from './CommonButton'
const Header = () => {
    return (
        <div className="nav">
            <nav className="wrapper nav__container">
                <a href="https://www.himama.com/" className="nav__logo--link">
                    <img src="logomobile.png" alt="WoofMama logo" className="nav__img" />
                    <h2 className="nav__logo--title">
                        woof<span className="nav__logo--title--span">mama</span>
                    </h2>
                </a>
            <div className="nav__list-container">
                    <ul className='nav__list-container--list'>
                        <li className="nav__list-container--list-item">
                            <a href="https://www.himama.com/">
                                Who Uses WoofMama
                            </a>
                        </li>
                        <li className="nav__list-container--list-item">
                            <a href="https://www.himama.com/">
                                Features
                            </a>
                        </li>
                        <li className="nav__list-container--list-item">
                            <a href="https://www.himama.com/">
                                Resources
                            </a>
                        </li>
                    </ul>
                    <CommonButton btnClass={'common-button'} text="Start Now"/>
                    {/* Button class could change to logged-in onClick if hooked up to state */}
                    <CommonButton btnClass={'common-button logged-out'} text="Log In"/>
            </div>
            </nav>
        </div>
    );
}

export default Header
