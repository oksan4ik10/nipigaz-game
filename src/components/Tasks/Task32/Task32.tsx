import { useForm} from 'react-hook-form';
import { TouchEvent, MouseEvent, useRef} from 'react';
import styles from './Task32.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';

import { OpacityTask} from '../../../utils/OpacityTask/OpacityTask';

interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task32(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const { register, setValue } = useForm();

    let targetDrag: HTMLElement| null;
    let proc: number;

    const clickForm = (e: MouseEvent) => {
        e.preventDefault();
    }
    const startClick = useRef(false);

    const dragStart = (e: TouchEvent) =>{
        const data = e.changedTouches[0].target as HTMLElement;
        start(data);
    }
    const mouseStart = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        startClick.current = true;
        start(target);
    }
    const start = (target: HTMLElement) => {
        proc = 0;
        targetDrag = target.closest("label");
        if (targetDrag) targetDrag.style.setProperty("--var-width", `0%`);
    }
    const dragMove = () =>{
        move();
    }
    const mouseMove = () => {
        if(!startClick.current) return;
        move();        
    }
    const move = () => {
        if(targetDrag){
            if(proc === 0) if(targetDrag) setValue("name1", targetDrag.id);
            proc += 3;
            if(proc > 100) proc = 100;
            targetDrag.style.setProperty("--var-width", `${proc}%`);
        }
    }

    const dragEnd = () =>{
        end();
    }
    const end = () => {
        if(proc < 5) {
            setValue("name1", "");
            if (targetDrag) targetDrag.style.setProperty("--var-width", `0%`);
            selectAnswer(false);
            return;
        }
        if(targetDrag){
            selectAnswer(true);
            targetDrag.style.setProperty("--var-width", `100%`);
            if(targetDrag.id === "2"){
                dispatch(setCheckAnswer("true"));
            } else {
                dispatch(setCheckAnswer("false"));
            }
        }
    }


    const mouseUp = () => {
        startClick.current = false;
        end();
        
    }

  return (
    <>
                        <div className={styles.taskInfo}>
                        {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Подчеркни верный ответ</h4>
                        <form className={styles.form} onClick={
                            (e) => clickForm(e)} 
                            onMouseDown={(e) => mouseStart(e)}
                            onMouseMove={() => mouseMove()}
                            onMouseUp={() => mouseUp()}
                            onTouchStart={(e) => dragStart(e)} 
                            onTouchMove = {() => dragMove()}
                            onTouchEnd={() => dragEnd()}>
                            <label className={styles.label} 
                             id="1">
                                <input type="radio" className={styles.input} value={1} {...register("name1")}/>
                                <span>Юный инженер</span>
                            </label>
                            <label className={styles.label}
                            id="2">
                                <input type="radio" className={styles.input} value={2} {...register("name1")}/>
                                <span>Молодой специалист</span>
                            </label>
                            <label className={styles.label}  id="3">
                                <input type="radio" className={styles.input} value={3} {...register("name1")}/>
                                <span>Начинающий эксперт</span>
                            </label>
                            <label className={styles.label} id="4">
                                <input type="radio" className={styles.input} value={4} {...register("name1")}/>
                                <span>Будущий профессионал</span>
                            </label>

                        </form>


                </div>
    </>
  )
}

export default Task32;