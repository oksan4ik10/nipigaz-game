import styles from './Task01.module.css'
import { useState, useRef, useEffect } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import urlImg from "../../../assets/images/cart.png";
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { IProps } from '../types';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';

function Task01(props: IProps) {

    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick, active} = props;

    const ref = useRef<HTMLDivElement>(null);
    let stateX = 0, stateY = 0;

    useEffect(()=> {
        
        
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
            stateX = data.left;
            stateY = data.top;
        }
        
    })

    const [arrAnswers, setArrAnswers] = useState([{
        value: "EPC", check: false}, 
        {value: "САПР", check: false}, {value: "UGC", check: false}, {value: "BIM", check: false }]);
    const [answerIndex, setAnswerIndex] = useState("-1");

    
    let targetDrag: HTMLElement|undefined;
    const startClick = useRef(false);
    const start = () =>{
        if(targetDrag){
            if(targetDrag.style.position ==="absolute") return;
            targetDrag.style.left = "auto";
            targetDrag.style.top = "auto";
            targetDrag.style.transform = "none";
            
            targetDrag.style.position = "absolute";
            let x = targetDrag.offsetLeft - targetDrag.offsetWidth;
            if(x < 0) x = targetDrag.offsetLeft
            const y = targetDrag.offsetTop;
            targetDrag.style.zIndex = "1";
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }

    }
    const mouseStart = (e: React.MouseEvent<HTMLSpanElement>) => {
        targetDrag = e.target as HTMLElement;
        startClick.current = true;
        start();
    }
    const dragStart = (e: React.TouchEvent<HTMLSpanElement>) =>{
        document.body.style.overflow = "hidden";
        targetDrag = e.changedTouches[0].target as HTMLElement;    
        start();
    }
    const mouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        if(!startClick.current) return;
        move(e.pageY, e.pageX, "mouse");
    }
    const dragMove = (e: React.TouchEvent<HTMLSpanElement>) =>{
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX, "");

    }
    const move = (clientY: number, clientX: number, device: string) =>{
        if(targetDrag){
            if((targetDrag.style.top === "50%")) return;
            let x: number, y: number;
            if (device === "phone") {
                y = clientY  - stateY - (targetDrag.offsetHeight / 2);
                x = clientX - stateX - (targetDrag.offsetWidth / 2);
            } else{
                y = clientY  - stateY - (targetDrag.offsetHeight / 2) + 5;
                x = clientX - stateX - (targetDrag.offsetWidth / 2);
            }
            if( y > 14 && y < 112 )targetDrag.style.top = y  + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            if(((y > 14) && (y < 140)) && ((x > 90) && (x < 170))){
                const value = targetDrag.getAttribute("data-value");
                if((value) && answerIndex !== value) {
                    setArrAnswers(arrAnswers.map((item, index)=> {
                        if (index + "" === value) item.check = true;
                        else item.check = false;
                        return item
                    }))
                    const answerUser: IAnswerUser = {
                        arrAnswer: active,
                        answerInfo: {
                            answer: +value,
                            correct: false
                        }
                    }
                    if(value === "2"){
                        dispatch(setCheckAnswer("true"));
                        answerUser.answerInfo.correct = true;
                        dispatch(addAnswer(answerUser))
                    } else {
                        dispatch(setCheckAnswer("false"));
                        dispatch(addAnswer(answerUser))
                    }
                    setAnswerIndex(value);
                } 
                selectAnswer(true);
                if(value === "1") targetDrag.style.fontSize = "20px";
                targetDrag.style.color = "#008C95";
                targetDrag.style.top = "50%";
                targetDrag.style.left = "50%";
                targetDrag.style.transform = "translateX(-50%) translateY(-50%)";

            } else{
                targetDrag.style.color = "#fff";
                targetDrag.style.fontSize = "25px";
            }
        
        }

    }

    const mouseEnd = () => {
        startClick.current = false;
        end();

    }
    const dragEnd = () =>{
        document.body.style.overflow = "auto";
        end();
    }
    const end = () => {
        if(targetDrag){
            if((targetDrag.style.top !== "50%") && (targetDrag.style.left !== "50%")){
                targetDrag.style.position = "static";
                return;
            }

        }
    }


  return (
    <>
                <div className={styles.taskInfo}>
                {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи выбранный вариант ответа в корзину</h4>
                        <div className={styles.task} ref={ref}>
                            {arrAnswers.map((item, index) => 
                            <div className={styles.taskAnswer} 

                            key={index}>
                                <span 
                                onMouseDown={(e) => mouseStart(e)}
                                onMouseMove={(e) => mouseMove(e)}
                                onMouseUp = {() => mouseEnd()}
                                onTouchStart={(e) => dragStart(e)}
                                onTouchMove = {(e) => dragMove(e)}
                                
                                onTouchEnd = {() => dragEnd()}
                                data-value = {index}
                                style={{
                                    color: !item.check ? "#fff" : checkClick ? (answerIndex === "2") ? "#008C95" : "#C00000" : "#008C95", position: item.check ? "absolute" : "static", fontSize : (answerIndex === "1" && index === 1) ? "20px" : "25px"}} 
                                >
                                    {item.value}
                                   
                                </span>
                            </div>
                            )}
                            <div className={styles.cart}>
                                <img src={urlImg} alt="cart" />
                            </div>
                        </div>

                </div>
            </>
  )
}

export default Task01;