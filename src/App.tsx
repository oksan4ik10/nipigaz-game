// import { useState } from 'react'
import './App.css'
import Orientation from './components/Orientation/Orientation'
import GameArea from './components/GameArea/GameArea'
import Points from './components/Points/Points'

function App() {

  return (
    <>

      <Orientation/>
      <main className='main'>
        <GameArea></GameArea>
        <Points></Points>

      </main>
    </>
  )
}

export default App
