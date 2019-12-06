import React, {useState} from 'react';
import '../App.css';
import AddDateForm from "./AddDateForm";

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
        <div>
            <h3 className="todoList-header__title">
                {editMode
                    ? <input onBlur={deactivateEditMode}
                             onChange={(e) => {
                                 onTitleChanged(e)
                             }}
                             autoFocus={true}
                             value={newTitle}
                             onKeyPress={onKeyPress}/>
                    : <span onClick={activateEditMode}>
                    {props.title} &nbsp;
            </span>}
                <button onClick={props.onDelete}>X</button>
            </h3>
            <AddDateForm addedDate={props.addedDate}/>
        </div>
    );
};

export default TodoListTitle;

