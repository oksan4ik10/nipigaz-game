import './GameArea.css'
import { useAppSelector } from '../../store/store'

interface IProps {
  openTask : 	()=>void
}

function GameArea(props:IProps) {
    const {arrQuestions} = useAppSelector((state)=>state.arrQuestionsReducer);
    const category = ["деятельность", "география", "цифры", "работа у нас" ];
    
    

  return (
    <>
            <div className="main__game game">
                {arrQuestions.map((arr, arrIndex)=>{
                    return arr.map((item, index)=>{
                      if(index === 0){
                        return  <>
                        <div className="game__category" key={index*arrIndex}>{category[arrIndex]}</div>
                        <div className={"game__item" + (item === 0 ? " disable" : "")} key={arrIndex + " " + index} onClick={props.openTask}>{(index + 1)*100}</div>
                        </>
                      }
                      return<div className={"game__item" + (item === 0 ? " disable" : "")} key={arrIndex + " " + index} onClick={props.openTask}>{(index + 1)*100}</div>
                    })
                })}
        </div>
    </>
  )
}

export default GameArea
