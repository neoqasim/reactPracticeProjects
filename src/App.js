import React from 'react'
// import Accordiion from './Accordiion'
import RandomColor from './RandomColor.js'
import Accordiion from './projects/Accordiion.jsx'
// import Signup from './Signup.js'
// import BackgroundImage from './BackgroundImage.js'

const App = () => {
  return (
    <>
      <div className='h-screen w-full flex justify-center bg-gray-300' >
        <div className='' >
          {/* <BackgroundImage /> */}
          {/* <Signup /> */}
          <Accordiion />
          <RandomColor />
          

        </div>
      </div>
    </>
  )
}

export default App