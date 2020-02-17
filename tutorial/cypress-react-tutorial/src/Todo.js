import React, { Component } from 'react'

class Todo extends Component {
    deleteTodo = id => {
        this.props.removeTodo(id);
    };
    render() {
        return (
        <div>
            {this.props.value}
            <button className="btn btn-danger" 
                    data-cy="delete-todo-item"
                    onClick={() => this.deleteTodo(this.props.id)}>X</button>
        </div>
        );
    }
}

export default Todo;