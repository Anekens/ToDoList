import React from 'react';
import '../App.css';
import SelectPriority from "./SelectPriority";


class Priority extends React.Component {
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
                    this.props.editMode
                        ? <SelectPriority deactivateEditMode={this.props.deactivateEditMode}
                                          onPriorityChanged={this.props.onPriorityChanged}
                                          priorityTitle={priorityTitle}/>
                        : <span onClick={this.props.activateEditMode}>{priorityTitle}</span>
                }.&nbsp;
            </div>
        );
    }
}

export default Priority;

