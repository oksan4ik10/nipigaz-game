import { useAppSelector } from '../store/store';

import Task00 from '../components/Tasks/Task00/Task00';
import Task01 from '../components/Tasks/Task01/Task01';
import Task02 from '../components/Tasks/Task02/Task02';
import Task03 from '../components/Tasks/Task03/Task03';
import Task10 from '../components/Tasks/Task10/Task10';
import Task11 from '../components/Tasks/Task11/Task11';
import Task12 from '../components/Tasks/Task12/Task12';
import Task13 from '../components/Tasks/Task13/Task13';
import Task20 from '../components/Tasks/Task20/Task20';
import Task21 from '../components/Tasks/Task21/Task21';
import Task22 from '../components/Tasks/Task22/Task22';
import Task23 from '../components/Tasks/Task23/Task23';
import Task30 from '../components/Tasks/Task30/Task30';
import Task31 from '../components/Tasks/Task31/Task31';
import Task32 from '../components/Tasks/Task32/Task32';
import Task33 from '../components/Tasks/Task33/Task33';
import TaskEnd from '../components/Tasks/TaskEnd/TaskEnd';

interface IProps {
    selectAnswer: () => void;
    checkClick: boolean;
}

export const Task = (props:IProps) => {
    const active = useAppSelector((state)=>state.activeQuestion).activeQuestion.join("");
    console.log(active);
    
    switch (active) {
        case "00":{
            return <Task00 {...props}/>;
        }
        case "01":{
            return <Task01 {...props}/>;
        }
        case "02":{
            return <Task02 {...props}/>;
        }
        case "03":{
            return <Task03 {...props}/>;
        }
        case "10":{
            return <Task10 {...props}/>;
        }
        case "11":{
            return <Task11 {...props}/>;
        }
        case "12":{
            return <Task12 {...props}/>;
        }
        case "13":{
            return <Task13 {...props}/>;
        }
        case "20":{
            return <Task20 {...props}/>;
        }
        case "21":{
            return <Task21 {...props}/>;
        }
        case "22":{
            return <Task22 {...props}/>;
        }
        case "23":{
            return <Task23 {...props}/>;
        }
        case "30":{
            return <Task30 {...props}/>;
        }
        case "31":{
            return <Task31 {...props}/>;
        }
        case "32":{
            return <Task32 {...props}/>;
        }
        case "33":{
            return <Task33 {...props}/>;
        }
        case "44":{
            return <TaskEnd/>;
        }
    }
    

}