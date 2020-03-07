import React from 'react';


export const AddDateForm = (props) => {

    let dateFormat = require('dateformat');
    let now = new Date(props.addedDate);

    return (
        <>
            {dateFormat(now, "H:MM / dd-mm-yyyy")}.&nbsp;
        </>
    );

};



