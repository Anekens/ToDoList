import React from 'react';
import style from '../App.module.css';
import DateForm from "./DateForm";
import Priority from "./Priority";
import TaskText from "./TaskText";
import AddDateForm from "./AddDateForm";
import Icon from "antd/lib/icon";
import Checkbox from "antd/lib/checkbox";

export const TodoListTask = (props) => {

    const onIsDoneChanged = (e) => {
        props.changeStatus(props.task.id, e.target.checked);
    };

    const onDeleteTask = () => {
        props.deleteTask(props.task.id);
    };

    const classForTaskChecked = props.task.completed ? style.taskDone : '';

    return (
        <tbody >
        <tr className={classForTaskChecked}>
            <td style={{width: '2%'}}>
                <Checkbox checked={props.task.completed === true} onChange={onIsDoneChanged}/>
            </td>
            <td style={{width: '10%'}}>
                <AddDateForm addedDate={props.task.addedDate}/>
            </td>
            <td style={{width: '22%'}}>
                <TaskText title={props.task.title}
                          changeText={props.changeTitle}
                          id={props.task.id}
                          placeholder={'set title'}/>
            </td>
            <td style={{width: '40%'}}>
                <TaskText
                    title={props.task.description}
                    changeText={props.changeDescription}
                    id={props.task.id}
                    placeholder={'set description'}/>
            </td>
            <td style={{width: '8%'}}>
                <Priority priority={props.task.priority}
                          changePriority={props.changePriority}
                          id={props.task.id}/>
            </td>
            <td style={{width: '8%'}}>
                <DateForm changeDate={props.changeStartDate}
                          id={props.task.id}
                          addedDate={props.task.addedDate}
                          date={props.task.startDate}/>
            </td>
            <td style={{width: '8%'}}>
                <DateForm changeDate={props.changeDeadline}
                          id={props.task.id}
                          addedDate={props.task.addedDate}
                          date={props.task.deadline}/>
            </td>
            <td style={{width: '2%'}}>
                <Icon type="delete" onClick={onDeleteTask}/>
            </td>
        </tr>
        </tbody>
    );

};

export default TodoListTask;

