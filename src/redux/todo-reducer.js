import {api} from "../api/api";

const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
const ADD_TASK = "TodoList/Reducer/ADD-TASK";
const SET_TASKS = "TodoList/Reducer/SET_TASKS";
const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";
const UPDATE_TODOLIST = "TodoList/Reducer/UPDATE_TODOLIST";
const SET_ERROR = "TodoList/Reducer/SET_ERROR";
const SET_LOADING = "TodoList/Reducer/SET_LOADING";

const initialState = {
    "todolists": [],
    error: null,
    loading: false
};

export const todoReducer = (state = initialState, action) => {
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
                    return {...tl, tasks: []}
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
            };
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        default:
            return state;
    }
};

const setError = (errorMessage) => ({type: SET_ERROR, error: errorMessage});
const setLoading = (loading) => ({type: SET_LOADING, loading});
const setUpdatingTask = (taskId, obj, todolistId) => ({type: UPDATE_TASK, taskId, obj, todolistId});
const setUpdatingTodolist = (todolistId, newTitle) => ({type: UPDATE_TODOLIST, todolistId, newTitle});
const setTasks = (tasks, todolistId) => ({type: SET_TASKS, tasks, todolistId});
const setDeletingTodolist = (todolistId) => ({type: DELETE_TODOLIST, todolistId});
const setDeletingTask = (taskId, todolistId) => ({type: DELETE_TASK, taskId, todolistId});
const setAddingTask = (newTask, todolistId) => ({type: ADD_TASK, newTask, todolistId});
const setAddingTodolist = (newTodolist) => ({type: ADD_TODOLIST, newTodolist});
const setTodolists = (todolists) => ({type: SET_TODOLISTS, todolists});

export const addTodolist = (title) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await api.createTodolist(title);
        if (data.resultCode === 0) {

            dispatch(setAddingTodolist(data.data.item))
        } else {
            dispatch(setError(data.messages[0]));
        }
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};

export const addTask = (newText, todolistId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await api.createTask(newText, todolistId);
        if (data.resultCode === 0) {
            let newTask = data.data.item;
            dispatch(setAddingTask(newTask, todolistId))
        } else {
            dispatch(setError(data.messages[0]));
        }
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};

export const deleteTask = (taskId, todolistId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await api.deleteTask(taskId, todolistId);
        if (data.resultCode === 0) {
            dispatch(setDeletingTask(taskId, todolistId))
        } else {
            dispatch(setError(data.messages[0]));
        }
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};


export const deleteTodolist = (todolistId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await api.deleteTodolist(todolistId);
        if (data.resultCode === 0) {
            dispatch(setDeletingTodolist(todolistId))
        } else {
            dispatch(setError(data.messages[0]));
        }
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};

export const getTodolists = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await api.getTodolists();
        dispatch(setTodolists(data))
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};

export const getTasks = (todolistId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await api.getTasks(todolistId);
        dispatch(setTasks(data.items, todolistId))
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};

export const updateTask = (taskId, obj, todolistId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
        for (const t of getState().todo.todolists.find(tl => tl.id === todolistId).tasks) {
            if (t.id === taskId) {
                const data = await api.updateTask({...t, ...obj});
                if (data.resultCode === 0) {
                    dispatch(setUpdatingTask(taskId, obj, todolistId))
                }
            }
        }
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};

export const updateTodolist = (todolistId, newTitle) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
        for (const tl of getState().todo.todolists) {
            if (tl.id === todolistId) {
                const data = await api.updateTitleTodolist(tl.id, newTitle);
                if (data.resultCode === 0) {
                    dispatch(setUpdatingTodolist(todolistId, newTitle))
                }
            }
        }
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(setLoading(false))
    }
};





