import React from 'react'

// Todos initial state passed to context
export const TodosContext = React.createContext({
    todos: [
        { id: 1, text: 'Eat breakfast', complete: false },
        { id: 2, text: 'Walk dogs', complete: false },
        { id: 2, text: 'Do laundry', complete: true }
    ]
})