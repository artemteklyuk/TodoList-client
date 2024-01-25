import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import UpdateForm from "./updateForm";
import {observer} from "mobx-react-lite";

const TaskItem = observer(({id, text, isComplete, deleteTask, updateTask}) => {
    const [modal, setModal] = useState(false)
    const chk = () => {
        updateTask(id, text, !isComplete)
    }
    return (
        <div className="item">
            <div className="task__header">
                <input
                    className={"task__checkbox"}
                    onClick={chk}
                    type="checkbox"
                    checked={isComplete}/>
                <div className={"text"}>
                    <p>{text}</p>
                </div>

            </div>
            <div className="item__btns">
                <button
                    className={"task__button_change"}
                    onClick={() => setModal(true)}
                >
                </button>
                <MyModal
                    visible={modal}
                    setvisible={setModal}
                >
                    <UpdateForm
                        id={id}
                        isComplete={isComplete}
                        type={"update"}
                        update={updateTask}
                        setModal={setModal}
                    />
                </MyModal>
                <button
                    className={"task__button_delete"}
                    onClick={() => deleteTask(id)}></button>
            </div>
        </div>
    )
        ;
});

export default TaskItem;