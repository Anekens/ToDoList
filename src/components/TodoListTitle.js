import React, {useState} from 'react';
import style from '../styles/TodoListTitle.module.css';
import {IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export const TodoListTitle = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.changeTodolistTitle(newTitle, props.id);
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
        <div className={style.container}>
            <div className={style.todoListTitle}>
                {editMode
                    ? <input onBlur={deactivateEditMode}
                             onChange={(e) => {
                                 onTitleChanged(e)
                             }}
                             autoFocus={true}
                             value={newTitle}
                             onKeyPress={onKeyPress}
                             className={style.input}/>
                    : <span onClick={activateEditMode}
                            className={style.title}>
                    {props.title} &nbsp;
            </span>}
            </div>
            <div>
                <IconButton aria-label="delete" onClick={props.onDelete}>
                    <DeleteIcon color="primary"/>
                </IconButton>
            </div>
        </div>
    );
};

export default TodoListTitle;

