import React from 'react'

import RandomColor from './RandomColor.js'
import Accordiion from './projects/Accordiion.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Signup from './Signup.js'
// import BackgroundImage from './BackgroundImage.js'

const App = () => {
  return (
    <>
      <div className='h-screen w-full flex justify-center bg-gray-300' >
        <div className='' >
          <BrowserRouter basename="/">
            <Routes >
              {/* <BackgroundImage /> */}
              {/* <Signup /> */}
              <Route path="/" element={<Accordiion />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Accordiion />} />
              <Route path="/" element={<Accordiion />} />
              {/* <Accordiion /> */}
              {/* <RandomColor /> */}

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App