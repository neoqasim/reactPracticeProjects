import React from 'react'

import RandomColor from './RandomColor.js'
import Accordiion from './projects/Accordiion.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup.js'
import BackgroundImage from './projects/BackgroundImage.js'
import Sidebar from './projects/Sidebar.jsx'
import Testimonials from './projects/Testimonials.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <div className='h-screen w-full flex  bg-gray-300' >
          <div>  <Sidebar /> </div>
          <div className='' >
            <Routes >

              <Route path="/" element={<Accordiion />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/random-color-generator" element={<RandomColor />} />
              <Route path="/bg-changer" element={<BackgroundImage />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App