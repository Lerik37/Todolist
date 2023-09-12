import React from "react";

export default class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='header__top'>
                        <h1>Todo list</h1>
                        <div className='header__top-info'>{this.props.toDo} to do, {this.props.done} done</div>
                    </div>
                </div>
            </div>
        )

    };
};