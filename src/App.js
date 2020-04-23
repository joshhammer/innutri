import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Advertiser from './components/Advertiser/Advertiser';
import Usp from './components/Usp/Usp';
import Science from './components/Science/Science';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='app-backdrop'>
        <div className='wrapper'>
          <Header />
          <Intro />
          <Advertiser />
          <Usp />
          <Science />
          <Products />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
