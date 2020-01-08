import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import todoReducer from "./todo-reducer";


const reducers = combineReducers({

    auth: authReducer,
    form: formReducer,
    app: appReducer,
    todo:todoReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window._store_ = store;

export default store