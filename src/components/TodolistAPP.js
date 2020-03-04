import React, {useEffect} from 'react';
import style from '../App.module.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistTC, setTodolistsTC} from "../redux/todo-reducer";
import {getAuthUserData, logout} from "../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {Icon} from "antd";
import 'antd/dist/antd.css'

export const TodolistAPP = (props) => {

    useEffect(() => {
        props.setTodolistsTC();
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
                <div className={style.form}>
                    <AddNewItemForm addItem={addTodoList}
                                    placeholder={'Add new to do list'}
                                    labelInput={"labelInput"}/>
                </div>
                <div className={style.logout}>
                    {props.isAuth

                        ? <Icon type="logout"
                                style={{
                                    color: '#1890ff',
                                    fontSize: '24px'
                                }}
                                onClick={() => props.logout()}/>
                        : <Redirect to={'/login'}/>
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
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
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