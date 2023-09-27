import styles from "./Task10.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
export const TaskAnswer10 = (props: IPropsAnswer) => {
    const {answer, correct} = props;
    const arrAnswers = [
        {value: "амбов",
        answer:false},
        {value: "юмень",
        answer:false},
        {value: "ольятти",
        answer:false},
        {value: "омск",
        answer:false},
    ];
    arrAnswers[+answer].answer = true;
    const userAnswer = arrAnswers[+answer].value;
    return (
        <>
                    <div className={styles.taskInfo}>
                            {<OpacityTask/>}
                            <h4 className={"task__subtitle " + "answer" }>Перетащи часть слова к первой букве так,<br/> чтобы получилось название верного города</h4>
                            <div className={styles.task}>
                                <div className={styles.taskAnswer}>
                                    <span>
                                        Т
                                    </span>
                                    <div className={styles.answer} >
                                        <div className={styles.zero +  " " + 
                                    ( correct ? styles.success : styles.danger)} 
                                    >{userAnswer}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.taskZeros}>
                                { arrAnswers.map((item)=>{
                                    return <div key={item.value}>
                                    <div className={styles.zero + " " + (item.answer ? styles.none : "") + " " + (
                                        correct ? styles.success : styles.danger
                                    )} >{item.value}</div></div>
                                })}
                            </div>
                            
    
                    </div>
                </>
      )
} 