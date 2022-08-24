import { useState } from "react"

const AddNewTodo = () => {
    const [todoMessage, setTodoMessage] = useState("")

    const textareaStyles = {
        width: "25%",
        position: "absolute",
        marginLeft: "37.5%",
        marginTop: "200px",
        borderRadius: "20px",
        paddingTop: "15px",
        paddingLeft: "10px",
        resize: "none",
        outline: "none",
        borderWidth: "3.5px",
        borderColor: "rgb(20,80,100)",
    }


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
        <textarea
            style={{ ...textareaStyles }}
            placeholder=" What do you want to do!"
            onKeyDown={onEnterPress}
            value={todoMessage}
            onChange={handleMessageChange}
        >
        </textarea>

    )
}

export default AddNewTodo