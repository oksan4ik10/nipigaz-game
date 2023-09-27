import styles from "./Task20.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
export const TaskAnswer20 = (props: IPropsAnswer) => {
    const {answer} = props;
    const spanWidth = answer + "%";
    
    return (
        <>
                    <div className={styles.task__info}>
                            {<OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Расположи полузнок на верной цифре</h4>
                            <form className = {styles.form}>
                                <div className={styles.numbersActive}>
                                    <span style={{"display": "none"} }>0</span>
                                    <span style={ {"display":"block"}} className={styles.userAnswer}>{answer}</span>
                                    <span style={{"display": "none"}}>100</span>
                                </div>
                                <div className={styles.progress}>
                                    <input type="range" className={styles.range} min="0" max="100" step="10" value={answer} onChange={e => e.target.value}/>
                                    <span style={{"width": spanWidth}}></span>
                                </div>
    
                            </form>
    
                    </div>
                </>
      )
} 