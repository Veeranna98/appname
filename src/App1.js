import React from 'react';
 import './Fruits';
import App1 from './App1';
import Header from './Header';
import Footer from './Footer';

function App1() {
  return (
  <div className='App1'>
    <Header />
    <hr></hr>
    <App1 />
    <hr></hr>
    <Footer />  
                                      
    </div>
  );
}

export default App1;