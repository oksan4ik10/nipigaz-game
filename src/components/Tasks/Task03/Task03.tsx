import { useForm} from 'react-hook-form';
import styles from './Task03.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { TouchEvent } from 'react';

interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task03(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const { register, getValues, setValue } = useForm();

    const clickFormTest = ()=>{
        const {name1} = getValues();
        selectAnswer(); //пользователь выбрал хотя бы один вариант
        if(name1 === "2"){
            dispatch(setCheckAnswer("true"));
        } else {
            dispatch(setCheckAnswer("false"));
        }
    } 

    let userCheck: HTMLElement | null = null; 
    
    const onTouchStart = (e: TouchEvent) => {
        userCheck = e.target as HTMLElement;
    }
    const onTouchEnd =  (e: TouchEvent) => {
        if(!userCheck) return;
        const target = e.target as HTMLElement;
        if(target === userCheck) {
            setValue('name1', target.getAttribute("data-value"));
            clickFormTest();
        }
    }

  return (
    <>
                        <div className={styles.taskInfo}>
                        {checkClick && <OpacityTask/>}  
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Вычеркни выбранный ответ</h4>
                        <form className={styles.form} onChange={(clickFormTest)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                            <label className={styles.label} >
                                <input type="radio" className={styles.input} value={1} {...register("name1")}/>
                                <span data-value="1">Водоснабжение и канализация</span> 
                            </label>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={2} {...register("name1")}/>
                                <span data-value="2">Машиностроение и робототехника</span>
                            </label>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={3} {...register("name1")}/>
                                <span data-value="3">Генплан и транспорт</span>
                            </label>
                            <label className={styles.label}>
                                <input type="radio" className={styles.input} value={4} {...register("name1")}/>
                                <span data-value="4">Связь, безопасность и телекоммуникации</span>
                            </label>

                        </form>


                </div>
    </>
  )
}

export default Task03;