import React from 'react';
import '../App.css';

class TaskTitle extends React.Component {
    render = () => {
        return (
            <div className={""}>
                <span className={'heading'}>{this.props.title}:&nbsp;</span>
                {this.props.editMode
                    ? <input onBlur={this.props.deactivateEditMode}
                             onChange={(e) => {
                                 this.props.onTitleChanged(e)
                             }}
                             autoFocus={true}
                             value={this.props.value}
                             onKeyPress={this.props.onKeyPress}
                             placeholder={'Set title'}/>
                    : <span onClick={this.props.activateEditMode}>{this.props.value}.&nbsp;</span>
                }
            </div>
        );
    }
}

export default TaskTitle;

