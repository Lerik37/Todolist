import React from "react";

export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {
        const { filter, onFilterChange } = this.props;
        const filterButtons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'active': 'btn';
            return (
                <button
                    className={clazz}
                    type='button'
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            )
        })
        return (
            <div className='status-filter'>
                <div className='status-filter__buttons'>
                    {filterButtons}
                </div>
            </div>
        )

    };
};