import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/button/MyButton";

const UpdateForm = ({update, id, isComplete, setModal}) => {
    const [text, setText] = useState({title: ""})
    const upd = (e) => {
        e.preventDefault()
        const newItem = {...text, id: Date.now()}
        console.log(id, newItem.title, isComplete)
        update(id, newItem.title, isComplete)
        setText({title: ""})
        setModal(false)
    }

    return (
        <form>
            <MyInput
                value={text.title}
                onChange={e => setText({...text, title: e.target.value})}
                type="text"
                placeholder={"Задача..."}
            />
            <MyButton onClick={upd}>Сохранить</MyButton>
        </form>
    );
};

export default UpdateForm;