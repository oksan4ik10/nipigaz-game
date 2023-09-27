import { useForm} from 'react-hook-form';
import styles from './Task03.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { TouchEvent, MouseEvent, useRef } from 'react';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';


function Task03(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick, active} = props;
    const { register, getValues, setValue } = useForm();

    const clickFormTest = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    } 

    let targetDrag: HTMLElement | null = null; 
    let userCheck: HTMLElement | null = null; 
    let proc = 0;
    const startClick = useRef(false);
    const dragStart = (e: TouchEvent) => {
        userCheck = e.target as HTMLElement;
        document.body.style.overflow = "hidden";
        start();
    }
    const mouseStart = (e: MouseEvent) => {
        userCheck = e.target as HTMLElement;
        startClick.current = true;
        start();
        
    }
    const start = () => {
        setValue('name1', "");
        proc = 0;
        if(userCheck) targetDrag = userCheck.closest("label");
        if(targetDrag) targetDrag.style.setProperty("--var-width", `0%`);
    }
    const dragMove = (e: TouchEvent) =>{
        const target = e.target as HTMLElement;
        move(target);
    }
    const mouseMove = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        move(target);       
    }

    const move = (target: HTMLElement) => {
        if(!startClick.current) return;
        if(!targetDrag) return;
        if(!userCheck) return;
        if(target !== userCheck) return;
        if(targetDrag){
            if(proc === 0) setValue('name1', userCheck.getAttribute("data-value"));
            proc += 3;
            if(proc > 100) proc = 100;
            targetDrag.style.setProperty("--var-width", `${proc}%`);
        }
    }
    const dragEnd =  (e: TouchEvent) => {
        document.body.style.overflow = "auto";
        const target = e.target as HTMLElement;
        end(target);     
    }
 

    const mouseUp = (e: MouseEvent) => {
        if(!startClick.current) return;
        const target = e.target as HTMLElement;
        end(target);     
        startClick.current = false;
    }
 

    const end = (target: HTMLElement) => {
        if(!userCheck) return;
        if((target.closest("label") !== userCheck.closest("label")) || (proc < 5)) {
            setValue('name1', "");
            selectAnswer(false); 
            return;
        }
        
        
        if(targetDrag){
            targetDrag.style.setProperty("--var-width", `${100}%`);
            const {name1} = getValues();
            selectAnswer(true); 
            const answerUser: IAnswerUser = {
                arrAnswer: active,
                answerInfo: {
                    answer: name1,
                    correct: false
                }
            }
            if(name1 === "2"){
                dispatch(setCheckAnswer("true"));
                answerUser.answerInfo.correct = true;
                dispatch(addAnswer(answerUser))
            } else {
                dispatch(setCheckAnswer("false"));
                dispatch(addAnswer(answerUser))
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
                        >
                            <label className={styles.label}
                        onMouseDown={(e) => mouseStart(e)}
                        onMouseMove={(e) => mouseMove(e)}
                        onMouseLeave={(e) => mouseUp(e)}
                        onTouchStart={(e) => dragStart(e)} 
                        onTouchMove = {(e) => dragMove(e)}
                        onTouchEnd={(e) => dragEnd(e)}>
                                <input type="radio" className={styles.input} value={1} {...register("name1")}/>
                                <span data-value="1">Водоснабжение и канализация</span> 
                            </label>
                            <label className={styles.label}
                        onMouseDown={(e) => mouseStart(e)}
                        onMouseMove={(e) => mouseMove(e)}
                        onMouseLeave={(e) => mouseUp(e)}
                        onTouchStart={(e) => dragStart(e)} 
                        onTouchMove = {(e) => dragMove(e)}
                        onTouchEnd={(e) => dragEnd(e)}>
                                <input type="radio" className={styles.input} value={2} {...register("name1")}/>
                                <span data-value="2">Машиностроение и робототехника</span>
                            </label>
                            <label className={styles.label}                         
                            onMouseDown={(e) => mouseStart(e)}
                        onMouseMove={(e) => mouseMove(e)}
                        onMouseLeave={(e) => mouseUp(e)}
                        onTouchStart={(e) => dragStart(e)} 
                        onTouchMove = {(e) => dragMove(e)}
                        onTouchEnd={(e) => dragEnd(e)}>
                                <input type="radio" className={styles.input} value={3} {...register("name1")}/>
                                <span data-value="3">Генплан и транспорт</span>
                            </label>
                            <label className={styles.label}                         
                        onMouseDown={(e) => mouseStart(e)}
                        onMouseMove={(e) => mouseMove(e)}
                        onMouseLeave={(e) => mouseUp(e)}
                        onTouchStart={(e) => dragStart(e)} 
                        onTouchMove = {(e) => dragMove(e)}
                        onTouchEnd={(e) => dragEnd(e)}>
                                <input type="radio" className={styles.input} value={4} {...register("name1")}/>
                                <span data-value="4">Связь, безопасность и телекоммуникации</span>
                            </label>

                        </form>


                </div>
    </>
  )
}

export default Task03;