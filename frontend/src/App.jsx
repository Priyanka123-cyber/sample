import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Submit from './components/Submit'
import { Route, Routes } from 'react-router-dom'
import Verify from './components/Verify'
import Home from './components/Home'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Submit/>}></Route>
    <Route path='/verify' element={<Verify/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App
