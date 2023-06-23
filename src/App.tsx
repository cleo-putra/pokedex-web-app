import React from 'react'
import Navbar from './sections/Navbar'
import Wrapper from './sections/Wrapper'
import Footer from './sections/Footer'
import Background from './components/Background'
import "./scss/index.scss";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Search from './pages/Search'
import About from './pages/About'

function App() {
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
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
      </BrowserRouter>     
    </div>
  )
}

export default App