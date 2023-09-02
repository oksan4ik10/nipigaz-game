import styles from './Task21.module.css'
import { useRef, useState, useEffect} from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task21(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const [arrAnswers, setArrAnswers] = useState([
        {value: "0",
        answer:false},
        {value: "00",
        answer:false},
        {value: "000",
        answer:false},
        {value: "0000",
        answer:false},
    ]);

    const [answer, setAnswer] = useState({value: "",
    answer: false});

    const [saveResult, setSaveResult] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    let stateX = 0, stateY = 0;
    useEffect(()=> {
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
          stateX = data.left;
          stateY = data.top;
            
        }
        
    })

    let targetDrag: HTMLElement| undefined;
    const dragStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];     
        targetDrag = e.changedTouches[0].target as HTMLElement;
        const y = data.pageY  - stateY - (targetDrag.offsetHeight / 2);
        const x = data.pageX - stateX - (targetDrag.offsetWidth / 2);
        targetDrag.style.position = "absolute";
        targetDrag.style.left = x + "px";
        targetDrag.style.top = y + "px";
    }

    const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        if(targetDrag){
            const y = data.pageY  - stateY - (targetDrag.offsetHeight / 2);
            const x = data.pageX - stateX - (targetDrag.offsetWidth / 2);
            if( y > 14 && y < 112 )targetDrag.style.top = y  + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            if(((y > 40) && (y < 80)) && ((x > 40) && (x < 227))){

                targetDrag.style.top = 40  + "px";
                targetDrag.style.left = 114 + "px"; 
            }

            
        
        }
    }
    const dragEnd = (e: React.TouchEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        if(targetDrag) {
            targetDrag.style.position = "static";
            if((targetDrag.style.top !== "40px")) return;

        }
        selectAnswer();

        setArrAnswers(arrAnswers.map((item, indexAnswer) => {
            if(indexAnswer === index ) item.answer = true;
            else item.answer = false;
            return item
        }))
        setAnswer(arrAnswers[index]);
   
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
                                <div className={styles.answer} >
                                    <div className={styles.zero + " " + (answer.answer ? "" : styles.none) + " " + 
                                ( checkClick ? saveResult ? styles.success : styles.danger:"")} 
                                >{answer.value}</div>
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
                                onTouchEnd={(e) => dragEnd(e, index)}
                                className={styles.zero + " " + (item.answer ? styles.none : "") + " " + (
                                    checkClick ? saveResult ? styles.success : styles.danger:""
                                )} >{item.value}</div></div>
                            })}
                        </div>
                        

                </div>
            </>
  )
}

export default Task21;