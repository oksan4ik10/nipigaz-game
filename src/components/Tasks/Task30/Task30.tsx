// import styles from "./Task30.modules.css"
import { FormEvent, useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task30(props: IProps) {
    const [checked, setChecked] = useState(true);
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const clickFormTest = (e: FormEvent<HTMLFormElement>)=>{
        const target = e.target as HTMLInputElement;

        selectAnswer(); //пользователь выбрал хотя бы один вариант

        if(target.value === "dzen"){
            dispatch(setCheckAnswer("true"));
        } else {
            dispatch(setCheckAnswer("false"));
        }
    

    }

  return (
    <>
                <div className="task__info">
                    <div className="clock">
                    <input type="range" min="1" max="12" step="1" list="list" />
                    </div>

                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Расположи полузнок на верной цифре</h4>
                        <form onChange={clickFormTest}>
                        <p><b>Какое у вас состояние разума?</b></p>
                            <p><input name="dzen" type="radio" value="nedzen" defaultChecked={true} onChange={() => setChecked(!checked)}/> Не дзен</p>
                            <p><input name="dzen" type="radio" value="dzen"/> Дзен</p>
                            <p><input name="dzen" type="radio" value="pdzen"/> Полный дзен</p>
                        </form> 

                </div>
            </>
  )
}

export default Task30;