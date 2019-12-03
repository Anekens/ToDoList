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

    onStartDeadline = (e) => {
        this.setState({editModeDeadline: false});
        this.props.changeDeadline(this.props.task.id, e.currentTarget.value);
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

    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.deactivateEditMode();
            this.deactivateEditModeDescription();
        }
    };
    render = () => {
        debugger
        let containerCssClass = this.props.task.completed ? "todoList-task done" : "todoList-task";
        let priorityTitle = "";
        let setDescription = this.props.task.description
            ? this.props.task.description
            : "set description";
        let setStartDate = this.props.task.startDate
            ? this.props.task.startDate
            : "set start date";
        let setDeadline = this.props.task.deadline
            ? this.props.task.deadline
            : "set deadline";

        const dateFormat = require('dateformat');
        const now = new Date(this.props.task.addedDate);

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
                <span className={'heading'}>Title:&nbsp;</span>{
                this.state.editMode
                    ? <input onBlur={this.deactivateEditMode}
                             onChange={(e) => {
                                 this.onTitleChanged(e)
                             }}
                             autoFocus={true}
                             value={this.state.title}
                             onKeyPress={this.onKeyPress}
                             placeholder={'Set title'}/>
                    : <span onClick={this.activateEditMode}>{this.state.title}.&nbsp;</span>
            }
                <span className={'heading'}>Description:&nbsp;</span>
                {
                    this.state.editModeDescription
                        ? <input onBlur={this.deactivateEditModeDescription}
                                 onChange={(e) => {
                                     this.onDescriptionChanged(e)
                                 }}
                                 autoFocus={true}
                                 value={this.state.description}
                                 onKeyPress={this.onKeyPress}
                                 placeholder={'Set description'}/>
                        : <span onClick={this.activateEditModeDescription}
                                placeholder={'Set description'}>
                           {setDescription}.&nbsp;
                    </span>
                } <span className={'heading'}>Priority: </span>{
                this.state.editModePriority
                    ? <SelectPriority deactivateEditModePriority={this.deactivateEditModePriority}
                                      onPriorityChanged={this.onPriorityChanged}
                                      priorityTitle={priorityTitle}/>
                    : <span onClick={this.activateEditModePriority}>{priorityTitle}</span>
            }.&nbsp;
                <span className={'heading'}>
                    Added date:&nbsp;
                </span>{dateFormat(now, "H:MM/yyyy-mm-dd")}.&nbsp;

                <span className={'heading'}>Start date:&nbsp;</span>
                {this.state.editModeStartDate
                    ? <input type="date"
                             value={dateFormat(now, "yyyy-mm-dd")}
                             min={dateFormat()} max="2021-12-31"
                             autoFocus={true}
                             onChange={(e) => {
                                 this.onStartDateChanged(e)
                             }}/>
                    : <span onClick={this.activateEditModeStartDate}>
                        {setStartDate}.&nbsp;</span>
                }
                <span className={'heading'}>Deadline:&nbsp;</span>
                {this.state.editModeDeadline
                    ? <input type="date"
                             value={dateFormat(now, "yyyy-mm-dd")}
                             min={dateFormat()} max="2021-12-31"
                             autoFocus={true}
                             onChange={(e) => {
                                 this.onStartDeadline(e)
                             }}/>
                    : <span onClick={this.activateEditModeDeadline}>
                        {setDeadline}.&nbsp;</span>
                }
                <button onClick={this.onDeleteTask}>X</button>
            </div>
        );
    }
}

export default TodoListTask;

