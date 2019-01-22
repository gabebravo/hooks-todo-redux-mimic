import React, { useContext } from 'react'
import { TodosContext } from '../context';
import shortid from 'shortid';

// example of how to access the global reducer from anywhere
export default function TodoList() {

  const globalReducer = useContext(TodosContext);
  const { state, dispatch } = globalReducer;

  function renderTodos(todos){
    return todos.map( todo => {
      return <li key={shortid.generate()}>{todo.text}</li>
    })
  }

  return (
    <ul>
      { state && state.todos && renderTodos(state.todos) }
    </ul>
  )
}
