import styles from "./Task23.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import imgUrl from "../../../assets/images/code.png";
import imgUrlLast from "../../../assets/images/code-last.png";
import { Answer } from './Answer';
export const TaskAnswer23 = (props: IPropsAnswer) => {
    const {answer} = props;
    const [answer1, answer2] = [...answer.split("")];
    
    return (
        <>
                    <div className={styles.taskInfo}>
                        {<OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Собери верную цифру на кодовом замке</h4>
                            <div className={styles.task}>
                                <img src={imgUrl} alt="code" />
                                <div className={styles.number}>
                                    2
                                </div>
                                <Answer value = {+answer1} className = {styles.number} />
                                <Answer value = {+answer2} className = {styles.number} />
    
                                <img src={imgUrlLast} alt="code" className={styles.code}/>
                                <p className={styles.text}>МЛРД М<span>3</span></p>
                            </div>
    
    
                    </div>
                </>
      )
    
} 