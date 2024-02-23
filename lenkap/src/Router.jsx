import React from 'react'

// we can rename imports using as
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Router