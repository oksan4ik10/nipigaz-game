import './GameArea.css'
import { useAppSelector, useAppDispatch } from '../../store/store'
import {saveActive} from '../../store/reducers/activeQuestionReducer'
import { Fragment } from 'react';


interface IProps {
  openTask : 	(data: boolean) => void;
  openAnswer: (data: boolean) => void;
}

function GameArea(props:IProps) {
    const {arrQuestions} = useAppSelector((state)=>state.arrQuestionsReducer);
    
    const {openAnswer, openTask} = props;
    

    const dispatch = useAppDispatch();
    const category = ["деятельность", "география", "цифры", "работа у нас" ];
    
    const sendDataTask = (data:number[])=>{
      dispatch(saveActive(data));
      if(arrQuestions[data[0]][data[1]] === 0) {
        openAnswer(true);
        return;
      }
      
      openTask(true);
    }

  return (
    <>
            <div className="main__game game">
                {arrQuestions.map((arr, arrIndex)=>{
                    return arr.map((item, index)=>{
                      if(index === 0){
                        return  <Fragment key={arrIndex + " " + index} >
                        <div className="game__category" >{category[arrIndex]}</div>
                        <div className={"game__item" + (item === 0 ? " disable" : "")} onClick={()=>sendDataTask([arrIndex, index])}>{(index + 1)*100}</div>
                        </Fragment>
                      }
                      return <div className={"game__item" + (item === 0 ? " disable" : "")} key={arrIndex + " " + index} onClick={()=>sendDataTask([arrIndex, index])}>{(index + 1)*100}</div>
                    })
                })}
        </div>
    </>
  )
}

export default GameArea
