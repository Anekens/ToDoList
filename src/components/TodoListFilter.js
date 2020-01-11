import React, {useState} from 'react';
import style from '../styles/TodoListFilter.module.css';
import Button from "@material-ui/core/Button";


export const TodoListFilter = (props) => {

    const [isHidden, setHiddenMode] = useState(true);

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

    let classForAll = props.filterValue === "All" ? style.filterActive : "";
    let classForCompleted = props.filterValue === "Completed" ? style.filterActive : "";
    let classForActive = props.filterValue === "Active" ? style.filterActive : "";

    return (
        <div className={style.todoListFilter}>
            <div className={style.isHow}>
                {!isHidden && <span onClick={onShowFiltersClick}>hide filter</span>}
                {isHidden && <span onClick={onHideFiltersClick}>show filter</span>}
            </div>
            {
                !isHidden && <div className={style.buttons}>
                    <Button color="primary"
                            onClick={onAllFilterClick}
                            className={classForAll}>All</Button>
                    <Button color="primary"
                            onClick={onCompletedFilterClick}
                            className={classForCompleted}>Completed</Button>
                    <Button  color="primary"
                             onClick={onActiveFilterClick}
                             className={classForActive}>Active</Button>
                </div>
            }

        </div>
    );
};

export default TodoListFilter;

