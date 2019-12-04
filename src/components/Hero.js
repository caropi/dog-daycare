import React from 'react'
import CommonButton from './CommonButton';
const Hero = () => {
    return (
      <div className="hero wrapper">
        <img src="undraw_good_doggy_4wfq.svg" alt="Woman walking dog" className="hero__img" />
        <div className="hero__copy-container">
          <h1 className="hero__copy-container--title">Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="hero__copy-container--text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            perspiciatis reiciendis labore veniam! Corrupti voluptates
            dignissimos consequuntur earum harum ducimus?
          </p>
          <CommonButton btnClass='common-button' text="Start Now" />
        </div>
      </div>
    );
}

export default Hero
