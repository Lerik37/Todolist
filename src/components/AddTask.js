import React from "react";

export default class AddTask extends React.Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    };
    render() {
        return (
            <form
                className='add-task'
            onSubmit={this.onSubmit}>
                <input
                    className='add-task__input input'
                    type='text'
                    placeholder='What needs to be done...'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button className='add-task__button' type='button'>Add a task</button>

            </form>
        )

    };
};