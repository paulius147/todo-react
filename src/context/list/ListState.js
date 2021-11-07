import React, { useReducer, useEffect } from "react";
import ListReducer from './listReducer';
import ListContext from './listContext';
import {
    ADD_TASK,
    REMOVE_TASK,
    SET_COMPLETED,
    SET_CURRENT,
    MOVE_ACTIVE,
    MOVE_COMPLETED
} from '../types';

const ListState = props => {
    const initialState = {
        list: [],
        active: [],
        completed: [],
        current: 'All'
    };

    const [state, dispatch] = useReducer(ListReducer, initialState, () => {
        const localData = localStorage.getItem('state');
        return localData ? JSON.parse(localData) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

    // ADD TASK
    const addTask = (task) => {
        dispatch({ type: ADD_TASK, payload: task });
    }

    // REMOVE TASK
    const removeTask = (task) => {
        dispatch({ type: REMOVE_TASK, payload: task });
    }

    // SET COMPLETED
    const setCompleted = (param) => {
        dispatch({ type: SET_COMPLETED, payload: param });
    }

    // SET CURRENT
    const setCurrent = (curr) => {
        dispatch({ type: SET_CURRENT, payload: curr });
    }

    // MOVE ACTIVE
    const moveActive = () => {
        dispatch({ type: MOVE_ACTIVE });
    }

    // MOVE COMPLETED
    const moveCompleted = () => {
        dispatch({ type: MOVE_COMPLETED });
    }

    return (
        <ListContext.Provider
            value={{
                list: state.list,
                active: state.active,
                completed: state.completed,
                isCompleted: state.isCompleted,
                current: state.current,
                addTask,
                removeTask,
                setCompleted,
                setCurrent,
                moveActive,
                moveCompleted
            }}
        >
            {props.children}
        </ListContext.Provider>
    )
}

export default ListState;