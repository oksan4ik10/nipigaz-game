import './Points.css'
import { useAppSelector } from '../../store/store';
import imgLogoUrl from '../../assets/images/logo.svg';

interface IProps{
  tasksEnd: boolean;
}

function Points(props: IProps) {
  const {tasksEnd} = props;

  const {points} = useAppSelector((state)=>state.points);
  return (
    <>
        <div className="main__points points">
            <img src={imgLogoUrl} alt="logo" className="points__logo"/>
            <div className={"points__balance " + (tasksEnd ? "end" : "")}>
                <p className="points__title">БАЛАНС</p>
                <span className="points__num">{points}</span>
            </div>
        </div>
    </>
  )
}

export default Points
