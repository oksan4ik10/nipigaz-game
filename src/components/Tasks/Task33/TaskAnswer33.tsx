import styles from "./Task33.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import {useRef, useEffect} from "react";
import imgUrlCup from "../../../assets/images/cup.svg"
export const TaskAnswer33 = (props: IPropsAnswer) => {
    const {answer} = props;
    const arrUserAnswers = answer.split(" ").map((item) => item === "true" ? true : false);
    const arrAnswers =  [
        {"top": 0, "left": 0},
        {"top": 0, "left": 0},
        {"top": 0, "left": 0},
        {"top": 0, "left": 0}
    ];
    const refCheck1 = useRef<HTMLDivElement>(null);
    const refCheck2 = useRef<HTMLDivElement>(null);
    const refCheck3 = useRef<HTMLDivElement>(null);
    const refCheck4 = useRef<HTMLDivElement>(null);

    const refImg1 = useRef<HTMLImageElement>(null);
    const refImg2 = useRef<HTMLImageElement>(null);
    const refImg3 = useRef<HTMLImageElement>(null);
    useEffect(()=> {
        
        if(refCheck1.current){
            arrAnswers[0].top = refCheck1.current.offsetTop;
            arrAnswers[0].left = refCheck1.current.offsetLeft;
        }
        if(refCheck2.current){
            arrAnswers[1].top = refCheck2.current.offsetTop;
            arrAnswers[1].left = refCheck2.current.offsetLeft;
        }
        if(refCheck3.current){
            arrAnswers[2].top = refCheck3.current.offsetTop;
            arrAnswers[2].left = refCheck3.current.offsetLeft;
        }
        if(refCheck4.current){
            arrAnswers[3].top = refCheck4.current.offsetTop;
            arrAnswers[3].left = refCheck4.current.offsetLeft;
        }
        const arr = arrAnswers.filter((_, index) => arrUserAnswers[index] ? true : false);
        if(refImg1.current) {
            refImg1.current.style.position = "absolute";
            refImg1.current.style.top = arr[0].top + 2 + "px";
            refImg1.current.style.left = arr[0].left + 3 + "px";
        }
        if(refImg2.current) {
            refImg2.current.style.position = "absolute";
            refImg2.current.style.top = arr[1].top + 2 + "px";
            refImg2.current.style.left = arr[1].left + 3 + "px";
        }
        if(refImg3.current) {
            refImg3.current.style.position = "absolute";
            refImg3.current.style.top = arr[2].top + 2 + "px";
            refImg3.current.style.left = arr[2].left + 3 + "px";
        }
    })


    return (
        <>
                    <div className={styles.taskInfo}>
                        <OpacityTask/>
                            <h4 className={"task__subtitle " + "answer" }>Перетяни кубок к выбранным премиям</h4>
                            <div className={styles.task}>
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
                                    <div >
                                    <img src= {imgUrlCup} alt="cup" className="taskCup"
                                        ref = {refImg1}/>
                                    </div>
    
                                    <div>
                                        <img src= {imgUrlCup} alt="cup" className="taskCup"
                                        ref = {refImg2}/>
                                    </div>
    
                                    <div>
                                    <img src= {imgUrlCup} alt="cup" className="taskCup"
                                    ref = {refImg3}/>
                                    </div>
    
    
                                </div>
    
                            </div>
    
    
                    </div>
                </>
      )
    
} 