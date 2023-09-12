import React from "react";
import DeleteIcon from '../assets/delete-icon.svg';
import ImportantIcon from '../assets/important-icon.png';

export default class TodoListItem extends React.Component {

    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, done, important} = this.props;

        let classNames = 'todolist-item';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important';
        }
        return (
            <div className={classNames}>
                <div className='todolist-item__label' onClick = {onToggleDone}> {label}</div>
                <div className='todolist-item__buttons'>
                    <button className='delete-button' type='button' onClick = {onDeleted}>
                        <img className='delete-icon' src={DeleteIcon}/>
                    </button>
                    <button className='important-button' onClick = {onToggleImportant} type='button'>
                        <img className='important-icon' src={ImportantIcon}/>
                    </button>
                </div>
            </div>

        )

    };
};