import { useForm } from 'react-hook-form';
import styles from './Task22.module.css';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { TouchEvent, MouseEvent } from 'react';

import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { StrokeAnswer } from './StrokeAnswer';

import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

function Task22(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;
    const { register, getValues, setValue } = useForm();

    const clickFormTest = () => {
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

    let userCheck: HTMLElement | null = null;


    const onTouchStart = (e: TouchEvent | MouseEvent) => {
        const target = e.target as HTMLElement;
        userCheck = target.closest("label");
        document.body.style.overflow = "hidden";
    }

    const onTouchEnd = (e: TouchEvent | MouseEvent) => {
        document.body.style.overflow = "auto";
        if (!userCheck) return;
        const target = e.target as HTMLElement;
        const answer = target.closest("label");
        if (answer === userCheck) {
            setValue('name1', target.getAttribute("id")?.slice(3));
            clickFormTest();
        }
    }

    return (
        <>
            <div className={styles.taskInfo}>
                {checkClick && <OpacityTask />}
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Выбери календарь с верным годом</h4>
                <form className={styles.form}
                    onMouseDown={(e) => onTouchStart(e)}
                    onMouseUp={(e) => onTouchEnd(e)}
                    onChange={(clickFormTest)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <label className={styles.label + " " + styles.value1}>
                        <input type="radio" className={styles.input} value={1} {...register("name1")} />
                        <StrokeAnswer id={"svg1"} />
                    </label>
                    <label className={styles.label + " " + styles.value2} >
                        <input type="radio" className={styles.input} value={2} {...register("name1")} />
                        <StrokeAnswer id={"svg2"} />
                    </label>
                    <label className={styles.label + " " + styles.value3}>
                        <input type="radio" className={styles.input} value={3} {...register("name1")} />
                        <StrokeAnswer id={"svg3"} />
                    </label>
                    <label className={styles.label + " " + styles.value4}>
                        <input type="radio" className={styles.input} value={4} {...register("name1")} />
                        <StrokeAnswer id={"svg4"} />
                    </label>

                </form>


            </div>
        </>
    )
}

export default Task22;