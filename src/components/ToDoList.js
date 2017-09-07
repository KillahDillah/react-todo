import React, { Component } from 'react'
import {connect} from 'react-redux';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return(
      <div>
        <ul>
        {this.props.todos.map(todo=>(
          <ToDoItem key={todo.id} todo={todo} />
        ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    todos: appState.todos
  }
}

export default connect (mapStateToProps)(ToDoList)