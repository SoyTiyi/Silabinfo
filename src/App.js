import React from 'react';
import Navigator from './components/Navigator';
import Information from './components/Information';
import Footer from './components/Footer';
import './style.css';
function App() {
  return (
    <div className='container'>
      <Navigator />  
      <Information />
      <Footer />
    </div>
  );
}

export default App;
