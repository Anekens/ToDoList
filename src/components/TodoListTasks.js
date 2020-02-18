import React from 'react';
import style from '../App.module.css';
import TodoListTask from "./TodoListTask";
import {Icon} from "antd";

const uuidv1 = require('uuid/v1');

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
                                 key={uuidv1()}/>

        })
    ;
    return (
        <div className={style.tasks}>
            <table>
                <thead>
                <tr>
                    <th style={{width: '2%'}}><Icon type="check"/></th>
                    <th style={{width: '12%'}}>Added date</th>
                    <th style={{width: '20%'}}>Title</th>
                    <th style={{width: '40%'}}>Description</th>
                    <th style={{width: '8%'}}>Priority</th>
                    <th style={{width: '8%'}}>Start date</th>
                    <th style={{width: '8%'}}>Deadline</th>
                    <th style={{width: '2%'}}><Icon type="close"/></th>
                </tr>
                </thead>
                {tasksElements}
            </table>

        </div>
    );
};

export default TodoListTasks;

