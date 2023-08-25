import './GameArea.css'
function GameArea() {
    const arrQuestionsPoints = [["деятельность", 100, 200, 300, 400], ["география", 100, 200, 300, 400],["цифры и даты", 100, 200, 300, 400],["работа у нас", 100, 200, 300, 400],]

  return (
    <>
            <div className="main__game game">
                {arrQuestionsPoints.map((arr, arrIndex)=>{
                    return arr.map((item, index)=>{
                        return index === 0 ? <div className="game__category" key={index}>{item}</div> :
                        <div className={"game__item" + (item === 0 ? " disable" : "")} key={arrIndex + " " + index}>{index*100}</div>
                    })
                })}
        </div>
    </>
  )
}

export default GameArea
