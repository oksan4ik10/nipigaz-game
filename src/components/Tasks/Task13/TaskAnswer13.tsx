import styles from "./Task13.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import { Maps } from "./Maps";
import urlImg1 from "../../../assets/images/regions/1.png";
import urlImg2 from "../../../assets/images/regions/2.png";
import urlImg3 from "../../../assets/images/regions/3.png";
import urlImg4 from "../../../assets/images/regions/4.png";
export const TaskAnswer13 = (props: IPropsAnswer) => {
    const {answer, correct} = props;
    const arrImages = [urlImg1, urlImg2, urlImg3, urlImg4];
    const towns = [
        {nameRU: "Астрахань", 
        nameEN: "Astrakhan"},
        {nameRU: "Казань", 
        nameEN: "Kazan"},
        {nameRU: "Нижневартовск", 
        nameEN: "Nizhnevartovsk"},
        {nameRU: "Комсомольск-на-Амуре", 
        nameEN: "Komsomolsk-na-Amure"},
    ]
    return (
        <>
                    <div className={styles.taskInfo}>
                        {<OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Выбери верный силуэт региона</h4>
                            <form  className={styles.task}> 
                            {
                                towns.map((item, index) => {
                                    if(index === +answer) return <label className={styles.label} key = {index}>
                                    <input type="radio" className={styles.input} value={index} checked onChange={(e) => e.target.value}/>
                                    <div className={styles.answer}>
                                        <img src={arrImages[index]} alt={item.nameEN} />
                                        <span>{item.nameRU}</span>
                                        <Maps value={index} color = {correct? "#99CC00" : "#CC0000"}/>
                                    </div>
                                </label>
                                    return <label className={styles.label} key = {index}>
                                    <input type="radio" className={styles.input} value={index}/>
                                    <div className={styles.answer}>
                                        <img src={arrImages[index]} alt={item.nameEN} />
                                        <span>{item.nameRU}</span>
                                        <Maps value={index} color = {correct? "#99CC00" : "#CC0000"}/>
                                    </div>
                                </label>
                                })
                            }
    
                            </form> 
    
                    </div>
                </>
      )
} 