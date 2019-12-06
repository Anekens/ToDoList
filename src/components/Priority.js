import React, {useEffect, useState} from 'react';
import '../App.css';

export const Priority = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onPriorityChanged = (e) => {
        props.changePriority(props.id, e.currentTarget.value);
        deactivateEditMode();
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            deactivateEditMode();
        }
    };

    let priorityTitle = "";

    switch (props.priority) {
        case 0:
            priorityTitle = "Low";
            break;
        case 1:
            priorityTitle = "Middle";
            break;
        case 2:
            priorityTitle = "High";
            break;
        case 3:
            priorityTitle = "Urgently";
            break;
        case 4:
            priorityTitle = "Later";
            break;
    }

    let select = props.priority;
    return (
        <div className={""}>
            <span className={'heading'}>Priority: </span>
            {
                editMode
                    ? <select autoFocus={true}
                              onKeyDown={onKeyPress}
                              onChange={onPriorityChanged}
                              onBlur={deactivateEditMode}>
                        <option selected={select === 0} value="0">Low</option>
                        <option selected={select === 1} value="1">Middle</option>
                        <option selected={select === 2} value="2">High</option>
                        <option selected={select === 3} value="3">Urgently</option>
                        <option selected={select === 4} value="4">Later</option>
                    </select>
                    : <span onClick={activateEditMode}>{priorityTitle}</span>
            }.&nbsp;
        </div>
    );
};

export default Priority;

