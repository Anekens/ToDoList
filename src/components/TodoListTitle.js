import React, {useState} from 'react';
import '../App.css';

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
        <h3 className="todoList-header__title">
            {editMode
                ? <input onBlur={deactivateEditMode}
                         onChange={(e) => {
                             onTitleChanged(e)
                         }}
                         autoFocus={true}
                         value={newTitle}
                         onKeyPress={onKeyPress}/>
                : <span onClick={activateEditMode}>{props.title}</span>}
            <button onClick={props.onDelete}>X</button>
        </h3>
    );
};

export default TodoListTitle;
