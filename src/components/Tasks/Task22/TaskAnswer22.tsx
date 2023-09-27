import styles from "./Task22.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import { StrokeAnswer } from "./StrokeAnswer";
import { useRef, useEffect } from 'react';
export const TaskAnswer22 = (props: IPropsAnswer) => {
    const {answer} = props;
    
    const refCheck1 = useRef<HTMLInputElement>(null);
    const refCheck2 = useRef<HTMLInputElement>(null);
    const refCheck3 = useRef<HTMLInputElement>(null);
    const refCheck4 = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if(refCheck1.current && answer === "1") refCheck1.current.setAttribute("checked", "true");
        if(refCheck2.current && answer === "2") refCheck2.current.setAttribute("checked", "true");
        if(refCheck3.current && answer === "3") refCheck3.current.setAttribute("checked", "true");
        if(refCheck4.current && answer === "4") refCheck4.current.setAttribute("checked", "true");
    })
    return (
        <>
                            <div className={styles.taskInfo}>
                            { <OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Обведи календарь с верным годом</h4>
                            <form className={styles.form}>
                                <label className={styles.label + " " + styles.value1} >
                                    <input type="radio" className={styles.input} value={1} ref={refCheck1}/>
                                    <StrokeAnswer id={"svg1"}/>
                                </label>
    
                                <label className={styles.label + " " + styles.value2} >
                                    <input type="radio" className={styles.input} value={2} ref={refCheck2}/>
                                    <StrokeAnswer id={"svg2"}/>
                                </label>
                                <label className={styles.label + " " + styles.value3}>
                                    <input type="radio" className={styles.input} value={3} ref={refCheck3}/>
                                    <StrokeAnswer id={"svg3"}/>
                                </label>
                                <label className={styles.label + " " + styles.value4}>
                                    <input type="radio" className={styles.input} value={4} ref={refCheck4}/>
                                    <StrokeAnswer id={"svg4"}/>
                                </label>
    
                            </form>
    
    
                    </div>
        </>
      )
    
} 