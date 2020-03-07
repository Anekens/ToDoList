import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {todoReducer} from "./todo-reducer";
import {authReducer} from "./auth-reducer";


const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    todo: todoReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;
export default store