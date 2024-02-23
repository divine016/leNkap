import React from 'react'

// we can rename imports using as
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Home from './pages/Login'
// import About from './pages/About'
// import Products from './pages/Products'
// import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={ <SignUp/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Router