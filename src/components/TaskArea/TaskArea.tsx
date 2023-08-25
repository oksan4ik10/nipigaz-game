import './TaskArea.css'
function TaskArea() {

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
                <button className="btn task__btn">ГОТОВО</button>

            </div>
        </div>
    </>
  )
}

export default TaskArea