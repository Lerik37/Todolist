import React from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import SearchInput from "./components/SearchInput";
import ItemStatusFilter from "./components/ItemStatusFilter";

class App extends React.Component {
    ItemId = 0
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Create awesome App'),
            this.createTodoItem('Learn documentation'),
        ],
        term: '',
        filter: 'all',
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.ItemId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1),
            ];
            return {
                todoData: newArray
            }
        });
    }
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            };
        });
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    filter = (items, filter) => {
switch(filter) {
    case 'active':
        return items.filter((item) => !item.done);
    case 'done':
        return items.filter((item) => item.done);
    case 'all':
        return items;
    default:
        return items;
}
    }
    onSearchChange = (term) => {
        this.setState({term} );
    };
    onFilterChange = (filter) => {
        this.setState({filter} );
    };

    searchItem(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    render() {
        const { todoData, term, filter } = this.state;

        const visibleItems = this.searchItem(todoData, term);
        const sortedItems = this.filter(visibleItems, filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className='wrapper'>
                <Header toDo={todoCount} done={doneCount}/>
                <div className='search-and-status-filter'>
                    <SearchInput onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange = {this.onFilterChange}/>
                </div>
                <div className='content'>
                    <TodoList
                        todos={sortedItems}
                        onDeleted={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleDone={this.onToggleDone}
                    />
                    <AddTask onItemAdded={this.addItem}/>
                </div>

            </div>
        );
    }

}

export default App;
