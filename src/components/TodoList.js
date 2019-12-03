import React from 'react';
import '../App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTaskTC, deleteTaskTC, deleteTodolistTC, setTasksTC, updateTaskTC, updateTodolistTC}
    from "../redux/reducer";


class TodoList extends React.Component {

    componentDidMount() {
        this.props.setTasksTC(this.props.id);
    }

    state = {
        filterValue: "All"
    };

    addTask = (newText) => {
        this.props.addTaskTC(newText, this.props.id);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeTask = (taskId, obj) => {
        this.props.updateTaskTC(taskId, obj, this.props.id);
    };

    changeTodolistTitle = (newTitle) => {
        this.props.updateTodolistTC(this.props.id, newTitle);
    };

    changeStatus = (taskId, completed) => {
        this.changeTask(taskId, {completed});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title});
    };
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority});
    };
    changeDescription = (taskId, description) => {
        this.changeTask(taskId, {description});
    };

    changeStartDate = (taskId, startDate) => {
        this.changeTask(taskId, {startDate});
    };
    changeDeadline = (taskId, deadline) => {
        this.changeTask(taskId, {deadline});
    };

    deleteTodolist = () => {
        this.props.deleteTodolistTC(this.props.id);
    };

    deleteTask = (taskId) => {
        this.props.deleteTaskTC(taskId, this.props.id);
    };

    render = () => {
        let {tasks = []} = this.props;
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title}
                                   onDelete={this.deleteTodolist}
                                   changeTodolistTitle={this.changeTodolistTitle}
                                   id={this.props.id}
                                   addedDate={this.props.addedDate}/>
                    <AddNewItemForm addItem={this.addTask}/>
                </div>
                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               changePriority={this.changePriority}
                               changeDescription={this.changeDescription}
                               changeStartDate={this.changeStartDate}
                               changeDeadline={this.changeDeadline}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.completed === false;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.completed === true;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const ConnectedTodoList = connect(null, {
    deleteTaskTC, deleteTodolistTC, updateTaskTC,
    setTasksTC, addTaskTC, updateTodolistTC
})(TodoList);

export default ConnectedTodoList;

