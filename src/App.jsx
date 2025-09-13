import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/globals.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Education from './component/Education';
import Contact from './component/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </>
  )
}

export default App
