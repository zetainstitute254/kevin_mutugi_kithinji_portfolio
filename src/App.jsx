// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Photos from './components/Photos'; 
import Referees from './components/Referees';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (

    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Projects />
        
        <Referees />
      </main>
      
      <Contact />
    </div>
     
  );
}

export default App;