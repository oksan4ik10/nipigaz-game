import { useAppSelector } from '../store/store';

import { TaskAnswer00 } from '../components/Tasks/Task00/TaskAnswer00';
import { TaskAnswer01 } from '../components/Tasks/Task01/TaskAnswer01';
import { TaskAnswer02 } from '../components/Tasks/Task02/TaskAnswer02';
import { TaskAnswer03 } from '../components/Tasks/Task03/TaskAnswer03';
import { TaskAnswer10 } from '../components/Tasks/Task10/TaskAnswer10';
import { TaskAnswer11 } from '../components/Tasks/Task11/TaskAnswer11';
import { TaskAnswer12 } from '../components/Tasks/Task12/TaskAnswer12';
import { TaskAnswer13 } from '../components/Tasks/Task13/TaskAnswer13';
import { TaskAnswer20 } from '../components/Tasks/Task20/TaskAnswer20';
import { TaskAnswer21 } from '../components/Tasks/Task21/TaskAnswer21';
import { TaskAnswer22 } from '../components/Tasks/Task22/TaskAnswer22';
import { TaskAnswer23 } from '../components/Tasks/Task23/TaskAnswer23';
import { TaskAnswer30 } from '../components/Tasks/Task30/TaskAnswer30';
import { TaskAnswer31 } from '../components/Tasks/Task31/TaskAnswer31';
import { TaskAnswer32 } from '../components/Tasks/Task32/TaskAnswer32';
import { TaskAnswer33 } from '../components/Tasks/Task33/TaskAnswer33';
import TaskEnd from '../components/Tasks/TaskEnd/TaskEnd';

interface IProps {
    correct: boolean;
}

export const TaskAnswer = (props:IProps) => {
    const {correct} = props;
    const arrActive = useAppSelector((state)=>state.activeQuestion).activeQuestion;
    const active = arrActive.join("");
    const arrAnswers = useAppSelector((state) => state.answersReducer).arrAnswers
    let answerUser = "";
    if(arrActive[0] !== 4) answerUser = arrAnswers[arrActive[0]][arrActive[1]].answer;

    switch (active) {
        case "00":{
            return <TaskAnswer00 correct = {correct} answer = {answerUser}/>;
        }
        case "01":{
            return <TaskAnswer01 correct = {correct} answer = {answerUser}/>;
        }
        case "02":{
            return <TaskAnswer02 correct = {correct} answer = {answerUser}/>;
        }
        case "03":{
            return <TaskAnswer03 correct = {correct} answer = {answerUser}/>;
        }
        case "10":{
            return <TaskAnswer10 correct = {correct} answer = {answerUser}/>;
        }
        case "11":{
            return <TaskAnswer11 correct = {correct} answer = {answerUser}/>;
        }
        case "12":{
            return <TaskAnswer12 correct = {correct} answer = {answerUser}/>;
        }
        case "13":{
            return <TaskAnswer13 correct = {correct} answer = {answerUser}/>;
        }
        case "20":{
            return <TaskAnswer20 correct = {correct} answer = {answerUser}/>;
        }
        case "21":{
            return <TaskAnswer21 correct = {correct} answer = {answerUser}/>;
        }
        case "22":{
            return <TaskAnswer22 correct = {correct} answer = {answerUser}/>;
        }
        case "23":{
            return <TaskAnswer23 correct = {correct} answer = {answerUser}/>;
        }
        case "30":{
            return <TaskAnswer30 correct = {correct} answer = {answerUser}/>;
        }
        case "31":{
            return <TaskAnswer31 correct = {correct} answer = {answerUser}/>;
        }
        case "32":{
            return <TaskAnswer32 correct = {correct} answer = {answerUser}/>;
        }
        case "33":{
            return <TaskAnswer33 correct = {correct} answer = {answerUser}/>;
        }
        case "44":{
            return <TaskEnd/>;
        }
    }
    

}