import React from 'react';
import '../App.css';

export const AddedDateForm = (props) => {

    const dateFormat = require('dateformat');
    const now = new Date(props.addedDate);

    return (
        <div className={''}>
                <span className={'heading'}>
                    Added date:&nbsp;
                </span>{dateFormat(now, "H:MM/yyyy-mm-dd")}.&nbsp;
        </div>
    );

};

export default AddedDateForm;

