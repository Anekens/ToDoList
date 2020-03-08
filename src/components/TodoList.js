import React, {useState, useEffect} from 'react';
import style from '../App.module.scss';
import {TodoListTasks} from "./TodoListTasks";
import {TodoListFilter} from "./TodoListFilter";
import {TodoListTitle} from "./TodoListTitle";
import {useDispatch} from "react-redux";
import {addTask, deleteTask, deleteTodolist, getTasks, updateTask, updateTodolist} from "../redux/todo-reducer";
import {AddDateForm} from "./AddDateForm";
import {AddNewItemForm} from "./AddNewItemForm";


export const TodoList = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks(props.id));
    }, [dispatch, props.id]);

    const [filterValue, setNewFilterValue] = useState('All');

    const addingTask = (newText) => {
        dispatch(addTask(newText, props.id));
    };

    const changeFilter = (filterValue) => {
        setNewFilterValue(filterValue);
    };

    const changeTask = (taskId, obj) => {
        dispatch(updateTask(taskId, obj, props.id));
    };

    const changeTodolistTitle = (newTitle) => {
        dispatch(updateTodolist(props.id, newTitle));
    };

    const changeStatus = (taskId, completed) => {
        changeTask(taskId, {completed});
    };

    const changeTitle = (taskId, title) => {
        changeTask(taskId, {title});
    };
    const changePriority = (taskId, priority) => {
        changeTask(taskId, {priority: Number(priority)});
    };
    const changeDescription = (taskId, description) => {
        changeTask(taskId, {description});
    };

    const changeStartDate = (taskId, startDate) => {
        changeTask(taskId, {startDate});
    };
    const changeDeadline = (taskId, deadline) => {
        changeTask(taskId, {deadline});
    };

    const deletingTodolist = () => {
        dispatch(deleteTodolist(props.id));
    };

    const deletingTask = (taskId) => {
        dispatch(deleteTask(taskId, props.id));
    };

    const {tasks = []} = props;

    return (
        <div className={style.todoList}>
            <div className={style.todoListHeader}>
                <TodoListTitle title={props.title}
                               onDelete={deletingTodolist}
                               changeTodolistTitle={changeTodolistTitle}
                               id={props.id}/>
                <AddNewItemForm addItem={addingTask}
                                placeholder={'Add new task'}
                                labelInput={props.id}/>
                <TodoListFilter changeFilter={changeFilter} filterValue={filterValue}/>
                <AddDateForm addedDate={props.addedDate}/>
            </div>
            <TodoListTasks changeStatus={changeStatus}
                           changeTitle={changeTitle}
                           deleteTask={deletingTask}
                           changePriority={changePriority}
                           changeDescription={changeDescription}
                           changeStartDate={changeStartDate}
                           changeDeadline={changeDeadline}
                           tasks={tasks.filter(t => {
                               if (filterValue === "All") {
                                   return true;
                               }
                               if (filterValue === "Active") {
                                   return t.completed === false;
                               }
                               if (filterValue === "Completed") {
                                   return t.completed === true;
                               }
                           })}/>

        </div>
    );
};


