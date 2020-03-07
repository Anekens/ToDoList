import React, {useState} from 'react';
import style from '../App.module.css'
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";


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
        <div className={style.todoTitle}>
            {editMode ? ""
                : <Icon type="delete" onClick={props.onDelete}/>}
            {editMode
                ? <Input onBlur={deactivateEditMode}
                         onChange={(e) => {
                             onTitleChanged(e)
                         }}
                         autoFocus={true}
                         value={newTitle}
                         onKeyPress={onKeyPress}/>
                : <span onClick={activateEditMode}
                        style={{
                            fontSize: '1.6em',
                        }}>
                    {props.title} &nbsp;</span>
            }


        </div>
    );
};


