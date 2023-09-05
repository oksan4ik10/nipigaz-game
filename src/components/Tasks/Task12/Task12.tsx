import styles from "./Task12.module.css";
import { FormEvent, useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import imgUrlSpan1 from  "../../../assets/images/numbers/1.svg";
import imgUrlSpan2 from  "../../../assets/images/numbers/2.svg";
import imgUrlSpan3 from  "../../../assets/images/numbers/3.svg";
import imgUrlSpan4 from  "../../../assets/images/numbers/4.svg";
import imgUrlSpan5 from  "../../../assets/images/numbers/5.svg";
import imgUrlSpan6 from  "../../../assets/images/numbers/6.svg";
import imgUrlSpan7 from  "../../../assets/images/numbers/7.svg";
import imgUrlSpan8 from  "../../../assets/images/numbers/8.svg";
import imgUrlSpan9 from  "../../../assets/images/numbers/9.svg";
import imgUrlSpan10 from  "../../../assets/images/numbers/10.svg";
import imgUrlSpan11 from  "../../../assets/images/numbers/11.svg";
import imgUrlSpan12 from  "../../../assets/images/numbers/12.svg";
import imgUrlHour from "../../../assets/images/numbers/hour.svg";
import imgUrlMinute from "../../../assets/images/numbers/minute.svg";
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task12(props: IProps) {

    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    // const clickFormTest = (e: FormEvent<HTMLFormElement>)=>{
    //     const target = e.target as HTMLInputElement;

    //     selectAnswer(); //пользователь выбрал хотя бы один вариант

    //     if(target.value === "dzen"){
    //         dispatch(setCheckAnswer("true"));
    //     } else {
    //         dispatch(setCheckAnswer("false"));
    //     }
    

    // }

  return (
    <>
                <div className={styles.taskInfo}>
                <div className={styles.clock}>
                    <div className={styles.numbers}>
                        <span>
                            <img src={imgUrlSpan1} alt="1" />
                        </span>
                        <span><img src={imgUrlSpan2} alt="2" /></span>
                        <span><img src={imgUrlSpan3} alt="3" /></span>
                        <span><img src={imgUrlSpan4} alt="4" /></span>
                        <span><img src={imgUrlSpan5} alt="5" /></span>
                        <span><img src={imgUrlSpan6} alt="6" /></span>
                        <span><img src={imgUrlSpan7} alt="7" /></span>
                        <span><img src={imgUrlSpan8} alt="8" /></span>
                        <span>
                            <img src={imgUrlSpan9} alt="9" />
                        </span>
                        <span><img src={imgUrlSpan10} alt="10" /></span>
                        <span><img src={imgUrlSpan11} alt="11" /></span>
                        <span><img src={imgUrlSpan12} alt="12" /></span>
                    </div>
                    <div className={styles.arrows}>
                        <div className={styles.hour}>
                            <img src={imgUrlHour} alt="hour" />
                        </div>
                    </div>
                    <div className={styles.minutes}>
                        <img src={imgUrlMinute} alt="minute" />
                    </div>

                </div>

                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Передвинь часовую стрелку в верное положение</h4>


                </div>
            </>
  )
}

export default Task12;