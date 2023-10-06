import { useAppSelector } from '../../../store/store';
import styles from "./TaskEnd.module.css";
import imgUrlCode from "../../../assets/images/qr-code.png"



function TaskEnd() {
  const points = useAppSelector((state) => state.points).points;
  return (
    <>

      <div className={styles.task__info}>

        <h4 className={styles.subtitels}>Баланс </h4>
        <p className={styles.points}>{points}</p>

      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <img src={imgUrlCode} alt="qr-code" />
          <p className={styles.contactText}>
            Хочешь у нас работать?<br />Присоединяйся к команде!
          </p>
          <a href="http://career.nipigas.ru/studentam/programma-molodoy-spetsialist/ " className={styles.btnEnd}>откликнуться</a>
        </div>

      </div>
    </>
  )
}

export default TaskEnd;