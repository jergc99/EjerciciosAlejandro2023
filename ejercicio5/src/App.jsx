import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponenteDos from './components/ComponenteDos'
import ComponenteUno from './components/ComponenteUno'

function App() {
  return(
    <>
      <ComponenteUno telefono={999}></ComponenteUno>
      <ComponenteDos telefono = "666"></ComponenteDos>
    </>
  )
}

export default App
