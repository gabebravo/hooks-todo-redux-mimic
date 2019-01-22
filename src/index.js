import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// import context and reducer
import { TodosContext } from './context';
import { todosReducer } from './reducer';

// root state wrapper will provide context for all children to access the global reducer
const StateWrapper = ({ children }) => {

    const initialState = useContext(TodosContext); // initialize context
    const [state, dispatch] = useReducer(todosReducer, initialState) // use context as the state for the reducer instance

    return ( // wrapper component
        <TodosContext.Provider value={{ state, dispatch }}>
            { children }
        </TodosContext.Provider>
    )
}

ReactDOM.render(
    <StateWrapper>
        <App />
    </StateWrapper>
, document.getElementById('root'));

// serviceWorker
serviceWorker.unregister();
