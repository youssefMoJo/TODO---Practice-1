import { useState } from "react"
import './AddNewTodo.css';
import GradientBG from "./GradientBG"

const AddNewTodo = () => {
    const [todoMessage, setTodoMessage] = useState("")

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            setTodoMessage("")
            e.preventDefault();
        }
    }

    const handleMessageChange = event => {
        setTodoMessage(event.target.value);
    };


    return (
        <div>
            <textarea
                className="AddNewTodo"
                placeholder=" What do you want to do!"
                onKeyDown={onEnterPress}
                value={todoMessage}
                onChange={handleMessageChange}
            >
            </textarea>
            <GradientBG />

        </div>
    )
}

export default AddNewTodo