import './TaskArea.css'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setPoints } from '../../store/reducers/pointsReducer';
import { saveActive } from '../../store/reducers/activeQuestionReducer';

import { Task } from '../../utils/Task';

import { TStateAnswer } from '../../store/reducers/checkAnswerReducer';
import { useState } from 'react';
import { setCheckAnswer } from '../../store/reducers/checkAnswerReducer';
import { removePoints } from '../../store/reducers/arrQuestionsReducer';

import { questionAnswerText } from '../../utils/questionAnswerText';

interface IProps {
    openFirework: (data: boolean) => void;
    openTask: (data: boolean) => void;
    closePoints: () => void;
}

function TaskArea(props: IProps) {

    const {openFirework, openTask, closePoints} = props;

    const [checkClick, setCheckClick] = useState(false);



    const [taskEnd, setTaskEnd] = useState(false);

    const dispatch = useAppDispatch();

    const arrActiveQuestion = useAppSelector((state)=>state.activeQuestion).activeQuestion;
    const arrQuestions = useAppSelector((state)=>state.arrQuestionsReducer).arrQuestions;
    let activeQuestionPoints = 0;
    let answer = "Отличный результат!", question = "", sizeAnswer = "20px";
    if(arrActiveQuestion[0] !== 4) {
        activeQuestionPoints = arrQuestions[arrActiveQuestion[0]][arrActiveQuestion[1]];
        const data = questionAnswerText[arrActiveQuestion[0]][arrActiveQuestion[1]];
        question = data.question;
        answer = data.answer;
        sizeAnswer = data.sizeAnswer;
    }


    const [ fontSize, setFontSize ] = useState("15px");
    const styles = { "fontSize": fontSize };

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
            setFontSize("15px");
            openTask(false);
            //если все вопросы закончились
            if(arrQuestions.flat().filter((item)=>item===0).length === 2){
                dispatch(saveActive([4, 4]));
                setFontSize("20px");
                setCheckClick(true);
                closePoints();
                setTaskEnd(true);
                openTask(true);
                openFirework(true);
                return
            }

            return
        }
        if(!startGame) return; //пока пользователь не выбрал ответ
        setUserAnswerTask(useAnswer);
        if(useAnswer === "true") {
            openFirework(true);
            dispatch(setPoints(activeQuestionPoints));
        }
   
        
        dispatch(removePoints(arrActiveQuestion));
        setStartGame(false);
        setEndGame(true);
        setCheckClick(true);
        setFontSize(sizeAnswer)
    }




  return (
    <>
        <div className={"main__task task " + (userAnswerTask === "wait" ? "" : userAnswerTask === "true"? "success" : "danger") + (taskEnd ? "end" : "")}>
            <div className="task__wrapper">
                <div className="task__head">
                    <div className="task__heading">
                        <div className="task__points">{(arrActiveQuestion[1] + 1) * 100}</div>
                        <h3 className={"task__title " + (checkClick ? "answer" : "")} style={styles}>{!checkClick ? question:answer}</h3>
                    </div>
                </div>

                <Task selectAnswer = {selectAnswer} checkClick={checkClick}/>
                <button className="btn task__btn" onClick={answerUser}>{userAnswerTask === "wait" ? "ГОТОВО" : "ОГО"}</button>


            </div>
        </div>
    </>
  )
}

export default TaskArea