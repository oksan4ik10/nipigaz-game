import styles from "./Task10.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
export const TaskAnswer10 = (props: IPropsAnswer) => {
    const {answer} = props;
    return (
        <>
                    <div className={styles.task__info}>
                        <OpacityTask/>
                            <h4 className={"task__subtitle " + "answer" }>Размести ползунок около верного ответае</h4>
                            <div className={styles.task}>
                                <input type="range" min="1" max="4" step="1" value={answer + ""} list="list" onChange={e => e.target.value}/>
                                <ul id="list" className={styles.list}>
                                    <li className={styles.item} style={answer===1 ? {"opacity": "1"} :{"opacity":".5"}}>Управление проектированием</li>
                                    <li className={styles.item} style={answer===2 ? {"opacity": "1"} :{"opacity":".5"}}>Управление выпуском продукции</li>
                                    <li className={styles.item} style={answer===3 ? {"opacity": "1"} :{"opacity":".5"}}>Управление строительством</li>
                                    <li className={styles.item} style={answer===4 ? {"opacity": "1"} :{"opacity":".5"}}>Управление поставками и логистикой</li>
    
                                </ul>
    
                            </div>
    
                    </div>
                </>
      )
} 