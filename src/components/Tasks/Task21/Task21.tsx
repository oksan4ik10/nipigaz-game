import styles from './Task21.module.css'
import { useRef, useState, useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import { OpacityTask } from '../../../utils/OpacityTask/OpacityTask';
import { MouseEvent } from 'react';
import { addAnswer } from "../../../store/reducers/answersReducer";
import { IAnswerUser } from '../../../store/reducers/answersReducer';
import { IProps } from '../types';

function Task21(props: IProps) {
    const dispatch = useAppDispatch();
    const { selectAnswer, checkClick, active } = props;

    const arrAnswers = [
        {
            value: "0",
            answer: false
        },
        {
            value: "00",
            answer: false
        },
        {
            value: "000",
            answer: false
        },
        {
            value: "0000",
            answer: false
        },
    ];

    const [saveResult, setSaveResult] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const refAnswer = useRef<HTMLDivElement>(null);
    const dataAnswerPosition = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
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
        if (refAnswer.current) {
            const data = refAnswer.current.getBoundingClientRect();
            dataAnswerPosition.top = Math.round(data.top - stateY.current);
            dataAnswerPosition.left = Math.round(data.left - stateX.current);
            dataAnswerPosition.bottom = Math.round(dataAnswerPosition.top + data.height);
            dataAnswerPosition.right = Math.round(dataAnswerPosition.left + data.width);
        }

    })

    let targetDrag: HTMLElement | undefined;
    const [targetDragLast, setTargetDrag] = useState<HTMLElement | null>(null);

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
            if (targetDrag.style.position === "absolute") {
                targetDrag.style.position = "static";
                targetDrag.style.left = "auto";
                targetDrag.style.top = "auto";
                selectAnswer(false);
                startClick.current = false;
                return;
            }
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
            if ((((dataAnswerPosition.top - 10 < y) && (dataAnswerPosition.bottom + 10) > y)) &&
                (dataAnswerPosition.left - 30 < x) && (dataAnswerPosition.right + 30 > x)) {
                targetDrag.style.left = dataAnswerPosition.left + "px";
                targetDrag.style.top = dataAnswerPosition.top + "px";
                if ((targetDragLast) && (targetDragLast !== targetDrag)) {
                    targetDragLast.style.position = "static";
                    targetDragLast.style.left = "auto";
                    targetDragLast.style.top = "auto";
                }

            }




        }
    }
    const dragEnd = (index: number) => {
        document.body.style.overflow = "auto";
        end(index);

    }



    const mouseUp = (index: number) => {
        if (!startClick.current) return;
        startClick.current = false;
        end(index);

    }
    const end = (index: number) => {
        if (targetDrag) {
            if ((targetDrag.offsetTop !== dataAnswerPosition.top) || (targetDrag.offsetLeft !== dataAnswerPosition.left)) {
                targetDrag.style.left = "auto";
                targetDrag.style.top = "auto";
                targetDrag.style.position = "static";
                return;
            }

        }
        selectAnswer(true);
        if (targetDrag) setTargetDrag(targetDrag);
        const answerUser: IAnswerUser = {
            arrAnswer: active,
            answerInfo: {
                answer: index + "",
                correct: false
            }
        }
        if (index === 1) {
            dispatch(setCheckAnswer("true"));
            setSaveResult(true);
            answerUser.answerInfo.correct = true;
            dispatch(addAnswer(answerUser))
        } else {
            dispatch(setCheckAnswer("false"));
            setSaveResult(false);
            dispatch(addAnswer(answerUser))
        }
    }

    const mouseOut = (index: number) => {

        if (!startClick.current) return;
        startClick.current = false;
        end(index);

    }

    return (
        <>
            <div className={styles.taskInfo} ref={ref}>
                {checkClick && <OpacityTask />}
                <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Перетащи верное количество нулей в ячейку</h4>
                <div className={styles.task}>
                    <div className={styles.taskAnswer}>
                        <span>
                            1
                        </span>
                        <div className={styles.answer} ref={refAnswer}>

                        </div>
                        <span>+</span>
                    </div>
                </div>
                <div className={styles.taskZeros}>
                    {arrAnswers.map((item, index) => {
                        return <div key={item.value}>
                            <div
                                onMouseLeave={() => mouseOut(index)}
                                onMouseDown={(e) => mouseStart(e)}
                                onMouseMove={(e) => mouseMove(e)}
                                onMouseUp={() => mouseUp(index)}
                                onTouchStart={(e) => dragStart(e)}
                                onTouchMove={(e) => dragMove(e)}
                                onTouchEnd={() => dragEnd(index)}
                                className={styles.zero + " " + (item.answer ? styles.none : "") + " " + (
                                    checkClick ? saveResult ? styles.success : styles.danger : ""
                                )} style={index === 3 ? { width: "128px" } : { width: "auto" }}>{item.value}</div></div>
                    })}
                </div>


            </div>
        </>
    )
}

export default Task21;