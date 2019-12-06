import React from 'react';
import '../App.css';
import DateForm from "./DateForm";
import Priority from "./Priority";
import TaskText from "./TaskText";
import AddDateForm from "./AddDateForm";

export const TodoListTask = (props) => {

    const onIsDoneChanged = (e) => {
        props.changeStatus(props.task.id, e.currentTarget.checked);
    };

    const onDeleteTask = () => {
        props.deleteTask(props.task.id);
    };

    let containerCssClass = props.task.completed ? "todoList-task done" : "todoList-task";

    return (
        <div className={containerCssClass}>
            <div>
                <input type="checkbox" checked={props.task.completed === true}
                       onChange={onIsDoneChanged}/>
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
            <div>
                <button onClick={onDeleteTask}>X</button>
            </div>
        </div>
    );

};

export default TodoListTask;

