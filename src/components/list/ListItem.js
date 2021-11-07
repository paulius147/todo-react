import React, { useContext } from 'react';
import ListContext from '../../context/list/listContext';

const ListItem = ({ task }) => {
    const listContext = useContext(ListContext);
    const { removeTask, setCompleted } = listContext;

    const remove = () => {
        removeTask(task.id);
    }

    const check = () => {
        setCompleted(task.id);
    }

    return (
        <div className="list-item">
            <div className="task">
                <label style={task.completed === true ? { textDecoration: "line-through" } : { textDecoration: "none" }}><input onChange={check} type="checkbox" name={task.task} value={task.task} checked={task.completed} />{task.task}</label>
            </div>
            <i onClick={remove} className="delete-task fas fa-times"></i>
        </div>
    )
}

export default ListItem;