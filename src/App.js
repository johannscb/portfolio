import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import About from './container/About/About'
import Projects from './container/Projects/Projects'
import Skills from './container/Skills/Skills'
import Contact from './container/Contact/Contact'
import Footer from './container/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App