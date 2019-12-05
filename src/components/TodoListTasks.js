import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask";

export const TodoListTasks = (props) => {
    const tasksElements = props.tasks.map(task =>
        <TodoListTask task={task}
                      changeStatus={props.changeStatus}
                      changeTitle={props.changeTitle}
                      deleteTask={props.deleteTask}
                      changePriority={props.changePriority}
                      changeDescription={props.changeDescription}
                      changeStartDate={props.changeStartDate}
                      changeDeadline={props.changeDeadline}
                      key={props.tasks.id}/>);
    return (
        <div className="todoList-tasks">
            {tasksElements}
        </div>
    );
};

export default TodoListTasks;

