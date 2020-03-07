import React, {useEffect} from 'react';
import style from '../App.module.css';
import {TodoList} from "./TodoList";
import {AddNewItemForm} from "./AddNewItemForm";
import {useDispatch, useSelector} from "react-redux";
import {addTodolist, getTodolists} from "../redux/todo-reducer";
import {logout} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Icon} from "antd";
import 'antd/dist/antd.css'

export const TodolistAPP = () => {

    const {success} = useSelector((store) => store.auth);
    const {todolists = [],loading} = useSelector((store) => store.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodolists());
    }, [dispatch]);

    const addTodoList = (title) => {
        dispatch(addTodolist(title));
    };

    const todolistsItems = todolists.map(tl => <TodoList
        key={tl.id}
        id={tl.id}
        title={tl.title}
        tasks={tl.tasks}
        addedDate={tl.addedDate}/>);

    return (
        <> <div>{loading && "loading..."}</div>
            <div className={style.header}>
                <div className={style.form}>
                    <AddNewItemForm addItem={addTodoList}
                                    placeholder={'Add new to do list'}
                                    labelInput={"labelInput"}/>
                </div>
                <div className={style.logout}>
                    {success
                        ? <Icon type="logout"
                                style={{
                                    color: '#1890ff',
                                    fontSize: '24px'
                                }}
                                onClick={() => dispatch(logout())}/>
                        : <Redirect to={'/login'}/>
                    }
                </div>
            </div>
            <div className={style.App}>
                {todolistsItems}
            </div>
        </>
    );
};



