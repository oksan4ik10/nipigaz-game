import styles from './Task10.module.css'
import { useRef, useState, useEffect} from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { MouseEvent } from 'react';
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task10(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const [arrAnswers, setArrAnswers] = useState([
        {value: "амбов",
        answer:false},
        {value: "юмень",
        answer:false},
        {value: "ольятти",
        answer:false},
        {value: "омск",
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
    const startClick = useRef(false);
    const dragStart = (e: React.TouchEvent<HTMLDivElement>) => {
        document.body.style.overflow = "hidden"; 
        targetDrag = e.changedTouches[0].target as HTMLElement;
        start();
    }
    const mouseStart = (e: MouseEvent) => {
        targetDrag = e.target as HTMLElement;
        startClick.current = true;
        start();
    }

    const start = () => {
        if(targetDrag) {
            targetDrag.style.left = "auto";
            targetDrag.style.top = "auto";
            targetDrag.style.position = "absolute";
            const x = targetDrag.offsetLeft;
            const y = targetDrag.offsetTop;
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }

    }

    const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX);

    }
    const mouseMove = (e: MouseEvent) => {
        if(!startClick.current) return;
        move(e.pageY, e.pageX);
    }
    const move = (clientY: number, clientX: number) => {
        if(targetDrag){
            const y = clientY  - stateY - (targetDrag.offsetHeight / 2);
            const x = clientX - stateX - (targetDrag.offsetWidth / 2);
            if( y > 14 && y < 112 )targetDrag.style.top = y  + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            if(((y > 45) && (y < 85)) && ((x > 60) && (x < 227))){

                targetDrag.style.top = 59.5  + "px";
                targetDrag.style.left = 139 + "px"; 
            }

            
        
        }
    }
    const dragEnd = (index: number) => {
        document.body.style.overflow = "auto"; 
        end(index);
    }


    const mouseUp = () => {
        startClick.current = false;
        if(targetDrag) {
            targetDrag.style.position = "static";
            if((targetDrag.style.top !== "59.5px")) return;

        }
        
    }

    const end = (index: number) => {
        if(targetDrag) {
            targetDrag.style.position = "static";
            if((targetDrag.style.top !== "59.5px")) return;

        }
        selectAnswer(true);

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

    const mouseOut = (e: MouseEvent, index: number) => {
        if(!startClick.current) return;
        if(e.target === targetDrag) end(index);
    }

  return (
    <>
                <div className={styles.taskInfo} ref={ref}>
                        {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи часть слова к первой букве так,<br/> чтобы получилось название верного города</h4>
                        <div className={styles.task}>
                            <div className={styles.taskAnswer}>
                                <span>
                                    Т
                                </span>
                                <div className={styles.answer} >
                                    <div className={styles.zero + " " + (answer.answer ? "" : styles.none) + " " + 
                                ( checkClick ? saveResult ? styles.success : styles.danger:"")} 
                                >{answer.value}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.taskZeros}>
                            { arrAnswers.map((item, index)=>{
                                return <div key={item.value}>
                                <div 
                                onMouseOut = {(e) => mouseOut(e, index)}
                                onMouseDown={(e) => mouseStart(e)}
                                onMouseMove={(e) => mouseMove(e)}
                                onMouseUp = {() => mouseUp()}
                                onTouchStart = {(e) => dragStart(e)}
                                onTouchMove={(e) => dragMove(e)}
                                onTouchEnd={() => dragEnd(index)}
                                className={styles.zero + " " + (item.answer ? styles.none : "") + " " + (
                                    checkClick ? saveResult ? styles.success : styles.danger:""
                                )} >{item.value}</div></div>
                            })}
                        </div>
                        

                </div>
            </>
  )
}

export default Task10;