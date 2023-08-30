import { useForm} from 'react-hook-form';
import styles from './Task03.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';

interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task03(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const { register, getValues } = useForm();

    const clickFormTest = ()=>{
        const {name1} = getValues();
        selectAnswer(); //пользователь выбрал хотя бы один вариант
        if(name1 === "2"){
            dispatch(setCheckAnswer("true"));
        } else {
            dispatch(setCheckAnswer("false"));
        }
    }

  return (
    <>
                        <div className={styles.taskInfo}>
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Вычеркни выбранный ответ</h4>
                        <form className={styles.form} onChange={(clickFormTest)}>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={1} {...register("name1")}/>
                                <span>Водоснабжение и канализация</span>
                            </label>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={2} {...register("name1")}/>
                                <span>Машиностроение и робототехника</span>
                            </label>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={3} {...register("name1")}/>
                                <span>Генплан и транспорт</span>
                            </label>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={4} {...register("name1")}/>
                                <span>Связь, безопасность и телекоммуникации</span>
                            </label>

                        </form>


                </div>
    </>
  )
}

export default Task03;