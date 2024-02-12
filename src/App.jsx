import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'
import ProductSection from './pages/ProductSection'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import PreloadingScreen from './pages/PreloadingScreen' // Import the PreloadingScreen component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set loading to false after 3000 milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? ( // Render the preloading screen if loading is true
        <PreloadingScreen />
      ) : ( // Render the content once loading is false
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/product' element={<ProductSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
