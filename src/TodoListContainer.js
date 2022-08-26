import { useState } from 'react';
import './TodoListContainer.css';

const TodoListContainer = (props) => {
    let todoList = props.todoList
    const [deleteButtonStatus, setDeleteButtonStatus] = useState("deleteButtonHide")

    const removeTodoElementId = (key) => {
        props.removeTodoElementId(key)
    }
    const showTheDeleteButton = (status) => {
        if (status === "enter") {
            setDeleteButtonStatus("deleteButtonShow")
        } else {
            setDeleteButtonStatus("deleteButtonHide")
        }
    }

    return (
        <div className={props.todoListContainerStatus}>

            {todoList.map((todoElement, key) => {
                return <div
                    onMouseEnter={() => showTheDeleteButton("enter")}
                    onMouseLeave={() => showTheDeleteButton("leave")}
                    className="todoElement"
                    // onClick={() => removeTodoElementId(key)}
                    key={key}
                >
                    <input type="checkbox" id="ossm" name="ossm" />
                    <label > {todoElement}</label>
                    <div id={deleteButtonStatus} className="deleteTodoButton">
                        X
                    </div>
                </div>
            })}

        </div>
    )
}

export default TodoListContainer