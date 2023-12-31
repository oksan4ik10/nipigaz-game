import styles from "./Task00.module.css"
import {useEffect, useState, useRef } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";

import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from "../../../store/reducers/answersReducer";
import { IProps } from "../types";

function Task00(props: IProps) {
    const [checked, setChecked] = useState(1);
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick, active} = props;
    const check = useRef(true);

    useEffect (() => {
        if(!check.current) return;
        selectAnswer(true);
        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: "1",
                correct: false
            }
        }
            dispatch(setCheckAnswer("false"));
            dispatch(addAnswer(answerUser))
    })


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        check.current = false;
        const el  = e.currentTarget;
        setChecked(+el.value);
        selectAnswer(true);
        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: el.value,
                correct: false
            }
        }
        if(el.value === "2"){
            dispatch(setCheckAnswer("true"));
            answerUser.answerInfo.correct = true;
            dispatch(addAnswer(answerUser))
        } else {
            dispatch(setCheckAnswer("false"));
            dispatch(addAnswer(answerUser))
        }
        
    }


  return (
    <>
                <div className={styles.task__info}>
                    {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Размести ползунок около верного ответа</h4>
                        <div className={styles.task}>
                            <input type="range" min="1" max="4" step="1" defaultValue="1" list="list" onChange={changeInput}/>
                            <ul id="list" className={styles.list}>
                                <li className={styles.item} style={checked===1 ? {"opacity": "1"} :{"opacity":".5"}}>Управление проектированием</li>
                                <li className={styles.item} style={checked===2 ? {"opacity": "1"} :{"opacity":".5"}}>Управление выпуском продукции</li>
                                <li className={styles.item} style={checked===3 ? {"opacity": "1"} :{"opacity":".5"}}>Управление строительством</li>
                                <li className={styles.item} style={checked===4 ? {"opacity": "1"} :{"opacity":".5"}}>Управление поставками и логистикой</li>

                            </ul>

                        </div>

                </div>
            </>
  )
}

export default Task00;