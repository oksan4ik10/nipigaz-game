import styles from "./Task12.module.css";
import { useRef, useState } from 'react';
import {useAppDispatch } from '../../../store/store';
import { setCheckAnswer } from '../../../store/reducers/checkAnswerReducer';
import imgUrlHour from "../../../assets/images/numbers/hour.svg";
import { OpacityTask } from "../../../utils/OpacityTask/OpacityTask";
interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
}

function Task12(props: IProps) {

    const dispatch = useAppDispatch();
    const {selectAnswer, checkClick} = props;

    const rotate = useRef(0);
    const origin = useRef(50)
    const styleTransform = {
        transformOrigin: `${origin.current}% 50%`

    }
    const arrAnswers = useRef( [{value: 1, check: false, deg: 120}, 
        {value: 2, check: false, deg: 150},
        {value: 3, check: false, deg: 180},
        {value: 4, check: false, deg: 210},
        {value: 5, check: false, deg: 240},
        {value: 6, check: false, deg: 270},
        {value: 7, check: false, deg: 300},
        {value: 8, check: false, deg: 330},
        {value: 9, check: true, deg: 0},
        {value: 10, check: false, deg: 30},
        {value: 11, check: false, deg: 60},
        {value: 12, check: false, deg: 90}]);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [newUserCheck, setNewUserCheck] = useState(0);

    let targetData : HTMLElement|null;

    const dragStart = (e: React.TouchEvent<HTMLDivElement>) =>{
        const data = e.changedTouches[0]; 
        const target = data.target as HTMLElement;
        targetData = target.closest(`.${styles.hour}`);
        setX(data.clientX);
        setY(data.clientY);
        document.body.style.overflow = "hidden";
    }
  
    const dragMove = (e: React.TouchEvent<HTMLDivElement>) =>{
        
        const data = e.changedTouches[0]; 
        const target = data.target as HTMLElement;
        targetData = target.closest(`.${styles.hour}`);
        const newX = data.clientX, newY = data.clientY;
        if(rotate.current > 180) origin.current = 55;
        else origin.current = 53;

        let newAnswer: number;
        let deg: number;
        if(rotate.current >=0){
            deg = rotate.current % 360;
         } else{
             deg = 360 + (rotate.current % 360);
         }
        const mod = Math.floor(deg / 30);

        if(deg % 30 > 15) newAnswer = mod*30 + 30;
        else newAnswer = mod*30;
        if(newAnswer === 360) newAnswer = 0;
    
    
        if(newAnswer !== newUserCheck) {
            arrAnswers.current = arrAnswers.current.map((item) => {
                if (item.deg === newAnswer) {
                    item.check = true;
                   
                }
                else item.check = false;
                return item;
            })
            setNewUserCheck(newAnswer);
        }

        


        const degMod = deg % 360;
        const chetvert = (degMod >=0 && degMod <90) ? 1 : (degMod >= 90 && degMod < 180) ? 2 : (degMod >=270) ? 4 : 3;
            if((chetvert === 1) && (x <= newX) && (y >= newY)) rotate.current = rotate.current + 2;
            else if ((chetvert === 2) && (x <= newX) && (y <= newY)) rotate.current = rotate.current + 2;
            else if ((chetvert === 3) && (x >= newX) && (y <= newY)) rotate.current = rotate.current + 2;
            else if((chetvert === 4) && (x >= newX) && (y >= newY)) rotate.current = rotate.current + 2;
            else rotate.current = rotate.current - 2;
            if(targetData) {
                targetData.style.setProperty("--rotate", `${rotate.current}deg`);
            }

    
            setX(newX);
            setY(newY);




    }
    const dragEnd = () =>{
        document.body.style.overflow = "auto";

            if(newUserCheck === 180){
                dispatch(setCheckAnswer("true"));
            } else {
                dispatch(setCheckAnswer("false"));
            }



        selectAnswer(true);


    }

  return (
    <>
                <div className={styles.taskInfo}>
                {checkClick && <OpacityTask/>}
                <div className={styles.clock} >
                    <div className={styles.numbers} >
                        {arrAnswers.current.map((item, index) => {
                        return <span data-value = {item.value} key = {index} className={item.check ? styles.check : ""}>{item.value}</span>
                        })}
                    </div>
                    <div className={styles.arrows} style={styleTransform} >
                        <div className={styles.hour} onTouchStart={(e) => dragStart(e)}
                        onTouchMove={(e) => dragMove(e)}
                        onTouchEnd={() => dragEnd()}>
                            <img src={imgUrlHour} alt="hour" />
                        </div>
                    </div>
                    <div className={styles.minutes}>
                    <svg width="63" height="95" viewBox="0 0 63 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.9235 83.1408C30.0093 83.1408 29.3999 82.5314 29.3999 81.6172C29.3999 80.7031 30.0093 80.0936 30.9235 80.0936C31.8376 80.0936 32.4471 80.7031 32.4471 81.6172C32.4471 82.5314 31.8376 83.1408 30.9235 83.1408Z" fill="#008C95"/>
                            <path d="M33.0875 78.4396C32.9139 78.6901 32.7019 78.7284 32.4898 78.7668C31.9406 78.7568 31.3146 78.3227 31.1126 77.8118C30.7855 77.2141 30.2463 76.6548 29.6586 76.4328C29.3214 76.3843 28.9842 76.3359 28.7722 76.3743C28.7722 76.3743 28.7338 76.1623 28.8206 76.0371L28.5474 17.0745C28.5574 16.5252 28.8663 15.8124 29.2136 15.3116C29.3004 15.1864 29.3872 15.0612 29.3872 15.0612L30.207 14.1464C30.4674 13.7708 31.0167 13.7808 31.3055 14.1665L32.2203 14.9862C32.6343 15.4587 33.125 16.3552 33.0281 17.0297L33.348 78.064C33.2612 78.1892 33.1743 78.3144 33.0875 78.4396Z" fill={checkClick ? "rgba(255, 255, 255, .3)": "#299EA6"}/>
                            <path d="M30.7579 0.197183L30.905 0.157751C31.386 0.186618 31.612 0.441517 31.7303 0.883015L31.7773 89.3583C31.7485 89.8392 31.4936 90.0652 31.0521 90.1835C30.5711 90.1547 30.3451 89.8998 30.2268 89.4583L30.1798 0.983019C30.2086 0.502087 30.4635 0.276049 30.7579 0.197183Z" fill="#66BABF" fillOpacity={checkClick ? ".3": "1"}/>
                            <path d="M30.5424 81.8026C30.6896 81.7632 30.8367 81.7238 30.9839 81.6843C31.7592 81.6343 32.5844 82.3596 32.4873 83.1743L32.4197 92.3409C32.4697 93.1161 31.7445 93.9414 30.9298 93.8442C30.1545 93.8942 29.3292 93.1689 29.4264 92.3543L29.4939 83.1877C29.2968 82.4518 29.9537 81.9603 30.5424 81.8026Z" fill="#66BABF" fillOpacity={checkClick ? ".3": "1"}/>
                    </svg>


                    </div>

                </div>

                        <h4 className={"task__subtitle " + (checkClick ? "answer" : "")}>Передвинь часовую стрелку в верное положение</h4>


                </div>
            </>
  )
}

export default Task12;