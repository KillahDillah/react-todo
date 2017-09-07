import React, { Component } from 'react';
import '../style/App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'
import {Provider} from 'react-redux';
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ToDoForm />
          <ToDoList />
        </div>
      </Provider>
    );
  }
}

export default App;
