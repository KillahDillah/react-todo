import React, { Component } from 'react'
import {addTodo} from '../actions/todos'

class ToDoForm extends Component {
  
  state = {
    todo: ''
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    addTodo(this.state.todo)
    this.setState({
      todo:''
    })
  }

  handleChange=(e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.todo} placeholder="What todo..." name="todo"/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default ToDoForm