import React from 'react';
import style from '../styles/TodoListTask.module.css';
import DateForm from "./DateForm";
import Priority from "./Priority";
import TaskText from "./TaskText";
import AddDateForm from "./AddDateForm";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

export const TodoListTask = (props) => {

    const onIsDoneChanged = (e) => {
        props.changeStatus(props.task.id, e.currentTarget.checked);
    };

    const onDeleteTask = () => {
        props.deleteTask(props.task.id);
    };

    const containerCssClass = props.task.completed ? style.taskDone : style.task;

    return (
        <div className={containerCssClass}>
            <div>
                <IconButton aria-label="delete" onClick={onDeleteTask}>
                    <DeleteIcon color="primary"/>
                </IconButton>
                <Checkbox
                    checked={props.task.completed === true}
                    onChange={onIsDoneChanged}
                    value="checkedB"
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox',}}/>
            </div>
            <TaskText taskTitle={'Title'}
                      title={props.task.title}
                      changeText={props.changeTitle}
                      id={props.task.id}
                      placeholder={'set title'}/>
            <TaskText taskTitle={'Description'}
                      title={props.task.description}
                      changeText={props.changeDescription}
                      id={props.task.id}
                      placeholder={'set description'}/>
            <Priority priority={props.task.priority}
                      changePriority={props.changePriority}
                      id={props.task.id}/>

            <AddDateForm addedDate={props.task.addedDate}/>

            <DateForm changeDate={props.changeStartDate}
                      id={props.task.id}
                      addedDate={props.task.addedDate}
                      date={props.task.startDate}
                      title={'start date'}/>
            <DateForm changeDate={props.changeDeadline}
                      id={props.task.id}
                      addedDate={props.task.addedDate}
                      date={props.task.deadline}
                      title={'deadline'}/>
        </div>
    );

};

export default TodoListTask;

