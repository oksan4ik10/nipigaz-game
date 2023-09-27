import './TaskArea.css'
import { useAppSelector } from '../../store/store';
import { TaskAnswer } from '../../utils/TaskAnswer';

import { questionAnswerText } from '../../utils/questionAnswerText';
import { Lamp } from './Lamp';
interface IProps {
    openAnswer: (data: boolean) => void;
}

function TaskAreaAnswer(props: IProps) {

    const {openAnswer} = props;

    const arrActiveQuestion = useAppSelector((state)=>state.activeQuestion).activeQuestion;
    const answerUser = useAppSelector((state) => state.answersReducer).arrAnswers;
    const {correct} = answerUser[arrActiveQuestion[0]][arrActiveQuestion[1]];
    
    const data = questionAnswerText[arrActiveQuestion[0]][arrActiveQuestion[1]];
    const answerText = data.answer;
    const sizeAnswer = data.sizeAnswer;
    const paddingAnswer = data.paddingAnswer;
    const paddingAnswerBtm = data.paddingAnswerBtm ? data.paddingAnswerBtm : "26px";


    const styles = { "fontSize": sizeAnswer };
    const stylesPadding = {"paddingRight": paddingAnswer, "paddingBottom": paddingAnswerBtm};


    const closeTask = () => {
        openAnswer(false);
    }


  return (
    <>
        <div className={"main__task task " + (correct? "success" : "danger")}>
            <div className="task__wrapper">
                <div className={ "task__head-answer"}>
                    <div className="task__heading" style = {stylesPadding}>
                        <div className="task__points">{<Lamp check = {correct}/>}</div>
                        <h3 className={"task__title " + "answer"} style={styles} dangerouslySetInnerHTML={{__html: answerText}}></h3>
                    </div>
                </div>

                <TaskAnswer correct={correct}/>
                <button className="btn task__btn" onClick={closeTask}>ОГО</button>


            </div>
        </div>
    </>
  )
}

export default TaskAreaAnswer