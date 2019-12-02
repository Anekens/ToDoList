import React from 'react';
import '../App.css';
import SelectPriority from "./SelectPriority";

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        let newTitle = e.currentTarget.value;
        this.setState({title: newTitle})
    };

    onPriorityChanged = (priority) => {
        this.props.changePriority(this.props.task.id, priority)
    };

    state = {
        editMode: false,
        editModePriority: false,
        title: this.props.task.title
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.changeTitle(this.props.task.id, this.state.title);
    };

    activateEditModePriority = () => {
        this.setState({editModePriority: true});
    };

    deactivateEditModePriority = () => {
        this.setState({editModePriority: false});
    };


    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.deactivateEditMode();
        }
    };
    render = () => {
        let containerCssClass = this.props.task.completed ? "todoList-task done" : "todoList-task";
        let priorityTitle = "";
        switch (this.props.task.priority) {
            case 0:
                priorityTitle = "Low";
                break;
            case 1:
                priorityTitle = "Middle";
                break;
            case 2:
                priorityTitle = "High";
                break;
            case 3:
                priorityTitle = "Urgently";
                break;
            case 4:
                priorityTitle = "Later";
                break;
        }
        return (
            <div className={containerCssClass}>
                <input type="checkbox" checked={this.props.task.completed === true}
                       onChange={this.onIsDoneChanged}/>
                {
                    this.state.editMode
                        ? <input onBlur={this.deactivateEditMode}
                                 onChange={(e) => {
                                     this.onTitleChanged(e)
                                 }}
                                 autoFocus={true}
                                 value={this.state.title}
                                 onKeyPress={this.onKeyPress}/>
                        : <span onClick={this.activateEditMode}>{this.state.title}</span>
                }, priority: {
                this.state.editModePriority
                    ? <SelectPriority deactivateEditModePriority={this.deactivateEditModePriority}
                                      onPriorityChanged={this.onPriorityChanged}
                                      priorityTitle={priorityTitle}/>
                    : <span onClick={this.activateEditModePriority}>{priorityTitle}</span>
            }
                <button onClick={this.onDeleteTask}>X</button>
            </div>
        );
    }
}

export default TodoListTask;

