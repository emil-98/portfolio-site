import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'



const App = () => {

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </>
  )
}

export default App
