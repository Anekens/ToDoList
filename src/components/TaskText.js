import React, {useState} from 'react';
import '../App.css';


export const TaskText = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.changeText(props.id, newTitle);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            deactivateEditMode();
        }
    };

    const onTitleChanged = (e) => {
        setNewTitle(e.currentTarget.value);
    };
    const title = props.title
        ? newTitle
        : props.placeholder;

    return (
        <div className={""}>
            <span className={'heading'}>{props.taskTitle}:&nbsp;</span>
            {
                editMode
                    ? <input onBlur={deactivateEditMode}
                             onChange={onTitleChanged}
                             autoFocus={true}
                             value={newTitle}
                             onKeyPress={onKeyPress}
                             placeholder={props.placeholder}/>
                    : <span onClick={activateEditMode}
                            placeholder={props.placeholder}>{title}.&nbsp;</span>
            }
        </div>
    );
};

export default TaskText;

