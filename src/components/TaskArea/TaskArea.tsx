import './TaskArea.css'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setPoints } from '../../store/reducers/pointsReducer';
import Task00 from '../Tasks/Task00/Task00';
import TaskEnd from '../Tasks/TaskEnd/TaskEnd';
import { TStateAnswer } from '../../store/reducers/checkAnswerReducer';
import { useState } from 'react';
import { setCheckAnswer } from '../../store/reducers/checkAnswerReducer';
import { removePoints } from '../../store/reducers/arrQuestionsReducer';

interface IProps {
    openFirework: (data: boolean) => void;
    openTask: () => void;
}

function TaskArea(props: IProps) {

    const {openFirework, openTask} = props;

    const [checkClick, setCheckClick] = useState(false);

    const [taskEnd, setTaskEnd] = useState(false);

    const dispatch = useAppDispatch();

    const arrActiveQuestion = useAppSelector((state)=>state.activeQuestion).activeQuestion;
    const arrQuestions = useAppSelector((state)=>state.arrQuestionsReducer).arrQuestions;
    const activeQuestionPoints = arrQuestions[arrActiveQuestion[0]][arrActiveQuestion[1]];

    //ответ пользователя
    const useAnswer = useAppSelector((state)=>state.checkAnswerReducer).checkAnswer;
    const [userAnswerTask, setUserAnswerTask] = useState<TStateAnswer>("wait");
    
    //передаем в таски - пока пользователь не сделал выбор кнопка готово не активна
    const [startGame, setStartGame] = useState(false);
    const selectAnswer = () => {
        setStartGame(true);
    }

    const [endGame, setEndGame] = useState(false);

    //логика работы кнопки готово
    const answerUser = () =>{
        if(endGame) {
            setCheckAnswer("wait");
            setUserAnswerTask("wait");
            openFirework(false);
            setCheckClick(false);

        
            

            //если все вопросы закончились
            if(arrQuestions.flat().filter((item)=>item===0).length === 3){
                setTaskEnd(true);
                return
            }


            openTask();
            console.log(arrQuestions);

        
            return
        }
        if(!startGame) return; //пока пользователь не выбрал ответ
        //увеличить поинтсы на активную ячейку
        setUserAnswerTask(useAnswer);
        if(useAnswer === "true") {
            openFirework(true);
            dispatch(setPoints(activeQuestionPoints));
        }
   
        
        dispatch(removePoints(arrActiveQuestion));
        setStartGame(false);
        setEndGame(true);
        setCheckClick(true);
    }




  return (
    <>
        <div className={"main__task task " + (userAnswerTask === "wait" ? "" : userAnswerTask === "true"? "success" : "danger")}>
            <div className="task__wrapper">
                <Task00 selectAnswer = {selectAnswer} checkClick={checkClick}/>
                {taskEnd && <TaskEnd/>}
                <button className="btn task__btn" onClick={answerUser}>{userAnswerTask === "wait" ? "ГОТОВО" : "ОГО"}</button>


            </div>
        </div>
    </>
  )
}

export default TaskArea