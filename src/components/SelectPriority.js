import React from 'react';
import Select from 'react-select';

const options = [
    {value: 0, label: 'Low'},
    {value: 1, label: 'Middle'},
    {value: 2, label: 'High'},
    {value: 3, label: 'Urgently'},
    {value: 4, label: 'Later'},
];

class SelectPriority extends React.Component {
    state = {
        selectedOption: null
    };
    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        this.props.onPriorityChanged(selectedOption.value);
        this.props.deactivateEditMode();
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.props.deactivateEditMode();
        }
    };


    render() {
        const {selectedOption} = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                onBlur={this.props.deactivateEditMode}
                autoFocus={true}
                placeholder={this.props.priorityTitle}
                onKeyDown={this.onKeyPress}/>
        );
    }
}

export default SelectPriority