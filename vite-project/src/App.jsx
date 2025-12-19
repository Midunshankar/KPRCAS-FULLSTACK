import React from 'react'
import Navbar from './component/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import contact from './page/contact.jsx'
import service from './page/service.jsx'
const App = () => {
  return (
    <>
      {/* <header/>
      <footer/ */}
      <Navbar/>

    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<contact/>}/>
      <Route path='/service' element={<service/>}/>
    </Routes>
    </>
  )
}

export default App