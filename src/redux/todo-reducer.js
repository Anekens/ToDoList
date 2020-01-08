import {api} from "../api/api";

export const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const ADD_TASK = "TodoList/Reducer/ADD-TASK";
export const SET_TASKS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";
export const UPDATE_TODOLIST = "TodoList/Reducer/UPDATE_TODOLIST";

const initialState = {
    "todolists": []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            };
        case SET_TODOLISTS:

            return {
                ...state,
                todolists: action.todolists.map(tl => {
                    return {...tl, tasks: [] }
                })
            };
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            };
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {

                            ...tl, title: action.newTitle
                        }
                    } else {
                        return tl
                    }
                })
            }
    }
    return state;
};

const updateTaskAC = (taskId, obj, todolistId) => {

    return {type: UPDATE_TASK, taskId, obj, todolistId};
};
const updateTodolistAC = (todolistId, newTitle) => {

    return {type: UPDATE_TODOLIST, todolistId, newTitle};

};
const setTasksAC = (tasks, todolistId) => {
    return {type: SET_TASKS, tasks, todolistId};
};
const deleteTodolistAC = (todolistId) => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
};
const deleteTaskAC = (taskId, todolistId) => {
    return {
        type: DELETE_TASK,
        taskId,
        todolistId

    };
};
const addTaskAC = (newTask, todolistId) => ({type: ADD_TASK, newTask, todolistId});

const addTodolistAC = (newTodolist) => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    }
};
const setTodolistsAC = (todolists) => {
    return {
        type: SET_TODOLISTS,
        todolists: todolists
    }
};

export const addTaskTC = (newText, todolistId) => {
    return (dispatch) => {
        api.createTask(newText, todolistId).then(res => {
            let newTask = res.data.data.item;
            dispatch(addTaskAC(newTask, todolistId))
        })
    }
};

export const deleteTaskTC = (taskId, todolistId) => {
    return (dispatch) => {
        api.deleteTask(taskId, todolistId).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(deleteTaskAC(taskId, todolistId))
            }
        })
    }
};

export const deleteTodolistTC = (todolistId) => {
    return (dispatch) => {
        api.deleteTodolist(todolistId).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(deleteTodolistAC(todolistId))
            }
        })
    }
};

export const setTodolistsTC = () => {
    return (dispatch) => {
        api.getTodolists().then(res => {
            dispatch(setTodolistsAC(res.data))
        })
    }
};

export const setTasksTC = (todolistId) => {
    return (dispatch) => {
        api.getTasks(todolistId).then(res => {
            dispatch(setTasksAC(res.data.items, todolistId))
        })
    }
};

export const updateTaskTC = (taskId, obj, todolistId) => {
    return (dispatch, getState) => {
        getState()
            .todo.todolists.find(tl => tl.id === todolistId)
            .tasks.forEach(t => {

            if (t.id === taskId) {
                api.updateTask({...t, ...obj}).then(() => {
                    dispatch(updateTaskAC(taskId, obj, todolistId))
                })
            }
        })
    }
};

export const updateTodolistTC = (todolistId, newTitle) => {
    return (dispatch, getState) => {
        getState()
            .todo.todolists.forEach(tl => {
            if (tl.id === todolistId) {
                api.updateTitleTodolist(tl.id, newTitle).then((res) => {
                                        if (res.data.resultCode === 0) {
                        dispatch(updateTodolistAC(todolistId, newTitle))
                    }
                })
            }
        })
    }
};


export const addTodolistTC = (title) => {
    return (dispatch) => {
        api.createTodolist(title).then(res => {
            dispatch(addTodolistAC(res.data.data.item))
        })
    }
};


export default todoReducer;
