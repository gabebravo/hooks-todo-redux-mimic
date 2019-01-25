
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
        const isRemovedTodo = state.currentTodo.id === payload.id ? {} : state.currentTodo
        const newTodos = state.todos.filter( todo => todo.id !== payload.id )
        return { ...state, todos: newTodos, currentTodo: isRemovedTodo }
      }
      case 'ADD': {
        const newTodos = [...state.todos, payload]
        return { ...state, todos: newTodos }
      }
      case 'EDIT': {
        const newTodos = state.todos.map( todo => todo.id === payload.id ? payload : todo )
        return { ...state, todos: newTodos }
      }
      case 'SET_EDIT_TODO': {
        return { ...state, currentTodo: payload }
      }
      default: 
        return state;
  }
}

