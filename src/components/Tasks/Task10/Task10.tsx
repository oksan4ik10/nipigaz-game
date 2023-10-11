import styles from './Task10.module.css'
import { useRef, useState, useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { MouseEvent } from 'react';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';
function Task10(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;

    const [arrAnswers, setArrAnswers] = useState([
        {
            value: "амбов",
            answer: false
        },
        {
            value: "юмень",
            answer: false
        },
        {
            value: "ольятти",
            answer: false
        },
        {
            value: "омск",
            answer: false
        },
    ]);

    const [answer, setAnswer] = useState({
        value: "",
        answer: false
    });

    const [saveResult, setSaveResult] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const stateX = useRef(0), stateY = useRef(0);
    useEffect(() => {
        const onScroll = () => {
            if (ref.current) {
                const data = ref.current.getBoundingClientRect();
                stateX.current = data.left;
                stateY.current = data.top;
            }
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
        if (ref.current) {
            const data = ref.current.getBoundingClientRect();
            stateX.current = data.left;
            stateY.current = data.top;

        }

    })

    let targetDrag: HTMLElement | undefined;
    const startClick = useRef(false);
    const dragStart = (e: React.TouchEvent<HTMLDivElement>) => {
        document.body.style.overflow = "hidden";
        targetDrag = e.changedTouches[0].target as HTMLElement;
        start();
    }
    const mouseStart = (e: MouseEvent) => {
        targetDrag = e.target as HTMLElement;
        startClick.current = true;
        start();
    }

    const start = () => {
        if (targetDrag) {
            disablePageScroll();
            targetDrag.style.left = "auto";
            targetDrag.style.top = "auto";
            targetDrag.style.position = "absolute";
            const x = targetDrag.offsetLeft;
            const y = targetDrag.offsetTop;
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }

    }

    const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX);

    }
    const mouseMove = (e: MouseEvent) => {
        if (!startClick.current) return;
        move(e.pageY, e.pageX);
    }
    const move = (clientY: number, clientX: number) => {
        if (targetDrag) {
            const y = clientY - stateY.current - (targetDrag.offsetHeight / 2);
            const x = clientX - stateX.current - (targetDrag.offsetWidth / 2);
            if (y > 14 && y < 112) targetDrag.style.top = y + "px";
            if (x > 0 && x < 270) targetDrag.style.left = x + "px";
            if (((y > 45) && (y < 85)) && ((x > 60) && (x < 227))) {

                targetDrag.style.top = 59.5 + "px";
                targetDrag.style.left = 139 + "px";
            }



        }
    }
    const dragEnd = (index: number) => {
        enablePageScroll();
        document.body.style.overflow = "auto";
        end(index);
    }


    const mouseUp = () => {
        enablePageScroll();
        startClick.current = false;
        if (targetDrag) {
            targetDrag.style.position = "static";
            if ((targetDrag.style.top !== "59.5px")) return;

        }

    }

    const end = (index: number) => {
        if (targetDrag) {
            targetDrag.style.position = "static";
            if ((targetDrag.style.top !== "59.5px")) return;

        }
        selectAnswer(true);

        setArrAnswers(arrAnswers.map((item, indexAnswer) => {
            if (indexAnswer === index) item.answer = true;
            else item.answer = false;
            return item
        }))
        setAnswer(arrAnswers[index]);

        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: index + "",
                correct: false
            }
        }

        if (index === 1) {
            dispatch(setCheckAnswer("true"));
            answerUser.answerInfo.correct = true;
            setSaveResult(true);
            dispatch(addAnswer(answerUser))
        } else {
            dispatch(setCheckAnswer("false"));
            setSaveResult(false);
            dispatch(addAnswer(answerUser))
        }

    }

    const mouseOut = (e: MouseEvent, index: number) => {
        enablePageScroll();
        if (!startClick.current) return;
        if (e.target === targetDrag) end(index);
    }

    return (
        <>
            <div className={styles.taskInfo} ref={ref}>
                {checkClick && <OpacityTask />}
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи часть слова к первой букве так,<br /> чтобы получилось название верного города</h4>
                <div className={styles.task}>
                    <div className={styles.taskAnswer}>
                        <span>
                            Т
                        </span>
                        <div className={styles.answer} >
                            <div className={styles.zero + " " + (answer.answer ? "" : styles.none) + " " +
                                (checkClick ? saveResult ? styles.success : styles.danger : "")}
                            >{answer.value}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.taskZeros}>
                    {arrAnswers.map((item, index) => {
                        return <div key={item.value}>
                            <div
                                onMouseOut={(e) => mouseOut(e, index)}
                                onMouseDown={(e) => mouseStart(e)}
                                onMouseMove={(e) => mouseMove(e)}
                                onMouseUp={() => mouseUp()}
                                onTouchStart={(e) => dragStart(e)}
                                onTouchMove={(e) => dragMove(e)}
                                onTouchEnd={() => dragEnd(index)}
                                className={styles.zero + " " + (item.answer ? styles.none : "") + " " + (
                                    checkClick ? saveResult ? styles.success : styles.danger : ""
                                )} >{item.value}</div></div>
                    })}
                </div>


            </div>
        </>
    )
}

export default Task10;