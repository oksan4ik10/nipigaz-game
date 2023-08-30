import styles from "./Task00.module.css"
import {useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task00(props: IProps) {
    const [checked, setChecked] = useState(1);
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const el  = e.currentTarget;
        setChecked(+el.value);
        selectAnswer();
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
                            <datalist id="list" className={styles.list}>
                                <option value="1"className={styles.item} style={checked===1 ? {"opacity": 1} :{"opacity":.5}}>Управление проектированием</option>
                                <option value="2"className={styles.item} style={checked===2 ? {"opacity": 1} :{"opacity":.5}}>Управление выпуском продукции</option>
                                <option value="3"className={styles.item} style={checked===3 ? {"opacity": 1} :{"opacity":.5}}>Управление строительством</option>
                                <option value="4"className={styles.item} style={checked===4 ? {"opacity": 1} :{"opacity":.5}}>Управление поставками и логистикой</option>
                            </datalist>

                        </div>
{/* 
                        <form onChange={clickFormTest}>
                        <p><b>Какое у вас состояние разума?</b></p>
                            <p><input name="dzen" type="radio" value="nedzen" defaultChecked={true} onChange={() => setChecked(!checked)}/> Не дзен</p>
                            <p><input name="dzen" type="radio" value="dzen"/> Дзен</p>
                            <p><input name="dzen" type="radio" value="pdzen"/> Полный дзен</p>
                        </form>  */}

                </div>
            </>
  )
}

export default Task00;