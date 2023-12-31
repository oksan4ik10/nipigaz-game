import styles from "./Task23.module.css";
import { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { Answer } from './Answer';
import imgUrl from "../../../assets/images/code.png";
import imgUrlLast from "../../../assets/images/code-last.png";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

function Task23(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;

    const [answer1, setAnswer1] = useState(0);
    const [startTask, setStartTask] = useState(false);
    const checkAnswer = () => {
        if (!startTask) {
            selectAnswer(true);
            setStartTask(true);
        }
        if (ans1 === -1) ans1 = answer1;
        if (ans2 === -1) ans2 = answer2;
        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: (ans1 + "") + (ans2 + ""),
                correct: false
            }
        }

        if (ans1 === 3 && ans2 === 7) {
            dispatch(setCheckAnswer("true"));

            answerUser.answerInfo.correct = true;
            dispatch(addAnswer(answerUser))
        } else {
            dispatch(setCheckAnswer("false"));
            dispatch(addAnswer(answerUser))
        }
    }
    let ans1 = -1, ans2 = -1;
    const updateAnswer1 = (data: number) => {
        ans1 = data;
        setAnswer1(data);
        checkAnswer();
    }
    const [answer2, setAnswer2] = useState(0);
    const updateAnswer2 = (data: number) => {
        ans2 = data;
        setAnswer2(data);
        checkAnswer();
    }


    return (
        <>
            <div className={styles.taskInfo}>
                {checkClick && <OpacityTask />}
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Собери верную комбинацию на кодовом замке, нажимая на стрелки</h4>
                <div className={styles.task}>
                    <img src={imgUrl} alt="code" />
                    <div className={styles.number}>
                        2
                    </div>
                    <Answer click={updateAnswer1} value={answer1} className={styles.number} />
                    <Answer click={updateAnswer2} value={answer2} className={styles.number} />

                    <img src={imgUrlLast} alt="code" className={styles.code} />
                    <p className={styles.text}>МЛРД М<span>3</span></p>
                </div>


            </div>
        </>
    )
}

export default Task23;