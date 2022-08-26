import './TodoListContainer.css';

const TodoListContainer = (props) => {
    let todoList = props.todoList

    const removeTodoElementId = (key) => {
        props.removeTodoElementId(key)
    }

    const showTheDeleteButton = (status, index) => {
        props.changeDeleteButtonStatus(status, index)

    }

    return (
        <div className={props.todoListContainerStatus}>
            {todoList.map((todoObj, index) => {
                return <div
                    onMouseLeave={() => showTheDeleteButton("leave", index)}
                    onMouseOver={() => showTheDeleteButton("enter", index)}
                    className="todoElement"
                    key={index}
                >
                    <input type="checkbox" id="ossm" name="ossm" />
                    <label > {todoObj.text}</label>

                    {
                        todoList[index].deleteButtonAppear
                            ?
                            <div onClick={() => removeTodoElementId(index)} className="deleteTodoButton">
                                X
                        </div>
                            :
                            <div> </div>
                    }

                </div>
            })}
        </div>
    )
}

export default TodoListContainer