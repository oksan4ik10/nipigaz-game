import styles from "./Task21.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import { useRef, useEffect} from 'react';
export const TaskAnswer21 = (props: IPropsAnswer) => {
    const {answer, correct} = props;
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
    arrAnswers[+answer].answer = true;

    const refCheck1 = useRef<HTMLDivElement>(null);
    const refCheck2 = useRef<HTMLDivElement>(null);
    const refCheck3 = useRef<HTMLDivElement>(null);
    const refCheck4 = useRef<HTMLDivElement>(null);

    const dataAnswerPosition = {top: 0, left: 0}
    const ref = useRef<HTMLDivElement>(null);
    const refAnswer = useRef<HTMLDivElement>(null);


    useEffect(()=> {
        let stateX = 0, stateY = 0;
        if(ref.current){
          const data = ref.current.getBoundingClientRect();
          stateX = data.left;
          stateY = data.top;
            
        }
        if(refAnswer.current) {
            const data = refAnswer.current.getBoundingClientRect();
            dataAnswerPosition.top = Math.round(data.top - stateY);
            dataAnswerPosition.left = Math.round(data.left - stateX);
            
        }
        if(refCheck1.current && answer === "0"){
            refCheck1.current.style.position = "absolute";
            refCheck1.current.style.top = dataAnswerPosition.top + "px";
            refCheck1.current.style.left = dataAnswerPosition.left + "px";
        }
        if(refCheck2.current && answer === "1"){
            refCheck2.current.style.position = "absolute";
            refCheck2.current.style.top = dataAnswerPosition.top + "px";
            refCheck2.current.style.left = dataAnswerPosition.left + "px";
        }
        if(refCheck3.current && answer === "2"){
            refCheck3.current.style.position = "absolute";
            refCheck3.current.style.top = dataAnswerPosition.top + "px";
            refCheck3.current.style.left = dataAnswerPosition.left + "px";
        }
        if(refCheck4.current && answer === "3"){
            refCheck4.current.style.position = "absolute";
            refCheck4.current.style.top = dataAnswerPosition.top + "px";
            refCheck4.current.style.left = dataAnswerPosition.left + "px";
        }
    })
    
    return (
        <>
                    <div className={styles.taskInfo} ref={ref}>
                            {<OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Перетащи верное количество нулей в ячейку</h4>
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
                                    <div ref = {index === 0 ? refCheck1 : index === 1 ? refCheck2 : index === 2 ? refCheck3 : refCheck4}
                                    className={styles.zero  + " " + (
                                        correct? styles.success : styles.danger
                                    )} style={{width: index === 3? "128px" : "auto"}}>{item.value}</div></div>
                                })}
                            </div>
                            
    
                    </div>
                </>
      )
} 