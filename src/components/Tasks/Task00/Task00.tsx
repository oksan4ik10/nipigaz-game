import './Task00.css'
interface IProps {
    changePoints: (data: number) => void;
}

function Task00(props: IProps) {

    const answerUser = () =>{
        props.changePoints(100);
    }

  return (
    <>
        <div className="main__task task">
            <div className="task__wrapper">
                <div className="task__head">
                    <div className="task__heading">
                        <div className="task__points">100</div>
                        <h3 className="task__title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sit laudantium voluptatibus. Doloribus exercitationem voluptates quo laudantium quas est ullam </h3>
                    </div>
                </div>

                <div className="task__info">
                        <h4 className="task__subtitle">Расположи полузнок на верной цифре</h4>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, dolor?

                </div>
                <button className="btn task__btn" onClick={answerUser}>ГОТОВО</button>

            </div>
        </div>
    </>
  )
}

export default Task00;