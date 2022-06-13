import React, { useState} from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RRoutes from './components/RRoutes'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className='bg-gray-100 dark:bg-gray-700 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Navbar>
        <RRoutes></RRoutes>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App