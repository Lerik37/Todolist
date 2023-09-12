import React from "react";

export default class SearchInput extends React.Component {
    state = {
        term: ''
    }
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <>
                <input
                    type='text'
                    className='search-input input'
                    placeholder='Type to search'
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
            </>
        )

    };
};