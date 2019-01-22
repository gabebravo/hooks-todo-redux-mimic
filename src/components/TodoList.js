import React, { useContext } from 'react'
import { TodosContext } from '../context';

// example of how to access the global reducer from anywhere
export default function TodoList() {

  const globalReducer = useContext(TodosContext);
  const { state, dispatch } = globalReducer;

  console.log('state', state)

  return (
    <div>
      Hello World!
    </div>
  )
}
