import React, {useState} from 'react';
import style from '../App.module.scss';
import Input from "antd/lib/input";
import {Button} from "antd";


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



    let inputError = error ? {backgroundColor : 'red', opacity:'0.7'} : {};
    return (
        <div className={style.addNewForm}>
            <div className={style.inputAdd}>
                <Input placeholder={props.placeholder}
                       onChange={onTitleChanged}
                       onKeyPress={onKeyPress}
                       value={title}
                       id={props.labelInput}
                       style={inputError}/>
            </div>
            <div className={style.btnAdd}>
                <Button type="primary"
                        onClick={onAddItemClick}
                        size={'small'}>
                    Add
                </Button>

            </div>
        </div>
    );
};



