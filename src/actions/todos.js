import store from '../store';
import shortid from 'shortid';

export function addTodo(text) {
  store.dispatch ({
    type: 'ADD_TODO',
    todo: {
      text: text,
      id: shortid.generate(),
      status: 'pending'
    }  
  })
}

export function removeTodo(id){
  store.dispatch({
    type: 'REMOVE_TODO',
    id: id
  })
}

export function completeTodo(id){
  store.dispatch({
    type: 'COMPLETE',
    id: id
  })
}