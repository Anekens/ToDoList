import React from 'react';
import '../App.css';
import DateForm from "./DateForm";
import Priority from "./Priority";
import TaskDescription from "./TaskDescription";
import TaskTitle from "./TaskTitle";
import AddedDateForm from "./AddedDateForm";


class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        let newTitle = e.currentTarget.value;
        this.setState({title: newTitle})
    };

    onDescriptionChanged = (e) => {
        let newDescription = e.currentTarget.value;
        this.setState({description: newDescription})
    };

    onPriorityChanged = (priority) => {
        this.props.changePriority(this.props.task.id, priority)
    };

    onStartDateChanged = (e) => {
        this.setState({editModeStartDate: false});
        this.props.changeStartDate(this.props.task.id, e.currentTarget.value);
    };

    onDeadlineChanged = (e) => {
        this.setState({editModeDeadline: false});
        this.props.changeDeadline(this.props.task.id, e.currentTarget.value);
    };

    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.deactivateEditMode();
            this.deactivateEditModeDescription();
        }
    };


    state = {
        editMode: false,
        editModeDescription: false,
        editModePriority: false,
        editModeStartDate: false,
        editModeDeadline: false,
        title: this.props.task.title,
        description: this.props.task.description
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.changeTitle(this.props.task.id, this.state.title);
        this.props.changeDescription(this.props.task.id, this.state.description);

    };
    activateEditModeDescription = () => {
        this.setState({editModeDescription: true});
    };

    deactivateEditModeDescription = () => {
        this.setState({editModeDescription: false});
    };

    activateEditModePriority = () => {
        this.setState({editModePriority: true});
    };

    deactivateEditModePriority = () => {
        this.setState({editModePriority: false});
    };

    activateEditModeStartDate = () => {
        this.setState({editModeStartDate: true});
    };

    activateEditModeDeadline = () => {
        this.setState({editModeDeadline: true});
    };

    render = () => {

        const containerCssClass = this.props.task.completed
            ? "todoList-task done"
            : "todoList-task";

        return (
            <div className={containerCssClass}>
                <div>
                    <input type="checkbox" checked={this.props.task.completed === true}
                           onChange={this.onIsDoneChanged}/>
                </div>

                <TaskTitle title={'Title'}
                           editMode={this.state.editMode}
                           deactivateEditMode={this.deactivateEditMode}
                           onTitleChanged={this.onTitleChanged}
                           value={this.state.title}
                           onKeyPress={this.onKeyPress}
                           activateEditMode={this.activateEditMode}/>

                <TaskDescription description={this.props.task.description}
                                 title={'Description'}
                                 editMode={this.state.editModeDescription}
                                 deactivateEditMode={this.deactivateEditModeDescription}
                                 onDescriptionChanged={this.onDescriptionChanged}
                                 value={this.state.description}
                                 onKeyPress={this.onKeyPress}
                                 activateEditMode={this.activateEditModeDescription}/>

                <Priority priority={this.props.task.priority}
                          deactivateEditMode={this.deactivateEditModePriority}
                          onPriorityChanged={this.onPriorityChanged}
                          activateEditMode={this.activateEditModePriority}
                          editMode={this.state.editModePriority}/>

                <AddedDateForm addedDate={this.props.task.addedDate}/>

                <DateForm onStart={this.onStartDateChanged}
                          activateEditMode={this.activateEditModeStartDate}
                          addedDate={this.props.task.addedDate}
                          editMode={this.state.editModeStartDate}
                          date={this.props.task.startDate}
                          title={'Start date'}/>
                <DateForm onStart={this.onDeadlineChanged}
                          activateEditMode={this.activateEditModeDeadline}
                          addedDate={this.props.task.addedDate}
                          editMode={this.state.editModeDeadline}
                          date={this.props.task.deadline}
                          title={'Deadline'}/>
                <div>
                    <button onClick={this.onDeleteTask}>X</button>
                </div>
            </div>
        );
    }
}

export default TodoListTask;

