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
    };

    render() {
        const {selectedOption} = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                onBlur={this.props.deactivateEditModePriority}
                autoFocus={true}
                placeholder={this.props.priorityTitle}/>
        );
    }
}

export default SelectPriority