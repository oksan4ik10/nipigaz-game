import styles from "./Task13.module.css";
import { useForm } from "react-hook-form";
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';

import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { Maps } from "./Maps";
import urlImg1 from "../../../assets/images/regions/1.png";
import urlImg2 from "../../../assets/images/regions/2.png";
import urlImg3 from "../../../assets/images/regions/3.png";
import urlImg4 from "../../../assets/images/regions/4.png";
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

function Task13(props: IProps) {
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick, active} = props;
    const { register, getValues} = useForm();

    const clickFormTest = ()=>{

        selectAnswer(true);
        const {name1} = getValues();
        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: name1,
                correct: false
            }
        }
        if(name1 === "2"){
            dispatch(setCheckAnswer("true"));
            answerUser.answerInfo.correct = true;
            dispatch(addAnswer(answerUser))     
        } else {
            dispatch(setCheckAnswer("false"));
            dispatch(addAnswer(answerUser))  
        }
    

    }

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
                    {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Выбери верный силуэт региона</h4>
                        <form onChange={clickFormTest} className={styles.task}> 
                        {
                            towns.map((item, index) => {
                                return <label className={styles.label} key = {index}>
                                <input type="radio" className={styles.input} value={index} {...register("name1")}/>
                                <div className={styles.answer}>
                                    <img src={arrImages[index]} alt={item.nameEN} />
                                    <span>{item.nameRU}</span>
                                    <Maps value={index} color={checkClick ? getValues().name1 === "2" ? "#99CC00" : "#CC0000": "#008C95"}/>
                                </div>
                            </label>
                            })
                        }

                        </form> 

                </div>
            </>
  )
}

export default Task13;