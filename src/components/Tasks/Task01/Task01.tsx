import styles from './Task01.module.css'
import { useState, useRef, useEffect } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import urlImg from "../../../assets/images/cart.png";
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task01(props: IProps) {

    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const ref = useRef<HTMLDivElement>(null);
    const refCart = useRef<HTMLImageElement>(null);
    let stateX = 0, stateY = 0, stateXCart = 0;
    const [level, setLevel] = useState(0);
    useEffect(()=> {
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
          if(refCart.current){
            const dataCart = refCart.current.getBoundingClientRect();
            stateX = data.left;
           
            if(level === 0) {
                stateXCart = dataCart.left - data.left - 40;
                
            } else{
                stateXCart = dataCart.left - data.left;
            }
            stateY = data.top;
          }

            
        }
        
    })

    const [arrAnswers, setArrAnswers] = useState([{
        value: "EPC", check: false}, 
        {value: "САПР", check: false}, {value: "UGC", check: false}, {value: "BIM", check: false }]);
    const [answerIndex, setAnswerIndex] = useState("-1");

    
    let targetDrag: HTMLElement|undefined;
    let saveX = "";

    const dragStart = (e: React.TouchEvent<HTMLSpanElement>) =>{
        const data = e.changedTouches[0]; 
        targetDrag = e.changedTouches[0].target as HTMLElement;        
        if(targetDrag.style.position ==="absolute") return;
        const y = data.pageY  - stateY - (targetDrag.offsetHeight / 2);
        const x = data.pageX - stateX - (targetDrag.offsetWidth / 2);
        targetDrag.style.position = "absolute";
        targetDrag.style.zIndex = "1";
        targetDrag.style.left = x + "px";
        targetDrag.style.top = y + "px";
    }

    const dragMove = (e: React.TouchEvent<HTMLSpanElement>) =>{
        const data = e.changedTouches[0];
        
        if(targetDrag){
            if((targetDrag.style.top === "36px")) return;
            const y = data.pageY  - stateY - (targetDrag.offsetHeight / 2);
            const x = data.pageX - stateX - (targetDrag.offsetWidth / 2);
            if( y > 14 && y < 112 )targetDrag.style.top = y  + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            if(((y > 14) && (y < 140)) && ((x > 90) && (x < 170))){
                const value = targetDrag.getAttribute("data-value");
                if(value === "1") targetDrag.style.fontSize = "20px";

                targetDrag.style.color = "#008C95";
                targetDrag.style.top = 36  + "px";
                saveX = stateXCart + (80 - targetDrag.offsetWidth)/2 + "px"; 
                targetDrag.style.left = saveX;

            } else{
                targetDrag.style.color = "#fff";
                targetDrag.style.fontSize = "25px";
            }
        
        }
    }
    const dragEnd = (e: React.TouchEvent<HTMLSpanElement>) =>{
        e.preventDefault();
        if(targetDrag){
            if((targetDrag.style.top !== "36px") && (targetDrag.style.left !== saveX)){
                targetDrag.style.position = "static";
                return;
            }
            const value = targetDrag.getAttribute("data-value");
            setLevel(1);

            if(value) {
                setArrAnswers(arrAnswers.map((item, index)=> {
                    if (index + "" === value) item.check = true;
                    else item.check = false;
                    return item
                }))
                if(value === "2"){
                    dispatch(setCheckAnswer("true"));
                } else {
                    dispatch(setCheckAnswer("false"));
                }
                setAnswerIndex(value);
            } 
            selectAnswer();
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
                                <span onTouchStart={(e) => dragStart(e)}
                                onTouchMove = {(e) => dragMove(e)}
                                
                                onTouchEnd = {(e) => dragEnd(e)}
                                data-value = {index}
                                style={{
                                    color: !item.check ? "#fff" : checkClick ? (answerIndex === "2") ? "#008C95" : "#C00000" : "#008C95", position: item.check ? "absolute" : "static"}} 
                                >
                                    {item.value}
                                   
                                </span>
                            </div>
                            )}
                            <div className={styles.cart}>
                                <img src={urlImg} alt="cart"  ref = {refCart}/>
                            </div>
                        </div>

                </div>
            </>
  )
}

export default Task01;