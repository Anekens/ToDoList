import React from 'react';
import style from '../styles/TodoListTask.module.css';

export const AddDateForm = (props) => {

    let dateFormat = require('dateformat');
    let now = new Date(props.addedDate);

    return (
        <div className={style.textContainer}>
                <span className={style.heading}>
                    Added date:&nbsp;
                </span>{dateFormat(now, "H:MM / dd-mm-yyyy")}.&nbsp;
        </div>
    );

};

export default AddDateForm;

