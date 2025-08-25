// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
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
      </main>
      <Contact />
    </div>
     
  );
}

export default App;