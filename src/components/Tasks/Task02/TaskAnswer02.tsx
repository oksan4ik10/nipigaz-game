
import styles from "./Task02.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";

export const TaskAnswer02 = (props: IPropsAnswer) => {
    const {answer} = props;
    const arrAnswer = ["Проектирование моделей в 3D", "VR-технологии для обучения сотрудников", "AR-очки для удаленной совместной работы", "Нейросети для создания проектной документации"]
    
    return (
        <>
                            <div className={styles.taskInfo}>
                            {<OpacityTask/>}
                            <h4 className={"task__subtitle " + "answer"}>Нажми на огоньки около верных вариантов ответа</h4>
                            <form className={styles.form} >
                                {arrAnswer.map((item, index)=> {
                                    if(answer.includes((index + 1) + "")) return <label key={index} className={styles.label}>
                                    <input type="checkbox" className={styles.input} defaultChecked onChange={e => e.target.value}
                                   />
                                    {item}
                                </label> 
                                return <label key={index} className={styles.label}>
                                <input type="checkbox" className={styles.input} onChange={e => e.target.value}
                               />
                                {item}
                            </label>                                    
                                })}

    
                            </form>
    
    
                    </div>
        </>
      )

} 