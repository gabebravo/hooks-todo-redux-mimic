
## React Hooks CRUD replacing Redux using useContext & useReducer

### `Basic context example`
index.js >> 
1. Break the createContext method off React
2. Create a context object 
3. Assign it some default value
4. Wrap the root component in the context instance provider component
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const UserContext = React.createContext();
const username = "Dave";

ReactDOM.render(
<UserContext.Provider value={username}>
    <App />
</UserContext.Provider>
, document.getElementById('root'));
```

App.js >> 
1. Import the context
2. wrap the render prop in the Consumer context instance component
3. render the value
```javascript
import React from 'react';
import { UserContext } from './index';

export default function App() {
  return (
      <div>
        <UserContext.Consumer>
            { value => <div>{`Hello, ${value}`}</div>}
        </UserContext.Consumer>
      </div>
  )
}
```

### `Basic context example using useContext hook`
App.js >> 
1. Import the context
2. Destruct the useContext hook
3. Pass it the imported context and assign the result to a value 
4. Use the value
```javascript
import React, { useContext } from 'react';
import { UserContext } from './index';

export default function App() {
  const value = useContext(UserContext);
  
  return (
      <div>
        <div>{`Hello, ${value}`}</div>
      </div>
  )
}
```

### `Basic reducer example using useReducer hook`
App.js >> 
1. Destruct the useReducer hook
2. Set initial value(s) for the reducer state
3. Define the Reducer (more on this later)
4. Pass the reducer function and the initialState to the useReducer hook
5. Destruct the array values returned form useReducer
NOTE : [state, dispatch] >> state is the values / dispatch is the case type and/or a payload
6. Call the dispatch on the click event, pass it type, use the switch/case in the reducer to execute logic
     and update values to the reducer state by returning values 
7. On the re-render the new values get picked up 
```javascript
import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';
import { red } from 'ansi-colors';

const initialState = { count: 0 }

function reducer(state, action) {
  switch(action.type){
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext);

  return (
      <div>
        <h4 className="m-1 p-1">{`Count: ${state.count}`}</h4>
        <button className="border m-1 p-1" onClick={() => dispatch({ type: 'increment'}) }>Increment</button>
        <button className="border m-1 p-1" onClick={() => dispatch({ type: 'decrement'}) }>Decrement</button>
        <button className="border m-1 p-1" onClick={() => dispatch({ type: 'reset'}) }>Reset</button>
      </div>
  )
}
```
### `Complex example using context in combo with reducer for global state (redux substitute)`
NOTE : see the code in the "use-context-reducer-combo" branch
