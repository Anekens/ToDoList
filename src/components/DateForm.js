import React from 'react';
import '../App.css';


class DateForm extends React.Component {
    render = () => {

        const setDate = this.props.date
            ? this.props.date
            : `Set ${this.props.title}`;
        const startValue = this.props.date
            ? this.props.date
            : this.props.addedDate;
        const dateFormat = require('dateformat');
        const value = new Date(startValue);
        const min = new Date(this.props.addedDate);

        return (
            <div className={""}>
                <span className={'heading'}>{this.props.title}:&nbsp;</span>
                {
                    this.props.editMode
                        ? <input type="date"
                                 value={dateFormat(value, "yyyy-mm-dd")}
                                 min={dateFormat(min, "yyyy-mm-dd")} max="2021-12-31"
                                 autoFocus={true}
                                 onBlur={this.props.onStart}
                                 onChange={(e) => {
                                     this.props.onStart(e)
                                 }}/>
                        : <span onClick={this.props.activateEditMode}>
                        {setDate}.&nbsp;</span>
                }
            </div>
        );
    }
}

export default DateForm;

