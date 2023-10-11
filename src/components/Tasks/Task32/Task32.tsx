import { useForm } from 'react-hook-form';
import { MouseEvent } from 'react';
import styles from './Task32.module.css';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';

import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

function Task32(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;
    const { register } = useForm();

    const clickForm = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
            const label = target.closest("label");
            if (label) {
                label.style.setProperty("--var-width", `100%`);
                selectAnswer(true);
                const answerUser: IAnswerUser = {
                    arrAnswer: active,
                    answerInfo: {
                        answer: label.id,
                        correct: false
                    }
                }
                if (label.id === "2") {
                    dispatch(setCheckAnswer("true"));
                    answerUser.answerInfo.correct = true;
                    dispatch(addAnswer(answerUser))
                } else {
                    dispatch(setCheckAnswer("false"));
                    dispatch(addAnswer(answerUser))
                }
            }

        }


    }


    return (
        <>
            <div className={styles.taskInfo}>
                {checkClick && <OpacityTask />}
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Подчеркни верный ответ, кликнув на него</h4>
                <form className={styles.form} onClick={
                    (e) => clickForm(e)}
                >
                    <label className={styles.label} id="1">
                        <input type="radio" className={styles.input} value={1} {...register("name1")} />
                        <span>Юный инженер</span>
                    </label>
                    <label className={styles.label} id="2">
                        <input type="radio" className={styles.input} value={2} {...register("name1")} />
                        <span>Молодой специалист</span>
                    </label>
                    <label className={styles.label} id="3">
                        <input type="radio" className={styles.input} value={3} {...register("name1")} />
                        <span>Начинающий эксперт</span>
                    </label>
                    <label className={styles.label} id="4">
                        <input type="radio" className={styles.input} value={4} {...register("name1")} />
                        <span>Будущий профессионал</span>
                    </label>

                </form>


            </div>
        </>
    )
}

export default Task32;