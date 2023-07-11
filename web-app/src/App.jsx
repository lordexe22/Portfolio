import { useState } from 'react'
import LetterAnimation1 from './components/LetterAnimation1/LetterAnimarion1.jsx'
import './styles/default.css'

function App() {

  const presentacion = 'Soy Walter, un futuro desarrollador frontend'

  return (
    <>
      <LetterAnimation1 string={presentacion}/>
    </>
  )
}

export default App
