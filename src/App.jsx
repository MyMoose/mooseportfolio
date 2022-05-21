import React from 'react';

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";


const App = () => {
  return (

    <React.Fragment>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </React.Fragment>

  )
}

export default App
