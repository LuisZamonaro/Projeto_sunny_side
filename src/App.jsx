import { useState } from 'react'
import HeaderPage from '../src/HeaderPage'
import Footer from './Footer'
import Parte1 from './Parte1'
import Parte2 from './Parte2'
import Parte3 from './Parte3'
import './styles.css'

function App() {
  

  return (
    <div className="containerGeral">
        <HeaderPage/>
        <Parte1/>
        <Parte2/>
        <Parte3/>
        <Footer/>
    </div>
      
  )
}

export default App
