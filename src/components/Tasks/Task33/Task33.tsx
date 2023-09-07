import styles from "./Task33.module.css"
import { useEffect, useRef } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import imgUrlCup from "../../../assets/images/cup.svg"
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task33(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const ref = useRef<HTMLDivElement>(null);
    const refCheck1 = useRef<HTMLDivElement>(null);
    const refCheck2 = useRef<HTMLDivElement>(null);
    const refCheck3 = useRef<HTMLDivElement>(null);
    const refCheck4 = useRef<HTMLDivElement>(null);
    let stateX = 0, stateY = 0;
    let targetDrag: HTMLElement;

    const arrAnswers =  [
        {"top": 0, "left": 0},
        {"top": 0, "left": 0},
        {"top": 0, "left": 0},
        {"top": 0, "left": 0}
    ];

    useEffect(()=> {
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
            stateX = data.left;
            stateY = data.top;
        }
        if(refCheck1.current){
            const dataCheck1 = refCheck1.current.getBoundingClientRect();
            arrAnswers[0].top = dataCheck1.top;
            arrAnswers[0].left = dataCheck1.left;
        }
        if(refCheck2.current){
            const dataCheck1 = refCheck2.current.getBoundingClientRect();
            arrAnswers[1].top = dataCheck1.top;
            arrAnswers[1].left = dataCheck1.left;
        }
        if(refCheck3.current){
            const dataCheck1 = refCheck3.current.getBoundingClientRect();
            arrAnswers[2].top = dataCheck1.top;
            arrAnswers[2].left = dataCheck1.left;
        }
        if(refCheck4.current){
            const dataCheck1 = refCheck4.current.getBoundingClientRect();
            arrAnswers[3].top = dataCheck1.top;
            arrAnswers[3].left = dataCheck1.left;
        }
    })

    const arrUsersAnswer = useRef([false, false, false, false]);

    const dragStart = (e: React.TouchEvent<HTMLImageElement>) => {
        const data = e.changedTouches[0]; 
        targetDrag = e.changedTouches[0].target as HTMLElement; 
        const index = targetDrag.getAttribute("data-index");
        if(index){
            arrUsersAnswer.current = arrUsersAnswer.current.map((item, j)=> j === +index ? false : item);
        }
        const y = data.pageY  - stateY - (targetDrag.offsetHeight / 2);
        const x = data.pageX - stateX - (targetDrag.offsetWidth / 2);
        targetDrag.style.position = "absolute";
        targetDrag.style.zIndex = "1";
        targetDrag.style.left = x + "px";
        targetDrag.style.top = y + "px";
    }
    const dragMove = (e: React.TouchEvent<HTMLImageElement>) => {
        const data = e.changedTouches[0]; 
        targetDrag = e.changedTouches[0].target as HTMLElement; 
        const y = data.pageY  - stateY - (targetDrag.offsetHeight / 2);
        const x = data.pageX - stateX - (targetDrag.offsetWidth / 2);
        targetDrag.style.position = "absolute";
        targetDrag.style.zIndex = "1";
        if((x > 169) &&  (x < 254)) targetDrag.style.left = x + "px";
    
        if( (y > 0) && (y < 112)) targetDrag.style.top = y + "px";
    }
    const dragEnd = (e: React.TouchEvent<HTMLImageElement>) => {
        e.preventDefault();
        if(!targetDrag) return;
        const dataTarget = targetDrag.getBoundingClientRect();
        const findIndex = arrAnswers.findIndex((item) => (
            (((item.top - 5) <= dataTarget.top) && ((item.top + 5) >= dataTarget.top)) 
            && ((item.left + 5) >= dataTarget.left)
        ))
        if(findIndex === -1) {
            targetDrag.style.position = "static";
            selectAnswer(false);
            return;
        }
        targetDrag.setAttribute("data-index", findIndex + "");
        arrUsersAnswer.current = arrUsersAnswer.current.map((item, index) => index === findIndex ? true : item);
        let checkAnswers = 0;
        for (let index = 0; index < arrUsersAnswer.current.length; index++) {
            const element = arrUsersAnswer.current[index];
            if(element) checkAnswers++;
            if(checkAnswers === 3){
                selectAnswer(true);
                if ((index === 3)&& element) dispatch(setCheckAnswer("false"));
                else dispatch(setCheckAnswer("true"));
            } 
        }

    }

  return (
    <>
                <div className={styles.taskInfo}>
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетяни кубок к выбранным премиям</h4>
                        <div className={styles.task} ref={ref}>
                            <div className={styles.taskAnswer}>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>Headhunter</span>
                                </div>
                                <div className={styles.taskCheck}  ref = {refCheck1}></div>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>Forbes</span>
                                </div>
                                <div className={styles.taskCheck} ref = {refCheck2}></div>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>FutureToday</span>
                                </div>
                                <div className={styles.taskCheck} ref = {refCheck3}></div>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>IMDB</span>
                                </div>
                                <div className={styles.taskCheck} ref = {refCheck4}></div>
                            </div>
                            <div className={styles.taskCups}>
                                <div>
                                <img src= {imgUrlCup} alt="cup" className="taskCup" 
                                onTouchStart={(e) => dragStart(e)}
                                onTouchMove={(e) => dragMove(e)}
                                onTouchEnd = {(e) => dragEnd(e)}
                                />
                                </div>

                                <div>
                                    <img src= {imgUrlCup} alt="cup" className="taskCup" 
                                    onTouchStart={(e) => dragStart(e)}
                                    onTouchMove={(e) => dragMove(e)}
                                    onTouchEnd = {(e) => dragEnd(e)}
                                    />
                                </div>

                                <div>
                                <img src= {imgUrlCup} alt="cup" className="taskCup" 
                                onTouchStart={(e) => dragStart(e)}
                                onTouchMove={(e) => dragMove(e)}
                                onTouchEnd = {(e) => dragEnd(e)}
                                />
                                </div>


                            </div>

                        </div>


                </div>
            </>
  )
}

export default Task33;