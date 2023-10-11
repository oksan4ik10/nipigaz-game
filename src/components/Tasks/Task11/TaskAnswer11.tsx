import styles from "./Task11.module.css";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { IPropsAnswer } from "../types";
import { useRef, useEffect } from "react";
export const TaskAnswer11 = (props: IPropsAnswer) => {
    const { answer, correct } = props;

    const ref = useRef<HTMLDivElement>(null);
    const refCheck1 = useRef<HTMLSpanElement>(null);
    const refCheck2 = useRef<HTMLSpanElement>(null);
    const refCheck3 = useRef<HTMLSpanElement>(null);
    const refCheck4 = useRef<HTMLSpanElement>(null);

    const refMap = useRef<SVGSVGElement>(null);

    const answerXY = {
        top: 0,
        left: 0
    }
    const arrAnswers = [
        { name: "Санкт-Петербург", check: false },
        { name: "Москва", check: false },
        { name: "Ростов-на-Дону", check: false },
        { name: "Краснодар", check: false },
    ]

    arrAnswers[+answer].check = true;

    useEffect(() => {
        if (ref.current) {
            const data = ref.current.getBoundingClientRect();
            if (refMap.current) {
                refMap.current.style.position = "absolute";
                if (answer === "0") {
                    if (refCheck1.current) {
                        const dataCheck1 = refCheck1.current.getBoundingClientRect();
                        answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                        answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
                    }

                }

                if (refCheck2.current && answer === "1") {
                    const dataCheck1 = refCheck2.current.getBoundingClientRect();
                    answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                    answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
                }
                if (refCheck3.current && answer === "2") {
                    const dataCheck1 = refCheck3.current.getBoundingClientRect();
                    answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                    answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
                }
                if (refCheck4.current && answer === "3") {
                    const dataCheck1 = refCheck4.current.getBoundingClientRect();
                    answerXY.top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                    answerXY.left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
                }
                refMap.current.style.top = answerXY.top + "px";
                refMap.current.style.left = answerXY.left + "px";
            }


        }


    })
    return (
        <>
            <div className={styles.taskInfo}>
                {<OpacityTask />}
                <h4 className={"task__subtitle " + "answer"}>Перетащи кнопку <br />на верный город</h4>
                <div className={styles.task} ref={ref} >
                    <div className={styles.map}>
                        <svg ref={refMap} width="32" height="68" viewBox="0 0 32 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 67.914C20.984 67.914 25.0244 67.0932 25.0244 66.0807C25.0244 65.0682 20.984 64.2474 16 64.2474C11.016 64.2474 6.97566 65.0682 6.97566 66.0807C6.97566 67.0932 11.016 67.914 16 67.914Z" fill="white" fillOpacity={.5} />
                            <path d="M13.1676 63.3537L11.6138 24.6943H20.3907L18.837 63.3537C18.7774 64.8754 17.5216 66.0808 16 66.0808C14.4784 66.0808 13.2271 64.8754 13.1676 63.3537Z" fill={correct ? "#DEFF7B" : "#EEA7A7"} />
                            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white" stroke={correct ? "#DEFF7B" : "#EEA7A7"} />
                        </svg>


                    </div>
                    <div className={styles.towns}>
                        {arrAnswers.map((item, index) => {
                            return <div className={styles.town} key={index}>
                                <span style={{ background: item.check ? "#fff" : "transparent" }} className={styles.answer} ref={index === 0 ? refCheck1 : index === 1 ? refCheck2 : index === 2 ? refCheck3 : refCheck4}></span>
                                <span className={styles.name}>{item.name}</span>
                            </div>
                        })}

                    </div>
                </div>

            </div>
        </>
    )

} 