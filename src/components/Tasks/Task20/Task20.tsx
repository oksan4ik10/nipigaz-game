import styles from "./Task20.module.css"
import {  useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task20(props: IProps) {
    const [checked, setChecked] = useState(true);
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const [spanWidth, setSpanWidth] = useState("0%");
    const [userAnswer, setUserAnswer] = useState("0");
    
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const el  = e.currentTarget;

        setSpanWidth(el.value + "%");
        setUserAnswer(el.value);
        setChecked(false);
        selectAnswer(true);
        if(el.value === "50"){
            dispatch(setCheckAnswer("true"));
        } else {
            dispatch(setCheckAnswer("false"));
        }
    }
  return (
    <>
                <div className={styles.task__info}>
                        {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Расположи полузнок на верной цифре</h4>
                        <form className = {styles.form}>
                            <div className={checked ? styles.numbers : styles.numbersActive}>
                                <span style={!checked ? {"display": "none"} : {"display":"block"}}>0</span>
                                <span style={checked ? {"display": "none"} : {"display":"block"}} className={styles.userAnswer}>{userAnswer}</span>
                                <span style={!checked ? {"display": "none"} : {"display":"block"}}>100</span>
                            </div>
                            <div className={styles.progress}>
                                <input type="range" className={styles.range} min="0" max="100" step="10" defaultValue="0" onChange={changeInput}/>
                                <span style={{"width": spanWidth}}></span>
                            </div>

                        </form>

                </div>
            </>
  )
}

export default Task20;