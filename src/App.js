import React from 'react';
import './styles/styles.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Hero/>
      </header>
      <Carousel/>
    </div>
  );
}

export default App;
