import styles from "./Task01.module.css";
import urlImg from "../../../assets/images/cart.png";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
export const TaskAnswer01 = (props: IPropsAnswer) => {
    const {answer} = props;
    const arrAnswers = [{
        value: "EPC", check: false}, 
        {value: "САПР", check: false}, {value: "UGC", check: false}, {value: "BIM", check: false }];
        arrAnswers[+answer].check = true;
    return (
        <>
                    <div className={styles.taskInfo}>
                    {<OpacityTask/>}
                            <h4 className={"task__subtitle " +  "answer" }>Перетащи выбранный вариант ответа в корзину</h4>
                            <div className={styles.task}>
                                {arrAnswers.map((item, index) => 
                                <div className={styles.taskAnswer} 
    
                                key={index}>
                                    <span 
                                    style={{
                                        color: !item.check ? "#fff" : (answer === "2") ? "#008C95" : "#C00000", position: item.check ? "absolute" : "static", fontSize : (answer === "1" && index === 1) ? "20px" : "25px",
                                    top: (+answer===index) ? "50%" : "", left:(+answer===index) ? "50%" : "", transform: (+answer === index) ? "translateX(-50%) translateY(-50%)":"", zIndex: (+answer === index) ? "2" : "" }} 
                                    >
                                        {item.value}
                                       
                                    </span>
                                </div>
                                )}
                                <div className={styles.cart}>
                                    <img src={urlImg} alt="cart" />
                                </div>
                            </div>
    
                    </div>
                </>
      )
} 