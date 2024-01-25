import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/button/MyButton";

const AddForm = ({type, create}) => {
    const [text, setText] = useState({title: ""})
    const add = (e) => {
        e.preventDefault()
        const newItem = {...text, id: Date.now()}
        create(newItem.title)
        setText({title: ""})
    }
    const close = () => {

    }
    let action
    if (type === "list"){
        action = "Создать список"
    }
    if (type === "update"){
        action = "Сохранить"
    }
    else action = "Добавить"
    return (
        <form className="form">
            <MyInput
                value={text.title}
                onChange={e => setText({...text, title: e.target.value})}
                type="text"
                placeholder={type === "task" ? "Задача..." : "Название Списка..."}
            />
            <MyButton onClick={add}>{action}</MyButton>
        </form>
    );
};

export default AddForm;