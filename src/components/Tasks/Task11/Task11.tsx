import styles from "./Task11.module.css";
import { useRef, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
import { MouseEvent } from 'react';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';
function Task11(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;
    const answerXY = [
        { "top": 0, "left": 0 },
        { "top": 0, "left": 0 },
        { "top": 0, "left": 0 },
        { "top": 0, "left": 0 }
    ];
    const ref = useRef<HTMLDivElement>(null);
    const refCheck1 = useRef<HTMLSpanElement>(null);
    const refCheck2 = useRef<HTMLSpanElement>(null);
    const refCheck3 = useRef<HTMLSpanElement>(null);
    const refCheck4 = useRef<HTMLSpanElement>(null);




    useEffect(() => {
        if (ref.current) {
            const data = ref.current.getBoundingClientRect();
            stateX = data.left;
            stateY = data.top;

            if (refCheck1.current) {
                const dataCheck1 = refCheck1.current.getBoundingClientRect();
                answerXY[0].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                answerXY[0].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
            }
            if (refCheck2.current) {
                const dataCheck1 = refCheck2.current.getBoundingClientRect();
                answerXY[1].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                answerXY[1].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
            }
            if (refCheck3.current) {
                const dataCheck1 = refCheck3.current.getBoundingClientRect();
                answerXY[2].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                answerXY[2].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
            }
            if (refCheck4.current) {
                const dataCheck1 = refCheck4.current.getBoundingClientRect();
                answerXY[3].top = dataCheck1.top + dataCheck1.height / 2 - data.top - 42;
                answerXY[3].left = Math.ceil(dataCheck1.left + dataCheck1.width / 2 - data.left - 17);
            }
        }



    })


    const [arrAnswers, setArrAnswers] = useState([
        { name: "Санкт-Петербург", check: false },
        { name: "Москва", check: false },
        { name: "Ростов-на-Дону", check: false },
        { name: "Краснодар", check: false },
    ])
    const checkBg = useRef("transparent");
    const [answer, setAnswer] = useState(false);

    let stateX = 0, stateY = 0, width = 0;
    let targetDrag: SVGSVGElement | null;
    const startClick = useRef(false);
    const dragStart = (e: React.TouchEvent<SVGSVGElement>) => {
        disablePageScroll();
        document.body.style.overflow = "hidden";
        const data = e.changedTouches[0];
        const t = e.changedTouches[0].target as HTMLElement;
        start(t, data.clientX, data.clientY);
    }
    const mouseStart = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        startClick.current = true;
        start(target, e.pageX, e.pageY)
    }
    const start = (t: HTMLElement, clientX: number, clientY: number) => {

        targetDrag = t.closest("svg");
        checkBg.current = "transparent";
        if (targetDrag) {
            targetDrag.style.position = "absolute";
            width = targetDrag.width.animVal.value;
            const y = clientY - stateY;
            const x = clientX - stateX - (width / 2);
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }
    }
    const dragMove = (e: React.TouchEvent<SVGSVGElement>) => {
        const data = e.changedTouches[0];
        move(data.clientX, data.clientY);
    }
    const mouseMove = (e: MouseEvent) => {
        if (!startClick.current) return;
        move(e.pageX, e.pageY);
    }
    const move = (clientX: number, clientY: number) => {
        const y = clientY - stateY;
        const x = clientX - stateX - (width / 2);

        let xNew: number = x;
        if (xNew < 32) xNew = 33
        else if (xNew > 300) xNew = 299;
        let yNew: number = y;
        if (yNew < -60) yNew = -60
        else if (yNew > 90) yNew = 90;

        checkBg.current = "transparent";
        if (targetDrag) {
            targetDrag.style.left = xNew + "px";
            targetDrag.style.top = yNew + "px";

        }
    }
    const dragEnd = () => {
        enablePageScroll();
        document.body.style.overflow = "auto";
        end();
    }



    const mouseUp = () => {
        startClick.current = false;
        end();

    }
    const mouseOut = () => {
        if (!startClick.current) return;
        startClick.current = false;
        end();
    }
    const end = () => {
        if (targetDrag) {
            const x = parseInt(targetDrag.style.left);
            const y = parseInt(targetDrag.style.top);
            let j = -3;
            answerXY.forEach((item, index) => {
                if ((((item.left + 10) >= x) && ((item.left - 10) <= x)) && (((item.top + 19) >= y) && ((item.top - 17) <= y))) {
                    selectAnswer(true);
                    checkBg.current = "#fff";
                    j = index;
                    const answerUser: IAnswerUser = {
                        arrAnswer: active,
                        answerInfo: {
                            answer: j + "",
                            correct: false
                        }
                    }
                    if (j === 3) {
                        dispatch(setCheckAnswer("true"));
                        setAnswer(true);
                        answerUser.answerInfo.correct = true;
                        dispatch(addAnswer(answerUser))
                    } else {
                        dispatch(setCheckAnswer("false"));
                        setAnswer(false);
                        dispatch(addAnswer(answerUser))
                    }

                    if (targetDrag) {
                        targetDrag.style.left = item.left + "px";
                        targetDrag.style.top = item.top + "px";
                    }


                }

            })
            if (j === -3) selectAnswer(false);
            setArrAnswers(arrAnswers.map((item, index) => {
                if (j === index) item.check = true;
                else item.check = false;
                return item;
            }))

        }
    }

    return (
        <>
            <div className={styles.taskInfo}>
                {checkClick && <OpacityTask />}
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи кнопку <br />на верный город</h4>
                <div className={styles.task} ref={ref} >
                    <div className={styles.map}>
                        <svg
                            onMouseLeave={() => mouseOut()}
                            onMouseDown={(e) => mouseStart(e)}
                            onMouseMove={(e) => mouseMove(e)}
                            onMouseUp={() => mouseUp()}
                            onTouchStart={(e) => dragStart(e)}
                            onTouchMove={(e) => dragMove(e)}
                            onTouchEnd={() => dragEnd()}
                            width="32" height="68" viewBox="0 0 32 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 67.914C20.984 67.914 25.0244 67.0932 25.0244 66.0807C25.0244 65.0682 20.984 64.2474 16 64.2474C11.016 64.2474 6.97566 65.0682 6.97566 66.0807C6.97566 67.0932 11.016 67.914 16 67.914Z" fill="white" fillOpacity={.5} />
                            <path d="M13.1676 63.3537L11.6138 24.6943H20.3907L18.837 63.3537C18.7774 64.8754 17.5216 66.0808 16 66.0808C14.4784 66.0808 13.2271 64.8754 13.1676 63.3537Z" fill={checkClick ? answer ? "#DEFF7B" : "#EEA7A7" : "#9CE4E8"} />
                            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white" stroke={checkClick ? answer ? "#99CC00" : "#C00000" : "#008C95"} />
                        </svg>

                    </div>
                    <div className={styles.towns}>
                        {arrAnswers.map((item, index) => {
                            return <div className={styles.town} key={index}>
                                <span style={{ background: item.check ? checkBg.current : "transparent" }} className={styles.answer} ref={index === 0 ? refCheck1 : index === 1 ? refCheck2 : index === 2 ? refCheck3 : refCheck4}></span>
                                <span className={styles.name}>{item.name}</span>
                            </div>
                        })}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Task11;