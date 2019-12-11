import React, {useState} from 'react';
import style from '../styles/TodoListTask.module.css';


export const DateForm = (props) => {
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const onDateChanged = (e) => {
        setEditMode(false);
        props.changeDate(props.id, e.currentTarget.value);
    };

    let dateFormat = require('dateformat');

    let now = new Date(props.date);

    let setDate = props.date
        ? dateFormat(now, "dd-mm-yyyy")
        : `set ${props.title}`;

    let startValue = props.date
        ? props.date
        : props.addedDate;

    let min = new Date(props.addedDate);
    let value = new Date(startValue);

    return (
        <div className={style.textContainer}>
            <span className={style.heading}>{props.title}:&nbsp;</span>
            {
                editMode
                    ? <input className={style.inpDate}
                             type="date"
                             value={dateFormat(value, "yyyy-mm-dd")}
                             min={dateFormat(min, "yyyy-mm-dd")} max="2021-12-31"
                             autoFocus={true}
                             onBlur={onDateChanged}
                             onChange={onDateChanged}/>
                    : <span onClick={activateEditMode}>
                        {setDate}.&nbsp;</span>
            }
        </div>
    );
};

export default DateForm;

