
// single reducer for all Todos
export function todosReducer(state, action) {
    const { type, payload } = action;

  switch(type){
      case 'TOGGLE': {
        const newTodos = state.todos.map( todo => todo.id === payload.id 
            ? ({ ...payload, complete: !payload.complete }) : todo )
        return { ...state, todos: newTodos }
      }
      case 'DELETE': {
        const newTodos = state.todos.filter( todo => todo.id !== payload.id )
        return { ...state, todos: newTodos }
      }
      default:
        return state;
  }
}

