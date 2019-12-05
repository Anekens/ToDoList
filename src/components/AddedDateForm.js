import React from 'react';
import '../App.css';

class AddedDateForm extends React.Component {
    render = () => {
        const dateFormat = require('dateformat');
        const now = new Date(this.props.addedDate);
        return (
            <div className={''}>
                <span className={'heading'}>
                    Added date:&nbsp;
                </span>{dateFormat(now, "H:MM/yyyy-mm-dd")}.&nbsp;
            </div>
        );
    }
}

export default AddedDateForm;

