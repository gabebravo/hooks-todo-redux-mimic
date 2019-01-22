import React, { useContext } from 'react'
import { TodosContext } from '../context';
// SAVE THIS FOR WHERE TODOS ARE CREATED : import shortid from 'shortid'; shortid.generate()

// example of how to access the global reducer from anywhere
export default function TodoList() {

  const globalReducer = useContext(TodosContext);
  const { state, dispatch } = globalReducer;

  function renderTodos(todos){
    return todos.map( todo => {
      return <li key={todo.id}>{todo.text}</li>
    })
  }

  return (
    <ul>
      { state && state.todos && renderTodos(state.todos) }
    </ul>
  )
}
