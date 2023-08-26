import { useAppSelector } from '../../../store/store';
import './TaskEnd.css'



function TaskEnd() {
const points = useAppSelector((state)=>state.points).points;
  return (
    <>
                <div className="task__head">
                    <div className="task__heading">
                        <h3 className="task__title ">Отличный результат!</h3>
                    </div>
                </div>

                <div className="task__info">
                        <h4 className="task__subtitle">Баланс {points}</h4>

                </div>
            </>
  )
}

export default TaskEnd;