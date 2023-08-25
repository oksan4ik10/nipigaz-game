// import { useState } from 'react'
import './App.css'
import Orientation from './components/Orientation/Orientation'
import GameArea from './components/GameArea/GameArea'
import Points from './components/Points/Points'
import { useState } from 'react'
import { useAppSelector } from './store/store'
import TaskArea from './components/TaskArea/TaskArea'

function App() {
  const [checkModal, setCheckModal] = useState(false);
  const {points} = useAppSelector((state)=>state.points);


  const [pointsStart, setCheckPoints] = useState(points);
  
  const openModalTask = ()=>{
    checkModal ? setCheckModal(false) : setCheckModal(true);
  }

  const changePoints = (data: number) =>{
    setCheckPoints(data)
  }

  return (
    <>

      <Orientation/>
      <main className='main'>
        <GameArea openTask = {openModalTask} />
        <Points val = {pointsStart}/>
        {checkModal && <TaskArea changePoints = {changePoints} />}
        <div className={"blur " + (checkModal ? "active" : "")}></div>

      </main>
    </>
  )
}

export default App
