import './Points.css'

interface IProps {
  val: number;
}
function Points(props: IProps) {

  const {val} = props;
  

  return (
    <>
        <div className="main__points points">
            <img src="/src/assets/images/logo.svg" alt="logo" className="points__logo"/>
            <div className="points__balance">
                <p className="points__title">БАЛАНС</p>
                <span className="points__num">{val}</span>
            </div>
        </div>
    </>
  )
}

export default Points
