import { useState } from 'react';
import './TodoListContainer.css';

const TodoListContainer = (props) => {
    let todoList = props.todoList

    const [deleteButtonStatus, setDeleteButtonStatus] = useState("deleteButtonHide")
    const [tests, settest] = useState([{
        0: { "text": "hala0", "checked": false, "deleteButtonAppear": false },
        1: { "text": "hala1", "checked": false, "deleteButtonAppear": false },
        2: { "text": "hala2", "checked": false, "deleteButtonAppear": false },
        3: { "text": "hala3", "checked": false, "deleteButtonAppear": false },
    }])
    const removeTodoElementId = (key) => {
        props.removeTodoElementId(key)
    }


    const showTheDeleteButton = (status, index) => {
        if (status === "enter") {
            setDeleteButtonStatus("deleteButtonShow")
            let tempObj = tests[0]
            tempObj[index].deleteButtonAppear = true
            settest([{ ...tempObj }])
        } else {
            setDeleteButtonStatus("deleteButtonHide")
            let tempObjs = tests[0]
            tempObjs[index].deleteButtonAppear = false
            settest([{ ...tempObjs }])
        }
    }

    return (
        <div className={props.todoListContainerStatus}>
            {todoList.map((todoObj, index) => {
                return <div
                    onMouseEnter={() => showTheDeleteButton("enter", index)}
                    onMouseLeave={() => showTheDeleteButton("leave", index)}
                    className="todoElement"
                    key={index}
                >
                    <input type="checkbox" id="ossm" name="ossm" />
                    <label > {todoObj.text}</label>
                    {
                        tests[0][index].deleteButtonAppear
                            ?
                            <div onClick={() => removeTodoElementId(index)} id={deleteButtonStatus} className="deleteTodoButton">
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