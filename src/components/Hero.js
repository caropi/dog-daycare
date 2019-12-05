import React from 'react'
import CommonButton from './CommonButton';
const Hero = () => {
    return (
      <div className="hero wrapper">
        <img
          src="undraw_good_doggy_4wfq.svg"
          alt="Woman walking dog"
          className="hero__img"
        />
        <div className="hero__copy-container">
          <h1 className="hero__copy-container--title">
            Pupper puggo, you are doing me a frighten woofe.
          </h1>
          <p className="hero__copy-container--text">
            Doggo ipsum wow such tempt adorable doggo ur givin me a spook sub
            woofer most angery pupper I have ever seen, lotsa pats very hand
            that feed shibe snoot.
          </p>
          <CommonButton btnClass="common-button " text="Start Now" />
        </div>
      </div>
    );
}

export default Hero
