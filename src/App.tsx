// import { useState } from 'react'
import './App.css'
import Orientation from './components/Orientation/Orientation'
import GameArea from './components/GameArea/GameArea'
import Points from './components/Points/Points'
import { useState } from 'react'
import TaskArea from './components/TaskArea/TaskArea'

function App() {
  const [checkModal, setCheckModal] = useState(false);

  const openModalTask = ()=>{
    checkModal ? setCheckModal(false) : setCheckModal(true);
  }



  return (
    <>

      <Orientation/>
      <main className='main'>
        <GameArea openTask = {openModalTask} />
        <Points/>
        {checkModal && <TaskArea />}
        <div className={"blur " + (checkModal ? "active" : "")}></div>

      </main>
    </>
  )
}

export default App
