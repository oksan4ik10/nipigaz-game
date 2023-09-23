import styles from './Task21.module.css'
import { useRef, useState, useEffect} from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task21(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const arrAnswers = [
        {value: "0",
        answer:false},
        {value: "00",
        answer:false},
        {value: "000",
        answer:false},
        {value: "0000",
        answer:false},
    ];

    const [saveResult, setSaveResult] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const refAnswer = useRef<HTMLDivElement>(null);
    const dataAnswerPosition = {
        top: 0,
        left: 0,
        bottom: 0,
        right:0
    } 
    let stateX = 0, stateY = 0;
    useEffect(()=> {
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
          stateX = data.left;
          stateY = data.top;
            
        }
        if(refAnswer.current) {
            const data = refAnswer.current.getBoundingClientRect();
            dataAnswerPosition.top = Math.round(data.top - stateY);
            dataAnswerPosition.left = Math.round(data.left - stateX);
            dataAnswerPosition.bottom = Math.round(dataAnswerPosition.top + data.height);
            dataAnswerPosition.right = Math.round(dataAnswerPosition.left + data.width);
        }
        
    })

    let targetDrag: HTMLElement| undefined;
    const [targetDragLast, setTargetDrag]  = useState<HTMLElement | null>(null);
    const dragStart = (e: React.TouchEvent<HTMLDivElement>) => {
        document.body.style.overflow = "hidden"; 
        targetDrag = e.changedTouches[0].target as HTMLElement;
        if(targetDrag.style.position === "absolute") return;
        targetDrag.style.position = "absolute";
        const x = targetDrag.offsetLeft;
        const y = targetDrag.offsetTop;
        targetDrag.style.left = x + "px";
        targetDrag.style.top = y + "px";
    }

    const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        if(targetDrag){
            const y = data.clientY  - stateY - (targetDrag.offsetHeight / 2);
            const x = data.clientX - stateX - (targetDrag.offsetWidth / 2);
            if( y > 14 && y < 112 )targetDrag.style.top = y  + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            
            if((((dataAnswerPosition.top - 10 < y) && (dataAnswerPosition.bottom + 10) > y)) && 
            (dataAnswerPosition.left - 10 < x) && (dataAnswerPosition.right + 10 > x)){
                targetDrag.style.left = dataAnswerPosition.left + "px";
                targetDrag.style.top = dataAnswerPosition.top + "px";
                if((targetDragLast) && (targetDragLast !== targetDrag)) {
                    targetDragLast.style.position = "static";
                    targetDragLast.style.left = "auto";
                    targetDragLast.style.top = "auto";
                }
                
            }


            
        
        }
    }
    const dragEnd = (index: number) => {
        document.body.style.overflow = "auto"; 
        if(targetDrag){
            if((targetDrag.offsetTop !== dataAnswerPosition.top) || (targetDrag.offsetLeft !== dataAnswerPosition.left)){
                targetDrag.style.left = "auto";
                targetDrag.style.top = "auto";
                targetDrag.style.position = "static";
                return;
            }

        }
        selectAnswer(true);
        if(targetDrag) setTargetDrag(targetDrag)
        if(index === 1){
            dispatch(setCheckAnswer("true"));
            setSaveResult(true);
        } else {
            dispatch(setCheckAnswer("false"));
            setSaveResult(false);
        }

    }


  return (
    <>
                <div className={styles.taskInfo} ref={ref}>
                        {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи верное количество нулей в ячейку</h4>
                        <div className={styles.task}>
                            <div className={styles.taskAnswer}>
                                <span>
                                    1
                                </span>
                                <div className={styles.answer} ref = {refAnswer}>
                                    
                                </div>
                                <span>+</span>
                            </div>
                        </div>
                        <div className={styles.taskZeros}>
                            { arrAnswers.map((item, index)=>{
                                return <div key={item.value}>
                                <div 
                                onTouchStart = {(e) => dragStart(e)}
                                onTouchMove={(e) => dragMove(e)}
                                onTouchEnd={() => dragEnd(index)}
                                className={styles.zero + " " + (item.answer ? styles.none : "") + " " + (
                                    checkClick ? saveResult ? styles.success : styles.danger:""
                                )} style={index===3 ? {width: "128px"} : {width: "auto"}}>{item.value}</div></div>
                            })}
                        </div>
                        

                </div>
            </>
  )
}

export default Task21;