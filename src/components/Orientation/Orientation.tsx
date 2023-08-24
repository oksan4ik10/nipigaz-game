import './Orientation.css'
import imgLogoUrl from '../../assets/images/logo.svg';
import imgOrientationUrl from '../../assets/images/orientation.svg';
import { useState } from 'react';

function Orientation() {
    const [startGame, setStart] = useState(false);

    const start = () =>{
        setStart(true);
    }

  return (
    <>
        <div className={"orientation " + (startGame ? "active": "no-active")}>
            <div className="orientation__logo">
                <img src={imgLogoUrl} alt="logo" className="main__logo-img"/>
            </div>
            <div className="orientation__vertical">
                <img src={imgOrientationUrl} alt="orientation" className="orientation__img"/>
                <h2 className="orientation__title">Поверни телефон, чтобы {startGame ? "продолжить": "начать"} игру</h2>
            </div>
            <button className="main__btn btn" onClick={start}>НАЧАТЬ</button>
        </div>
    </>
  )
}

export default Orientation
