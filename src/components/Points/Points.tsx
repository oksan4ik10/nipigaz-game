import './Points.css'
function Points() {

  return (
    <>
        <div className="main__points points">
            <img src="/src/assets/images/logo.svg" alt="logo" className="points__logo"/>
            <div className="points__balance">
                <p className="points__title">БАЛАНС</p>
                <span className="points__num">1400</span>
            </div>
        </div>
    </>
  )
}

export default Points
