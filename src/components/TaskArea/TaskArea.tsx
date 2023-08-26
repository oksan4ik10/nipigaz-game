import './TaskArea.css'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setPoints } from '../../store/reducers/pointsReducer';
import Task00 from '../Tasks/Task00/Task00';
import { TStateAnswer } from '../../store/reducers/checkAnswerReducer';
import { useState } from 'react';

interface IProps {
    openFirework: () => void;
}

function TaskArea(props: IProps) {

    const {openFirework} = props;

    const [checkClick, setCheckClick] = useState(false);

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
        if(!startGame) return; //пока пользователь не выбрал ответ
        if(endGame) {

            //ПРОПИСАТЬ ЛОГИКУ ЗАКРЫТИЯ ОКОН

            return
        }
        //увеличить поинтсы на активную ячейку
        setUserAnswerTask(useAnswer);
        if(useAnswer === "true") {
            openFirework();
            dispatch(setPoints(activeQuestionPoints));
        }
        setStartGame(false);
        setEndGame(true);
        setCheckClick(true);
    }




  return (
    <>
        <div className={"main__task task " + (userAnswerTask === "wait" ? "" : userAnswerTask === "true"? "success" : "danger")}>
            <div className="task__wrapper">
                <Task00 selectAnswer = {selectAnswer} points={activeQuestionPoints} checkClick={checkClick}/>
                <button className="btn task__btn" onClick={answerUser}>{userAnswerTask === "wait" ? "ГОТОВО" : "ОГО"}</button>

            </div>
        </div>
    </>
  )
}

export default TaskArea