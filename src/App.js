import React, {useEffect} from 'react';
import style from './App.module.css';
import TodoList from "./components/TodoList";
import AddNewItemForm from "./components/AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistTC, setTodolistsTC} from "./redux/reducer";

export const App = (props) => {

    useEffect(() => {
        const fetchData = async () => {
            await props.setTodolistsTC();
        };
        fetchData();
    }, []);

    const addTodoList = (title) => {
        props.addTodolistTC(title);
    };

    const todolists = props
        .todolists
        .map(tl => <TodoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tl.tasks}
            addedDate={tl.addedDate}/>);
    return (
        <>
            <div className={style.header}>
                <div>
                    <AddNewItemForm addItem={addTodoList}
                                    placeholder={'Add new to do list'}/>
                </div>
                <div>
                    <span className={style.title}>to do list app</span>
                </div>
            </div>
            <div className={style.App}>
                {todolists}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};

const ConnectedApp = connect(mapStateToProps, {addTodolistTC, setTodolistsTC})(App);
export default ConnectedApp;

