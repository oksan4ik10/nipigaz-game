import { useForm} from 'react-hook-form';
import styles from './Task32.module.css';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';

import { OpacityTask} from '../../../utils/OpacityTask/OpacityTask';

interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task32(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const { register, setValue } = useForm();

    let targetDrag: HTMLElement| null;
    let proc: number;

    const clickForm = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
    }

    const dragStart = (e: React.TouchEvent<HTMLLabelElement>) =>{
        const data = e.changedTouches[0].target as HTMLElement;
        proc = 0;
        targetDrag = data.closest("label");
        if (targetDrag) targetDrag.style.setProperty("--var-width", `0%`);
        
    }
    const dragMove = () =>{
        if(targetDrag){
            if(proc === 0) if(targetDrag) setValue("name1", targetDrag.id);
            proc += 1;
            if(proc > 100) proc = 100;
            targetDrag.style.setProperty("--var-width", `${proc}%`);
        }
        

    }

    const dragEnd = () =>{
        if(proc < 50) {
            setValue("name1", "");
            if (targetDrag) targetDrag.style.setProperty("--var-width", `0%`);
            return;
        }
        if(targetDrag){
            selectAnswer();
            targetDrag.style.setProperty("--var-width", `100%`);
            if(targetDrag.id === "2"){
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
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Подчеркни верный ответ</h4>
                        <form className={styles.form} onClick={(e) => clickForm(e)}>
                            <label className={styles.label} 
                            onTouchStart={(e) => dragStart(e)} 
                            onTouchMove = {() => dragMove()}
                            onTouchEnd={() => dragEnd()} id="1">
                                <input type="radio" className={styles.input} value={1} {...register("name1")}/>
                                <span>Юный инженер</span>
                            </label>
                            <label className={styles.label}
                            onTouchStart={(e) => dragStart(e)} 
                            onTouchMove = {() => dragMove()}
                            onTouchEnd={() => dragEnd()} id="2">
                                <input type="radio" className={styles.input} value={2} {...register("name1")}/>
                                <span>Молодой специалист</span>
                            </label>
                            <label className={styles.label} onTouchStart={(e) => dragStart(e)} 
                            onTouchMove = {() => dragMove()}
                            onTouchEnd={() => dragEnd()} id="3">
                                <input type="radio" className={styles.input} value={3} {...register("name1")}/>
                                <span>Начинающий эксперт</span>
                            </label>
                            <label className={styles.label}
                            onTouchStart={(e) => dragStart(e)} 
                            onTouchMove = {() => dragMove()}
                            onTouchEnd={() => dragEnd()} id="4">
                                <input type="radio" className={styles.input} value={4} {...register("name1")}/>
                                <span>Будущий профессионал</span>
                            </label>

                        </form>


                </div>
    </>
  )
}

export default Task32;