import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Context from './Components/Context/Context'

function App() {
  return (
    <>
    <BrowserRouter>
    <Context>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </Context>
    </BrowserRouter>
    </>
  )
}

export default App
