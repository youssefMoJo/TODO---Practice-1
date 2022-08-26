import { useState } from "react"
import './AddNewTodo.css';
import GradientBG from "./GradientBG"
import TodoListContainer from "./TodoListContainer"

const AddNewTodo = () => {
    const [todoMessage, setTodoMessage] = useState("")
    const [todoList, setTodoList] = useState([])
    let todoListClassStatus = todoList.length > 0 ? "TodoListContainerShow" : "TodoListContainerHide"

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            setTodoList(() => [...todoList, todoMessage])
            setTodoMessage("")
            e.preventDefault();
        }
    }

    const handleMessageChange = event => {
        setTodoMessage(event.target.value);
    };

    const removeTodoElementId = (id) => {
        todoList.splice(id, 1)
        setTodoList([...todoList])
    }

    return (
        <div>
            <textarea
                className="AddNewTodo"
                placeholder=" What do you want to do!"
                onKeyDown={onEnterPress}
                value={todoMessage}
                onChange={handleMessageChange}
                maxLength="50"
            >
            </textarea>
            <GradientBG />
            <TodoListContainer
                todoListContainerStatus={todoListClassStatus}
                todoList={todoList}
                removeTodoElementId={removeTodoElementId}
            />
        </div>
    )
}

export default AddNewTodo