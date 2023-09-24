//import React, { useState } from 'react'
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import './App.css'



function App() {
  return (
    <>
      <div className="bg-black">
        <Sidenav />
        <Main />
        <Work />
      </div>
    </>
  )
}

export default App
