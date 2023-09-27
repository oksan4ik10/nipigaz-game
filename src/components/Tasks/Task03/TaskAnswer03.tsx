import styles from "./Task03.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import { useRef, useEffect } from "react";
export const TaskAnswer03 = (props: IPropsAnswer) => {
    const {answer} = props;
    const ref1 = useRef<HTMLLabelElement>(null);
    const ref2 = useRef<HTMLLabelElement>(null);
    const ref3 = useRef<HTMLLabelElement>(null);
    const ref4 = useRef<HTMLLabelElement>(null);
    useEffect(() => {
        if(answer === "1") {
            if(ref1.current)    {
                ref1.current.style.setProperty("--var-width", `${100}%`);
                const input = ref1.current.querySelector("input");
                if(input) input.setAttribute("checked", "true");
               
            }
            return
        }
        if(answer === "2") {
            if(ref2.current)    {
                ref2.current.style.setProperty("--var-width", `${100}%`);
                const input = ref2.current.querySelector("input");
                if(input) input.setAttribute("checked", "true");
               
            }
            return
        }
        if(answer === "3") {
            if(ref3.current)    {
                ref3.current.style.setProperty("--var-width", `${100}%`);
                const input = ref3.current.querySelector("input");
                if(input) input.setAttribute("checked", "true");
               
            }
            return
        }
        if(ref4.current)    {
            ref4.current.style.setProperty("--var-width", `${100}%`);
            const input = ref4.current.querySelector("input");
            if(input) input.setAttribute("checked", "true");
           
        }


    })
    return (
        <>
                            <div className={styles.taskInfo}>
                            {<OpacityTask/>}  
                            <h4 className={"task__subtitle " +  "answer" }>Вычеркни выбранный ответ</h4>
                            <form className={styles.form} 
                            >
                                <label className={styles.label} ref={ref1}>
                                    <input type="radio" className={styles.input} value={1}/>
                                    <span data-value="1">Водоснабжение и канализация</span> 
                                </label>
                                <label className={styles.label} ref={ref2}>
                                    <input type="radio" className={styles.input} value={2} />
                                    <span data-value="2">Машиностроение и робототехника</span>
                                </label>
                                <label className={styles.label} ref={ref3}>
                                    <input type="radio" className={styles.input} value={3} />
                                    <span data-value="3">Генплан и транспорт</span>
                                </label>
                                <label className={styles.label} ref={ref4}>
                                    <input type="radio" className={styles.input} value={4}/>
                                    <span data-value="4">Связь, безопасность и телекоммуникации</span>
                                </label>
    
                            </form>
    
    
                    </div>
        </>
      )

} 