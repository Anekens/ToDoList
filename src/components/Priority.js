import React from 'react';
import '../App.css';
import SelectPriority from "./SelectPriority";


class Priority extends React.Component {

    onPriorityChanged = (priority) => {
        this.props.changePriority(this.props.id, priority)
    };

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
    };
    render = () => {
        let priorityTitle = "";
        switch (this.props.priority) {
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
            <div className={""}>
                <span className={'heading'}>Priority: </span>
                {
                    this.state.editMode
                        ? <SelectPriority deactivateEditMode={this.deactivateEditMode}
                                          onPriorityChanged={this.onPriorityChanged}
                                          priorityTitle={priorityTitle}/>
                        : <span onClick={this.activateEditMode}>{priorityTitle}</span>
                }.&nbsp;
            </div>
        );
    }
}

export default Priority;

