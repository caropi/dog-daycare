import React from 'react';
import './styles/styles.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Hero />
        <svg
          className="hero-curve"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366.01 323.38"
        >
          <path
            d="M1159.84,163.88c-67.51-6-134.38-1.91-199.11,18.19-100.62,31.23-193.57,79.51-284,134.05-112.21,67.69-224.27,136.13-360.3,119.64-117-14.19-228.84-72.91-304.73-163.48C7,266.64,3.29,262.11,0,257.45V494.7H1366V246.3C1303.46,203.6,1234.56,170.57,1159.84,163.88Z"
            transform="translate(0 -161.32)"
            fill="#fff"
          ></path>
        </svg>
      </header>
      <Carousel />
    </div>
  );
}

export default App;
