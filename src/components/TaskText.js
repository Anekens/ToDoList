import React, {useState} from 'react';
import style from '../App.module.css';
import Input from "antd/lib/input";


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
        <>
            {
                editMode
                    ? <Input className={style.inp}
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
        </>
    );
};



