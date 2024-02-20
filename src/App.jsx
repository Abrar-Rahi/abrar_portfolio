import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sociallinks from './components/Sociallinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Portfolio/>
   <Experience/>
   <Contact/>

   <Sociallinks/>

   </>
  );
}

export default App;
