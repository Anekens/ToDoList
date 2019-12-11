import React, {useState} from 'react';
import style from '../styles/AddNewItemForm.module.css';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add'


export const AddNewItemForm = (props) => {

    const [error, setError] = useState(false);
    const [title, setNewTitle] = useState('');


    const onAddItemClick = () => {
        setNewTitle(title);
        if (title === "") {
            debugger
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

    let classNameForInput = error ? style.error : "";
    return (
        <div className={style.container}>
            <div className={style.newForm}>
                <input className={classNameForInput}
                       type="text"
                       onChange={onTitleChanged}
                       onKeyPress={onKeyPress}
                       value={title}
                       id={"labelInput"}/>
                <label htmlFor={"labelInput"}>{props.placeholder}</label>
            </div>
            <div className={style.containerBtn}>
                <Fab color="primary" size="small" aria-label="add" onClick={onAddItemClick}>
                    <AddIcon/>
                </Fab>
            </div>

        </div>
    );
};

export default AddNewItemForm;

