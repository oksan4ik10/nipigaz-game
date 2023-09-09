import styles from "./Task11.module.css";
import {useRef, useEffect, useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task11(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const answerXY =  [
        {"top": 0, "left": 0},
        {"top": 0, "left": 0},
        {"top": 0, "left": 0},
        {"top": 0, "left": 0}
    ];
    const ref = useRef<HTMLDivElement>(null);
    const refCheck1 = useRef<HTMLSpanElement>(null);
    const refCheck2 = useRef<HTMLSpanElement>(null);
    const refCheck3 = useRef<HTMLSpanElement>(null);
    const refCheck4 = useRef<HTMLSpanElement>(null);

    useEffect(()=> {
        if(ref.current){
            const data = ref.current.getBoundingClientRect();
              stateX = data.left;
              stateY = data.top;
              if(refCheck1.current){
                const dataCheck1 = refCheck1.current.getBoundingClientRect();
                answerXY[0].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                answerXY[0].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
            }
            if(refCheck2.current){
                const dataCheck1 = refCheck2.current.getBoundingClientRect();
                answerXY[1].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                answerXY[1].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
            }
            if(refCheck3.current){
                const dataCheck1 = refCheck3.current.getBoundingClientRect();
                answerXY[2].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                answerXY[2].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
            }
            if(refCheck4.current){
                const dataCheck1 = refCheck4.current.getBoundingClientRect();
                answerXY[3].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                answerXY[3].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
            }
          }

        
    })


    const [arrAnswers, setArrAnswers] = useState([
        {name: "Санкт-Петербург", check: false},
        {name: "Москва" , check: false},
        {name: "Ростов-на-Дону", check: false},
        {name: "Краснодар" , check: false},
    ])
    const checkBg = useRef("transparent");
    const [answer, setAnswer] = useState(false);
    
    let stateX = 0, stateY = 0, width = 0;
    let targetDrag: SVGSVGElement | null;
    const dragStart = (e: React.TouchEvent<SVGSVGElement>) => {
        
        const data = e.changedTouches[0]; 
        const t = e.changedTouches[0].target as HTMLElement;
        targetDrag = t.closest("svg");
        checkBg.current = "transparent";
        if(targetDrag){
            width = targetDrag.width.animVal.value;
            const y = data.pageY  - stateY;
            const x = data.pageX - stateX - (width / 2);
            targetDrag.style.position = "absolute";
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px"; 
        }
        

    }
    const dragMove = (e: React.TouchEvent<SVGSVGElement>) => {
        const data = e.changedTouches[0]; 
        const y = data.pageY  - stateY;
        const x = data.pageX - stateX - (width / 2);
        checkBg.current = "transparent";
        if(targetDrag){
            if((x > 52) &&  (x < 223)) targetDrag.style.left = x + "px";
            if( (y > -15) && (y < 112)) targetDrag.style.top = y + "px";
        }


    }
    const dragEnd = () => {
        if(targetDrag){
           const x = parseInt(targetDrag.style.left);
           const y = parseInt(targetDrag.style.top);
           let j = -3;
           answerXY.forEach((item, index)=> {
            if((((item.left + 4) >= x) && ((item.left - 4) <=x)) && (((item.top + 19) >= y)&&((item.top - 7) <= y))) {
                selectAnswer(true);
                checkBg.current = "#fff";
                j = index;
                if(j === 3){
                    dispatch(setCheckAnswer("true"));
                    setAnswer(true);
                } else {
                    dispatch(setCheckAnswer("false"));
                    setAnswer(false);
                }
                
                if(targetDrag) {
                    targetDrag.style.left = item.left + "px";
                    targetDrag.style.top = item.top + "px";
                }
               
                
            }
            
           })
           if(j === -3) selectAnswer(false);
           setArrAnswers(arrAnswers.map((item, index) => {
            if (j===index) item.check = true;
            else item.check = false;
            return item;
        }))
            
        }
    }

  return (
    <>
                <div className={styles.taskInfo}>
                        {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи кнопку <br/>на верный город</h4>
                        <div className={styles.task} ref={ref} >
                            <div className={styles.map}>
                                <svg 
                            onTouchStart={(e) => dragStart(e)}
                            onTouchMove={(e) => dragMove(e)}
                            onTouchEnd={() => dragEnd()}   width="20" height="43" viewBox="0 0 20 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 42.4463C13.115 42.4463 15.6402 41.9333 15.6402 41.3005C15.6402 40.6677 13.115 40.1547 10 40.1547C6.885 40.1547 4.35979 40.6677 4.35979 41.3005C4.35979 41.9333 6.885 42.4463 10 42.4463Z"  fill="white" fillOpacity={.5}/>
                                    <path d="M8.22972 39.5961L7.25865 15.434H12.7442L11.7731 39.5961C11.7359 40.5471 10.951 41.3005 9.99999 41.3005C9.04897 41.3005 8.26696 40.5471 8.22972 39.5961Z" fill={checkClick ? answer ? "#DEFF7B" : "#EEA7A7" : "#9CE4E8" } />
                                    <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"/>
                                </svg>

                            </div>
                            <div className={styles.towns}>
                                {arrAnswers.map((item, index) => {
                                    return <div className={styles.town} key = {index}>
                                    <span style = {{background: item.check ? checkBg.current : "transparent"}} className={styles.answer} ref = {index === 0 ? refCheck1 : index === 1 ? refCheck2 : index === 2 ? refCheck3 : refCheck4}></span>
                                    <span className={styles.name}>{item.name}</span>
                                </div>
                                })}

                            </div>
                        </div>

                </div>
            </>
  )
}

export default Task11;