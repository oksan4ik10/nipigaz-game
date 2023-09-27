import { useForm} from 'react-hook-form';
import styles from '../Task02/Task02.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

function Task30(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick, active} = props;
    const { register, getValues } = useForm();

    const clickFormTest = ()=>{
        const {name1, name2 , name3, name4} = getValues();
        if(!name1 && !name2 && !name3 && !name4) {
            selectAnswer(false);
            return;
        }
        selectAnswer(true);
        const answers = getValues();
        let str = "";
        for (const key in answers){
            if(answers[key]) str+=answers[key];           
        }
        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: str,
                correct: false
            }
        }
        
        if(name1 && name2 && name3 && name4){
            dispatch(setCheckAnswer("true"));
            answerUser.answerInfo.correct = true;
            dispatch(addAnswer(answerUser))
        } else {
            dispatch(setCheckAnswer("false"));
            dispatch(addAnswer(answerUser))
        }
    

    }

  return (
    <>
                        <div className={styles.taskInfo}>
                        {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Нажми на огоньки около верных вариантов ответа</h4>
                        <form className={styles.form} onChange={(clickFormTest)}>
                            <label className={styles.label}>
                                <input type="checkbox" className={styles.input} value={1} {...register("name1")}/>
                                Доступ в электронную библиотеку
                            </label>
                            <label className={styles.label}>
                                <input type="checkbox" className={styles.input} value={2} {...register("name2")}/>
                                Скидки на авиабилеты и гостиницы
                            </label>
                            <label className={styles.label}>
                                <input type="checkbox" className={styles.input} value={3} {...register("name3")}/>
                                Корпоративный спорт
                            </label>
                            <label className={styles.label}>
                                <input type="checkbox" className={styles.input} value={4} {...register("name4")}/>
                                Обучение за счет компании
                            </label>

                        </form>


                </div>
    </>
  )
}

export default Task30;