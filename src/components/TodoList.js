import React, {useState, useEffect} from 'react';
import style from '../styles/TodoList.module.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFilter from "./TodoListFilter";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";
import {addTaskTC, deleteTaskTC, deleteTodolistTC, setTasksTC, updateTaskTC, updateTodolistTC}
    from "../redux/reducer";
import AddDateForm from "./AddDateForm";
import AddNewItemForm from "./AddNewItemForm";


export const TodoList = (props) => {

    useEffect(() => {
        const fetchData = async () => {
            await props.setTasksTC(props.id);
        };
        fetchData()
    }, [props.id]);

    const [filterValue, setNewFilterValue] = useState('All');

    const addTask = (newText) => {
        props.addTaskTC(newText, props.id);
    };

    const changeFilter = (filterValue) => {

        setNewFilterValue(filterValue);
    };

    const changeTask = (taskId, obj) => {
        props.updateTaskTC(taskId, obj, props.id);
    };

    const changeTodolistTitle = (newTitle) => {
        props.updateTodolistTC(props.id, newTitle);
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

    const deleteTodolist = () => {
        props.deleteTodolistTC(props.id);
    };

    const deleteTask = (taskId) => {
        props.deleteTaskTC(taskId, props.id);
    };

    const {tasks = []} = props;

    return (
        <div className={style.todoList}>
            <div className={style.todoListHeader}>
                <TodoListTitle title={props.title}
                               onDelete={deleteTodolist}
                               changeTodolistTitle={changeTodolistTitle}
                               id={props.id}/>
                <AddNewItemForm addItem={addTask}
                                placeholder={'Add new task'}/>
                <AddDateForm addedDate={props.addedDate}/>
            </div>
            <TodoListFilter changeFilter={changeFilter} filterValue={filterValue}/>
            <TodoListTasks changeStatus={changeStatus}
                           changeTitle={changeTitle}
                           deleteTask={deleteTask}
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

const ConnectedTodoList = connect(null, {
    deleteTaskTC, deleteTodolistTC, updateTaskTC,
    setTasksTC, addTaskTC, updateTodolistTC
})(TodoList);

export default ConnectedTodoList;

