import React from 'react';
import style from '../App.module.css';
import TodoListTask from "./TodoListTask";
import {Icon} from "antd";


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
            <table>
                <thead>
                <tr>
                    <th style={{width: '2%'}}><Icon type="check"/></th>
                    <th style={{width: '10%'}}>Added date</th>
                    <th style={{width: '22%'}}>Title</th>
                    <th style={{width: '40%'}}>Description</th>
                    <th style={{width: '8%'}}>Priority</th>
                    <th style={{width: '8%'}}>Start date</th>
                    <th style={{width: '8%'}}>Deadline</th>
                    <th style={{width: '2%'}}><Icon type="close"/></th>
                </tr>
                </thead>
            </table>
            {tasksElements}
        </div>
    );
};

export default TodoListTasks;

