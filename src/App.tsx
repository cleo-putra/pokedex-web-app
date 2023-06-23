import React, {Suspense} from 'react'
import Navbar from './sections/Navbar'
import Wrapper from './sections/Wrapper'
import Footer from './sections/Footer'
import Background from './components/Background'
import "./scss/index.scss";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Search from './pages/Search'
import About from './pages/About'
import Loader from './components/Loader'

function App() {
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
      
      <Suspense fallback={<Loader />}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route element={<Search />} path="/search" />          
          <Route element={<Pokemon />} path="/pokemon/:id" />
          <Route element={<Navigate to="/pokemon/1" />} path="*" />
          <Route element={<About />} path="/about" />          
        </Routes>
        <Footer />
      </div>
      
      </Suspense>
      </BrowserRouter>     
    </div>
  )
}

export default App