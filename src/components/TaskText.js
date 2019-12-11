import React, {useState} from 'react';
import style from '../styles/TodoListTask.module.css';


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


    return (
        <div className={style.textContainer}>
            <span className={style.heading}>{props.taskTitle}:&nbsp;</span>
            {
                editMode
                    ? <input className={style.inp}
                        onBlur={deactivateEditMode}
                             onChange={onTitleChanged}
                             autoFocus={true}
                             value={newTitle}
                             onKeyPress={onKeyPress}
                             placeholder={props.placeholder}/>
                    : <span onClick={activateEditMode}
                            placeholder={props.placeholder}>
                        {props.title ? props.title : props.placeholder}.&nbsp;</span>
            }
        </div>
    );
};

export default TaskText;

