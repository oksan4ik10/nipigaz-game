import { useForm} from 'react-hook-form';
import styles from './Task03.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { TouchEvent } from 'react';

interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task03(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const { register, getValues, setValue } = useForm();

    const clickFormTest = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    } 

    let targetDrag: HTMLElement | null = null; 
    let userCheck: HTMLElement | null = null; 
    let proc = 0;
    const dragStart = (e: TouchEvent) => {
        userCheck = e.target as HTMLElement;
        selectAnswer(false); 
        setValue('name1', "");
        proc = 0;
        targetDrag = userCheck.closest("label");
        if(targetDrag) targetDrag.style.setProperty("--var-width", `0%`);
    }
    const dragMove = (e: TouchEvent) =>{
        if(!userCheck) return;
        const target = e.target as HTMLElement;
        if(target !== userCheck) return;

        if(targetDrag){
            if(proc === 0) setValue('name1', userCheck.getAttribute("data-value"));
            proc += 1;
            if(proc > 100) proc = 100;
            targetDrag.style.setProperty("--var-width", `${proc}%`);
        }
        

    }
    const dragEnd =  (e: TouchEvent) => {
        if(!userCheck) return;
        const target = e.target as HTMLElement;
        if((target !== userCheck) || (proc < 50)) {
            setValue('name1', "");
            return;
        }
        if(targetDrag){
            targetDrag.style.setProperty("--var-width", `${100}%`);
            const {name1} = getValues();
            selectAnswer(true); 
            if(name1 === "2"){
                dispatch(setCheckAnswer("true"));
            } else {
                dispatch(setCheckAnswer("false"));
            }
        }

    }
    

  return (
    <>
                        <div className={styles.taskInfo}>
                        {checkClick && <OpacityTask/>}  
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Вычеркни выбранный ответ</h4>
                        <form className={styles.form} 
                        onChange={(e) => clickFormTest(e)} 
                        onTouchStart={(e) => dragStart(e)} 
                        onTouchMove = {(e) => dragMove(e)}
                        onTouchEnd={(e) => dragEnd(e)}>
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