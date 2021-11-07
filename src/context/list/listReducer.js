import {
    ADD_TASK,
    REMOVE_TASK,
    SET_COMPLETED,
    SET_CURRENT,
    MOVE_ACTIVE,
    MOVE_COMPLETED
} from '../types';

const listReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                list: [...state.list, {
                    id: Date.now(),
                    task: action.payload,
                    completed: false
                }],
                active: [...state.list, {
                    id: Date.now(),
                    task: action.payload,
                    completed: false
                }]
            };
        case REMOVE_TASK:
            return {
                ...state,
                list: [...state.list.filter(task => task.id !== action.payload)],
                active: [...state.active.filter(task => task.id !== action.payload)],
                completed: [...state.completed.filter(task => task.id !== action.payload)]
            };
        case SET_COMPLETED:
            const newList = state.list.map(task => {
                if (task.id === action.payload) {
                    return { ...task, completed: !task.completed }
                } else {
                    return task;
                }
            });
            const newActive = state.active.map(task => {
                if (task.id === action.payload) {
                    return { ...task, completed: !task.completed }
                } else {
                    return task;
                }
            });
            const newCompleted = state.completed.map(task => {
                if (task.id === action.payload) {
                    return { ...task, completed: !task.completed }
                } else {
                    return task;
                }
            });
            return {
                ...state,
                list: newList,
                active: [...newActive.filter(task => task.completed === false)],
                completed: [...newCompleted.filter(task => task.completed === true)]
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case MOVE_ACTIVE:
            return {
                ...state,
                active: [...state.list.filter(task => task.completed === false)]
            };
        case MOVE_COMPLETED:
            return {
                ...state,
                completed: [...state.list.filter(task => task.completed === true)]
            };
        default:
            return state;
    }
}

export default listReducer;