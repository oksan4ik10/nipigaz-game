import './Points.css'
import { useAppSelector } from '../../store/store';

function Points() {

  const {points} = useAppSelector((state)=>state.points);
  return (
    <>
        <div className="main__points points">
            <img src="/src/assets/images/logo.svg" alt="logo" className="points__logo"/>
            <div className="points__balance">
                <p className="points__title">БАЛАНС</p>
                <span className="points__num">{points}</span>
            </div>
        </div>
    </>
  )
}

export default Points
