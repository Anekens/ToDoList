import React from 'react';
import style from '../App.module.css';
import Button from "antd/lib/button";


export const TodoListFilter = (props) => {

    const onAllFilterClick = () => {
        props.changeFilter("All");
    };
    const onCompletedFilterClick = () => {
        props.changeFilter("Completed");
    };
    const onActiveFilterClick = () => {
        props.changeFilter("Active");
    };

    let checkForAll = props.filterValue === "All" ? 'check' : '';
    let checkForCompleted = props.filterValue === "Completed" ? 'check' : '';
    let checkForActive = props.filterValue === "Active" ? 'check' : '';

    return (
        <div className={style.buttons}>
            <Button onClick={onAllFilterClick}
                    type={'primary'}
                    size={'small'}
                    icon={checkForAll}>
                all
            </Button>
            <Button onClick={onCompletedFilterClick}
                    type={'primary'}
                    size={'small'}
                    icon={checkForCompleted}>
                completed
            </Button>
            <Button onClick={onActiveFilterClick}
                    type={'primary'}
                    size={'small'}
                    icon={checkForActive}>
                active
            </Button>
        </div>
    );
};

export default TodoListFilter;

