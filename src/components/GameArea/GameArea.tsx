import './GameArea.css'
import { useAppSelector, useAppDispatch } from '../../store/store'
import {saveActive} from '../../store/reducers/activeQuestionReducer'


interface IProps {
  openTask : 	() => void;
}

function GameArea(props:IProps) {
    const {arrQuestions} = useAppSelector((state)=>state.arrQuestionsReducer);
    

    const dispatch = useAppDispatch();
    const category = ["деятельность", "география", "цифры", "работа у нас" ];

    
    const sendDataTask = (data:number[])=>{
      if(arrQuestions[data[0]][data[1]] === 0) return;
      
      props.openTask();
      dispatch(saveActive(data));

      return;
    }

  return (
    <>
            <div className="main__game game">
                {arrQuestions.map((arr, arrIndex)=>{
                    return arr.map((item, index)=>{
                      if(index === 0){
                        return  <>
                        <div className="game__category" key={index*arrIndex}>{category[arrIndex]}</div>
                        <div className={"game__item" + (item === 0 ? " disable" : "")} key={arrIndex + " " + index} onClick={()=>sendDataTask([arrIndex, index])}>{(index + 1)*100}</div>
                        </>
                      }
                      return <div className={"game__item" + (item === 0 ? " disable" : "")} key={arrIndex + " " + index} onClick={()=>sendDataTask([arrIndex, index])}>{(index + 1)*100}</div>
                    })
                })}
        </div>
    </>
  )
}

export default GameArea
