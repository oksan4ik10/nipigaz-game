import styles from "./Task31.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import { ImagesAnswer } from "./ImagesAnswer";
export const TaskAnswer31 = (props: IPropsAnswer) => {
    const {answer, correct} = props;
    const checkClick = true;
    const arrAnswers = [false, false, false, false];
    arrAnswers[+answer] = true;
    return (
        <>
                    <div className={styles.taskInfo}>
                    {checkClick && <OpacityTask/>}
                            <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи атрибут выбранного вида спорта в коробку</h4>
                            <div className={styles.task}>
                                {arrAnswers.map((item, index) => 
                                <div className={styles.taskAnswer} 
    
                                key={index}>
    
                                    <ImagesAnswer index={index} color={checkClick ?  correct ? "#99CC00" : "#C00000" : "#008C95"}

                                    value = {index}
                                    style = {{position: item ? "absolute" : "static", overflow: item ? "hidden" : "visible", width : item ? "65px" : "auto", height : item ? "18px" : "auto", transform: item ? " translateX(-50%) translateY(-50%)" : "none", top: item ? "30%" : "auto", left: item ? "50%" : "auto"}}
                                    />
           
    
                                </div>
                                )}
                                <div className={styles.cart}>
                                <svg width="93" height="69" viewBox="0 0 93 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M86.9938 3.99925L79.1882 13.431L35.337 9.95075L43.1426 0.518993L86.9938 3.99925Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M34.91 61.3474V9.8413L78.9793 13.3389V64.845L34.91 61.3474Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M11.1593 64.8053V13.3073L33.9101 9.88099V61.3789L11.1593 64.8053Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M24.7019 3.38559L33.8067 9.70838L11.4967 13.0683L2.39185 6.74553L24.7019 3.38559Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M55.2285 16.9158V68.4219L11.1593 64.9243V13.4182L55.2285 16.9158Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M54.5044 16.8583L44.899 25.2388L1.22406 21.7725L10.8294 13.392L54.5044 16.8583Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M78.9793 64.9559L56.2285 68.3822V16.8842L78.9793 13.4579V64.9559Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                    <path d="M79.4643 13.3849L90.1933 15.6556L69.2643 18.8075L58.5352 16.5368L79.4643 13.3849Z" fill = {checkClick ?  correct? "#99CC00" : "#C00000" : "#008C95"}  stroke="white"/>
                                </svg>
    
                                </div>
                            </div>
    
                    </div>
                </>
      )
    
} 