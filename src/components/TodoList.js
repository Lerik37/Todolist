import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const items = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <TodoListItem
                key={id}
                {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
            />
        );
    });

    return (
        <div className='todo__container'>
            {items}
        </div>
    )
};
export default TodoList;