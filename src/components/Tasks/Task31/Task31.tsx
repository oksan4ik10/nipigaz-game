import styles from './Task31.module.css';
import { useRef, useEffect, useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { Images } from './Images';
import { TouchEvent, MouseEvent } from 'react';
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task31(props: IProps) {

    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    const ref = useRef<HTMLDivElement>(null);
    let stateX = 0, stateY = 0;

    useEffect(()=> {
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
            stateX = data.left;
            stateY = data.top;
        }
        
    })
    const [arrAnswers, setArrAnswers] = useState([false, false, false, false]);


    const [answerIndex, setAnswerIndex] = useState("-1");

    
    let targetDrag: HTMLElement|null;
    const startClick = useRef(false);
    
    const start = (t: HTMLElement) => {
        targetDrag = t.closest("div");
        if(targetDrag){
            if(targetDrag.style.position ==="absolute") return;
            targetDrag.style.left = "auto";
            targetDrag.style.top = "auto";
            targetDrag.style.transform = "none";
            targetDrag.style.position = "absolute";
            let x = targetDrag.offsetLeft - targetDrag.offsetWidth;
            if(x < 0) x = targetDrag.offsetLeft;

            
            let y = targetDrag.offsetTop - targetDrag.offsetHeight/2;
            if ((y < 0) || (y === 56)) y = targetDrag.offsetTop;
            targetDrag.style.zIndex = "1";
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }
    }
    const mouseStart = (e: MouseEvent<HTMLDivElement>) => {
        const t = e.target as HTMLElement;
        startClick.current = true;
        start(t);
        
    }
    const dragStart = (e: TouchEvent) =>{
        document.body.style.overflow = "hidden";
        const t = e.changedTouches[0].target as HTMLElement;   
        start(t);

    }

    const move = (clientY: number, clientX: number) =>{

        if(targetDrag){
            if((targetDrag.style.top === "30%")) return;
            const y = clientY  - stateY - (targetDrag.offsetHeight / 2);
            const x = clientX - stateX - (targetDrag.offsetWidth / 2);
            if( y > 14 && y < 112 )targetDrag.style.top = y  + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            if(((y > 20) && (y < 70)) && ((x > 120) && (x < 145))){
                const value = targetDrag.getAttribute("data-value");
                targetDrag.style.top = "30%";
                targetDrag.style.left = "50%";
                targetDrag.style.transform = "translateX(-50%) translateY(-50%)";
                targetDrag.style.height = "18px";
                targetDrag.style.width = "65px";
                targetDrag.style.overflow = "hidden";

                if(value) {
                    if (arrAnswers[+value]) return;
                    setArrAnswers( arrAnswers.map((item, index)=> {
                        if (index + "" === value) item = true;
                        else item = false;
                        return item
                    }))
                    if(value !== "-1") {
                        if(value === "0"){
                            dispatch(setCheckAnswer("true"));
                        } else {
                            dispatch(setCheckAnswer("false"));
                        }  
                            selectAnswer(true);
                            setAnswerIndex(value);
                    }
                    
                }

                

            } 
        
        }


    }
    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if(!startClick) return;
        move(e.pageY, e.pageX);
    }

    const dragMove = (e: TouchEvent) =>{
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX);    

    }

    const end = () =>{
        if(targetDrag){
            if((targetDrag.style.top !== "30%") && (targetDrag.style.left !== "50%")){
                targetDrag.style.position = "static";
                return;
            }
            return;
        }

    }

    const mouseUp = () =>{        
        if(targetDrag){
            if((targetDrag.style.top !== "30%") && (targetDrag.style.left !== "50%")){
                targetDrag.style.position = "static";
            }
        }
        
    }

    const dragEnd = () =>{
        document.body.style.overflow = "auto";
        end();


    }
  return (
    <>
                <div className={styles.taskInfo}>
                {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи атрибут выбранного вида спорта в коробку</h4>
                        <div className={styles.task} ref={ref}>
                            {arrAnswers.map((item, index) => 
                            <div className={styles.taskAnswer} 

                            key={index}>

                                <Images index={index} color={checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}
                                onMouseUp = {() => mouseUp()}
                                onMouseDown={(e) => mouseStart(e)}
                                onMouseMove={(e) => mouseMove(e)}
                                onTouchStart={(e) => dragStart(e)}
                                onTouchMove = {(e) => dragMove(e)}
                                onTouchEnd = {() => dragEnd()}
                                value = {index}
                                style = {{position: item ? "absolute" : "static", overflow: item ? "hidden" : "visible", width : item ? "65px" : "auto", height : item ? "18px" : "auto", transform: item ? " translateX(-50%) translateY(-50%)" : "none"}}
                                />
       

                            </div>
                            )}
                            <div className={styles.cart}>
                            <svg width="93" height="69" viewBox="0 0 93 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M86.9938 3.99925L79.1882 13.431L35.337 9.95075L43.1426 0.518993L86.9938 3.99925Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M34.91 61.3474V9.8413L78.9793 13.3389V64.845L34.91 61.3474Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M11.1593 64.8053V13.3073L33.9101 9.88099V61.3789L11.1593 64.8053Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M24.7019 3.38559L33.8067 9.70838L11.4967 13.0683L2.39185 6.74553L24.7019 3.38559Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M55.2285 16.9158V68.4219L11.1593 64.9243V13.4182L55.2285 16.9158Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M54.5044 16.8583L44.899 25.2388L1.22406 21.7725L10.8294 13.392L54.5044 16.8583Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M78.9793 64.9559L56.2285 68.3822V16.8842L78.9793 13.4579V64.9559Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                <path d="M79.4643 13.3849L90.1933 15.6556L69.2643 18.8075L58.5352 16.5368L79.4643 13.3849Z" fill = {checkClick ?  answerIndex === "0" ? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                            </svg>

                            </div>
                        </div>

                </div>
            </>
  )
}

export default Task31;