import React, { useState} from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className='text-2xl bg-gray-300 dark:bg-gray-700 dark:text-gray-200 min-h-screen'>
        <Navbar></Navbar>
        <Routes></Routes>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App