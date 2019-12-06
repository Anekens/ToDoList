import React, {useState} from 'react';
import '../App.css';


export const TodoListFooter = (props) => {

    const [isHidden, setHiddenMode] = useState(false);

    const onAllFilterClick = () => {
        props.changeFilter("All");
    };
    const onCompletedFilterClick = () => {
        props.changeFilter("Completed");
    };
    const onActiveFilterClick = () => {
        props.changeFilter("Active");
    };
    const onShowFiltersClick = () => {
        setHiddenMode(true);
    };
    const onHideFiltersClick = () => {
        setHiddenMode(false);
    };

    let classForAll = props.filterValue === "All" ? "filter-active" : "";
    let classForCompleted = props.filterValue === "Completed" ? "filter-active" : "";
    let classForActive = props.filterValue === "Active" ? "filter-active" : "";

    return (
        <div className="todoList-footer">
            {
                !isHidden && <div>
                    <button onClick={onAllFilterClick} className={classForAll}>All</button>
                    <button onClick={onCompletedFilterClick} className={classForCompleted}>Completed</button>
                    <button onClick={onActiveFilterClick} className={classForActive}>Active</button>
                </div>
            }
            {!isHidden && <span onClick={onShowFiltersClick}>hide</span>}
            {isHidden && <span onClick={onHideFiltersClick}>show</span>}
        </div>
    );
};

export default TodoListFooter;

