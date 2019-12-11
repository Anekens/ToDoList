import React from 'react';
import style from '../App.module.css';
import TodoListTask from "./TodoListTask";

export const TodoListTasks = (props) => {
    const tasksElements = props.tasks.map(task => {
            return <TodoListTask task={task}
                                 changeStatus={props.changeStatus}
                                 changeTitle={props.changeTitle}
                                 deleteTask={props.deleteTask}
                                 changePriority={props.changePriority}
                                 changeDescription={props.changeDescription}
                                 changeStartDate={props.changeStartDate}
                                 changeDeadline={props.changeDeadline}
                                 key={props.tasks.id}/>

        })
    ;
    return (
        <div className={style.tasks}>
            {tasksElements}
        </div>
    );
};

export default TodoListTasks;

