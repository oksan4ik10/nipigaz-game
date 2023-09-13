import styles from "./Task00.module.css"
import {useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task00(props: IProps) {
    const [checked, setChecked] = useState(1);
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const el  = e.currentTarget;
        setChecked(+el.value);
        selectAnswer(true);
        if(el.value === "2"){
            dispatch(setCheckAnswer("true"));
        } else {
            dispatch(setCheckAnswer("false"));
        }
        
    }


  return (
    <>
                <div className={styles.task__info}>
                    {checkClick && <OpacityTask/>}
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Размести ползунок около верного ответае</h4>
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