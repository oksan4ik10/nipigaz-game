import styles from "./Task03.module.css";
import { FormEvent, useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

function Task03(props: IProps) {
    const [checked, setChecked] = useState(true);
    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;
    console.log(23);
    

    const clickFormTest = (e: FormEvent<HTMLFormElement>)=>{
        const target = e.target as HTMLInputElement;
        console.log(target);
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
                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Нажми на огоньки около верных вариантов ответа</h4>
                        <form className={styles.form} onChange={clickFormTest}>
                            <label className={styles.label}>
                                <input type="checkbox" name="check" className={styles.input} value={1}/>
                                Проектирование моделей в 3D
                            </label>
                            <label className={styles.label}>
                                <input type="checkbox" name="check" className={styles.input} value={1}/>
                                VR-технологии для обучения сотрудников
                            </label>
                            <label className={styles.label}>
                                <input type="checkbox" name="check" className={styles.input} value={1}/>
                                AR-очки для удаленной совместной работы
                            </label>
                            <label className={styles.label}>
                                <input type="checkbox" name="check" className={styles.input} value={1}/>
                                Нейросети для создания проектной документации
                            </label>

                        </form>


                </div>
            </>
  )
}

export default Task03;