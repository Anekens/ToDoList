import React, {useState} from 'react';
import '../App.css';


export const DateForm = (props) => {
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const onDateChanged = (e) => {
        setEditMode(false);
        props.changeDate(props.id, e.currentTarget.value);
    };

    const setDate = props.date
        ? props.date
        : `Set ${props.title}`;
    const startValue = props.date
        ? props.date
        : props.addedDate;
    const dateFormat = require('dateformat');
    const value = new Date(startValue);
    const min = new Date(props.addedDate);

    return (
        <div className={""}>
            <span className={'heading'}>{props.title}:&nbsp;</span>
            {
                editMode
                    ? <input type="date"
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

