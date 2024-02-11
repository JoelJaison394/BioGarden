import { useState } from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'
import ProductSection from './pages/ProductSection'
import Footer from './components/Footer'


function App() {


  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path='/product' element={<ProductSection/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
