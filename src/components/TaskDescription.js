import React from 'react';
import '../App.css';

class TaskDescription extends React.Component {
    render = () => {
        const setDescription = this.props.description
            ? this.props.description
            : "set description";
        return (
            <div className={""}>
                <span className={'heading'}>{this.props.title}:&nbsp;</span>
                {
                    this.props.editMode
                        ? <input onBlur={this.props.deactivateEditMode}
                                 onChange={(e) => {
                                     this.props.onDescriptionChanged(e)
                                 }}
                                 autoFocus={true}
                                 value={this.props.value}
                                 onKeyPress={this.props.onKeyPress}
                                 placeholder={'Set description'}/>
                        : <span onClick={this.props.activateEditMode}
                                placeholder={'Set description'}>
                           {setDescription}.&nbsp;
                    </span>
                }
            </div>
        );
    }
}

export default TaskDescription;

