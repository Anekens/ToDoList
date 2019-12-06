import React from 'react';
import '../App.css';

export const AddDateForm = (props) => {

    let dateFormat = require('dateformat');
    let now = new Date(props.addedDate);

    return (
        <div className={''}>
                <span className={'heading'}>
                    Added date:&nbsp;
                </span>{dateFormat(now, "H:MM dd-mm-yyyy")}.&nbsp;
        </div>
    );

};

export default AddDateForm;

