import { useForm } from 'react-hook-form';
import styles from './Task03.module.css';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';


function Task03(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;
    const { register, getValues } = useForm();

    const clickFormTest = (e: React.FormEvent<HTMLFormElement>) => {
        const target = e.target as HTMLElement;
        if (target) {
            const label = target.closest("label");
            if (label) {
                label.style.setProperty("--var-width", `100%`);
                const { name1 } = getValues();
                selectAnswer(true);
                const answerUser: IAnswerUser = {
                    arrAnswer: active,
                    answerInfo: {
                        answer: name1,
                        correct: false
                    }
                }
                if (name1 === "2") {
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
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Вычеркни верный ответ, кликнув на него</h4>
                <form className={styles.form}
                    onChange={(e) => clickFormTest(e)}
                >
                    <label className={styles.label}>
                        <input type="radio" className={styles.input} value={1} {...register("name1")} />
                        <span data-value="1">Водоснабжение и канализация</span>
                    </label>
                    <label className={styles.label}>
                        <input type="radio" className={styles.input} value={2} {...register("name1")} />
                        <span data-value="2">Машиностроение и робототехника</span>
                    </label>
                    <label className={styles.label}>
                        <input type="radio" className={styles.input} value={3} {...register("name1")} />
                        <span data-value="3">Генплан и транспорт</span>
                    </label>
                    <label className={styles.label}>
                        <input type="radio" className={styles.input} value={4} {...register("name1")} />
                        <span data-value="4">Связь, безопасность и телекоммуникации</span>
                    </label>

                </form>


            </div>
        </>
    )
}

export default Task03;