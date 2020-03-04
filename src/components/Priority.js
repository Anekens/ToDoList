import React, {useState} from 'react';
import style from '../App.module.css';

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
        default:
            return 1
    }

    return (
        <>
            {
                editMode
                    ? < select className={style.select}
                               autoFocus={true}
                               onKeyDown={onKeyPress}
                               onChange={onPriorityChanged}
                               onBlur={deactivateEditMode}
                               value={props.priority}>
                        <option value="0">Low</option>
                        <option value="1">Middle</option>
                        <option value="2">High</option>
                        <option value="3">Urgently</option>
                        <option value="4">Later</option>
                    </select>
                    : <span onClick={activateEditMode}>{priorityTitle}</span>
            }.&nbsp;
        </>
    );
};

export default Priority;

