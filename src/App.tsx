import { useState } from 'react'
import './App.css'
import Orientation from './components/Orientation/Orientation'
import GameArea from './components/GameArea/GameArea'
import Points from './components/Points/Points'
import TaskArea from './components/TaskArea/TaskArea'
import Firework from './components/Firework/Firework'

function App() {
  const [checkModal, setCheckModal] = useState(false);
  const [checkFirework, setCheckFirework] = useState(false);

  const openModalTask = ()=>{
    checkModal ? setCheckModal(false) : setCheckModal(true);
  }

  const openFirework = ()=>{
    checkFirework ? setCheckFirework(false) : setCheckFirework(true);
  }
  return (
    <>

      <Orientation/>
      <main className='main'>
        <GameArea openTask = {openModalTask} />
        <Points/>
        {checkModal && <TaskArea openFirework = {openFirework}/>}
        {checkFirework && <Firework/>}
        <div className={"blur " + (checkModal ? "active" : "")}></div>
      </main>
    </>
  )
}

export default App
