import { useAppSelector } from '../../../store/store';
import styles from "./TaskEnd.module.css"



function TaskEnd() {
const points = useAppSelector((state)=>state.points).points;
  return (
    <>

                <div className={styles.task__info}>
                  
                        <h4 className={styles.subtitels}>Баланс </h4>
                        <p className={styles.points}>{points}</p>

                </div>
            </>
  )
}

export default TaskEnd;