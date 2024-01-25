import React from 'react';
import TaskItem from "./TaskItem";

const ListOfLists = ({tasks, deleteTask, updateTask}) => {

    return (
        <div className="lists_container">
            {tasks.map(task =>
                <TaskItem
                    id={task.id}
                    text={task.text}
                    isComplete={task.isComplete}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    key={task.id}
                />
            )}
        </div>
    );
};

export default ListOfLists;