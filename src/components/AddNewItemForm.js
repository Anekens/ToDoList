import React, {useState} from 'react';
import '../App.css';


export const AddNewItemForm = (props) => {

    const [error, setError] = useState(false);
    const [title, setNewTitle] = useState('');

    const onAddItemClick = () => {
        setNewTitle(title);
        if (title === "") {
            setError(true);
        } else {
            setError(false);
            props.addItem(title);
        }
        setNewTitle('')
    };

    const onTitleChanged = (e) => {
        setNewTitle(e.currentTarget.value);
        setError(false);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onAddItemClick();
        }
    };

    let classNameForInput = error ? "error" : "";
    return (
        <div className="todoList-newTaskForm">
            <input className={classNameForInput}
                   type="text"
                   placeholder={props.placeholder}
                   onChange={onTitleChanged}
                   onKeyPress={onKeyPress}
                   value={title}/>
            <button onClick={onAddItemClick}
            className={""}>Add</button>
        </div>
    );
};

export default AddNewItemForm;

