import styles from "./Task33.module.css"
import {  useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import imgUrlCup from "../../../assets/images/cup.svg"
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task33(props: IProps) {
    const [checked, setChecked] = useState(true);
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
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетяни кубок к выбранным премиям</h4>
                        <div className={styles.task}>
                            <div className={styles.taskAnswer}>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>Headhunter</span>
                                </div>
                                <div className={styles.taskCheck}></div>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>Forbes</span>
                                </div>
                                <div className={styles.taskCheck}></div>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>FutureToday</span>
                                </div>
                                <div className={styles.taskCheck}></div>
                                <div className={styles.taskText}>
                                Лучший работодатель <span>IMDB</span>
                                </div>
                                <div className={styles.taskCheck}></div>
                            </div>
                            <div className={styles.taskCups}>
                                <img src= {imgUrlCup} alt="cup" className="taskCup" />
                                <img src= {imgUrlCup} alt="cup" className="taskCup" />
                                <img src= {imgUrlCup} alt="cup" className="taskCup" />

                            </div>

                        </div>


                </div>
            </>
  )
}

export default Task33;