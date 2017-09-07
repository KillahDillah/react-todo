import React, { Component } from 'react'
import {removeTodo, completeTodo} from '../actions/todos'

class ToDoItem extends Component {
  remove=(e)=>{
    removeTodo(this.props.todo.id)
  }

  complete=(e)=>{
    completeTodo(this.props.todo.id)
  }

  render() {
    return(
      <li className={this.props.todo.status}>
        {this.props.todo.text} 
        <button onClick={this.remove}>Remove</button>
        <button onClick={this.complete}>Done</button>
      </li>
    )
  }
}

export default ToDoItem