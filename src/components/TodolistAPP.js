import React, {useEffect} from 'react';
import style from '../App.module.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistTC, setTodolistsTC} from "../redux/todo-reducer";
import {getAuthUserData, logout} from "../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

export const TodolistAPP = (props) => {

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
                                    placeholder={'Add new to do list'}
                                    labelInput={"labelInput"}/>
                </div>
                <div>
                    <span className={style.title}>to do list app</span>
                </div>
                <div className={style.banner}>
                    {props.isAuth ? <div className={style.logFrom}>
                            <h3 className={style.name}>{props.login}</h3>
                            <span className={style.logoutBtn} onClick={() => props.logout()}>Logout</span>
                        </div> :
                        <Redirect to='/login'/>
                    }
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
        todolists: state.todo.todolists,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};


export default compose(
    connect(mapStateToProps, {
        addTodolistTC,
        setTodolistsTC,
        getAuthUserData,
        logout
    }),
    withRouter,
)(TodolistAPP);