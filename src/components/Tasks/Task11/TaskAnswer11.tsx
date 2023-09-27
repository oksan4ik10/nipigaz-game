import styles from "./Task11.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import {useRef, useEffect} from "react";
export const TaskAnswer11 = (props: IPropsAnswer) => {
    const {answer, correct} = props;
    
    const ref = useRef<HTMLDivElement>(null);
    const refCheck1 = useRef<HTMLSpanElement>(null);
    const refCheck2 = useRef<HTMLSpanElement>(null);
    const refCheck3 = useRef<HTMLSpanElement>(null);
    const refCheck4 = useRef<HTMLSpanElement>(null);

    const refMap = useRef<SVGSVGElement>(null);

    const answerXY = {
        top: 0,
        left: 0
    }
    const arrAnswers = [
        {name: "Санкт-Петербург", check: false},
        {name: "Москва" , check: false},
        {name: "Ростов-на-Дону", check: false},
        {name: "Краснодар" , check: false},
    ]

    arrAnswers[+answer].check = true;

    useEffect(()=> {
        if(ref.current){
            const data = ref.current.getBoundingClientRect();
            if(refMap.current){
                refMap.current.style.position = "absolute";
                if(answer === "0"){
                    if(refCheck1.current){
                        const dataCheck1 = refCheck1.current.getBoundingClientRect();
                        answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                        answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
                    }

                }

                if(refCheck2.current && answer === "1"){
                    const dataCheck1 = refCheck2.current.getBoundingClientRect();
                    answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                    answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
                }
                if(refCheck3.current && answer === "2"){
                    const dataCheck1 = refCheck3.current.getBoundingClientRect();
                    answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                    answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
                }
                if(refCheck4.current && answer === "3"){
                    const dataCheck1 = refCheck4.current.getBoundingClientRect();
                    answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 21.5;
                    answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 10);
                }
                refMap.current.style.top = answerXY.top + "px";
                refMap.current.style.left = answerXY.left + "px";
            }

              
          }

        
    })
    return (
        <>
                    <div className={styles.taskInfo}>
                            {<OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Перетащи кнопку <br/>на верный город</h4>
                            <div className={styles.task} ref={ref} >
                                <div className={styles.map}>
                                    <svg ref={refMap}  width="20" height="43" viewBox="0 0 20 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 42.4463C13.115 42.4463 15.6402 41.9333 15.6402 41.3005C15.6402 40.6677 13.115 40.1547 10 40.1547C6.885 40.1547 4.35979 40.6677 4.35979 41.3005C4.35979 41.9333 6.885 42.4463 10 42.4463Z"  fill="white" fillOpacity={.5}/>
                                        <path d="M8.22972 39.5961L7.25865 15.434H12.7442L11.7731 39.5961C11.7359 40.5471 10.951 41.3005 9.99999 41.3005C9.04897 41.3005 8.26696 40.5471 8.22972 39.5961Z" fill={correct ? "#DEFF7B" : "#EEA7A7" } />
                                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"/>
                                    </svg>
    
                                </div>
                                <div className={styles.towns}>
                                    {arrAnswers.map((item, index) => {
                                        return <div className={styles.town} key = {index}>
                                        <span style = {{background: item.check ? "#fff" : "transparent"}} className={styles.answer} ref = {index === 0 ? refCheck1 : index === 1 ? refCheck2 : index === 2 ? refCheck3 : refCheck4}></span>
                                        <span className={styles.name}>{item.name}</span>
                                    </div>
                                    })}
    
                                </div>
                            </div>
    
                    </div>
                </>
      )
    
} 