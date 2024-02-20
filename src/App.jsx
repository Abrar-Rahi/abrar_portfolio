import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sociallinks from './components/Sociallinks';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Portfolio/>

   <Sociallinks/>

   </>
  );
}

export default App;
