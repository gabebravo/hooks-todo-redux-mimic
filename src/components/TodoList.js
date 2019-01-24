import React, { useContext } from 'react'
import { TodosContext } from '../context';
// SAVE THIS FOR WHERE TODOS ARE CREATED : import shortid from 'shortid'; shortid.generate()

// example of how to access the global reducer from anywhere
export default function TodoList() {

  const globalReducer = useContext(TodosContext);
  const { state, dispatch } = globalReducer;

  const title = state.todos.length > 0 ?
    `${state.todos.length} Todos` : `Let's add some Todos!`

  function renderTodos(todos){
    return todos.map( todo => {
      return (
        <li key={todo.id} style={styles.liStyles}>
          <span style={ todo.complete ? styles.spanStylesComplete : styles.spanStyles } onClick={() => dispatch({ type: 'TOGGLE', payload: todo })}>{todo.text}</span>
          <div>
            <button style={{ ...styles.btnStyles, backgroundColor: 'darkcyan' }}>Edit</button>
            <button style={{ ...styles.btnStyles, backgroundColor: 'firebrick' }}>Delete</button>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        { state && state.todos && renderTodos(state.todos) }
      </ul>
    </div>
  )
}

// ____________ STYLES _____________

const styles = {
  liStyles: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'darkorange', padding: '1rem', margin: '1rem'
  }, 
  btnStyles: {
    backgroundColor: 'darkcyan', color: 'white', padding: '0.5rem', marginLeft: '0.5rem', width: '5rem', borderRadius: '10%'
  }, 
  spanStyles: {
    fontSize: '1.5rem', cursor: 'pointer', color: 'white'
  },
  spanStylesComplete: {
    fontSize: '1.5rem', cursor: 'pointer', textDecoration: 'line-through', color: 'black'
  }
}
