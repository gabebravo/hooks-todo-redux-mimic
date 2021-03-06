import React, { useState, useEffect, useContext } from 'react'
import { TodosContext } from '../context'
import shortid from 'shortid'

export default function TodoForm() {
  const globalReducer = useContext(TodosContext);
  const { state, dispatch } = globalReducer;

    const [fieldValue, setField] = useState('');

    useEffect( () => {
        if( state.currentTodo.text ){
            setField(state.currentTodo.text)
        } else { // if the todo is deleted
            setField('')
        }
    }, [state.currentTodo.id]) // only run this when the id in the current todo changes

    function handleSubmit(type) {
        if( type === 'Add' && fieldValue.length > 0 ) {
            dispatch({ type: 'ADD', payload: { id: shortid.generate(), text: fieldValue, complete: false } })
        } else if ( type === 'Edit' ) {
            dispatch({ type: 'EDIT', payload: { ...state.currentTodo, text: fieldValue } })
            dispatch({ type: 'SET_EDIT_TODO', payload: {} })
        }
        setField('')
    }

  return (
    <div className="container max-w-md text-center font-mono">
        <h1 className="text-bold">{ state.currentTodo.text ? 'Edit' : 'Add' }</h1>
        <div className="flex justify-center p-5">
            <input type="text" value={fieldValue} onChange={ ev => setField( ev.target.value )}
                className="border-black border-solid border-2"></input>
            <button style={{ ...styles.btnStyles, backgroundColor: 'darkcyan' }} 
                onClick={() => handleSubmit(state.currentTodo.text ? 'Edit' : 'Add' )}>Submit</button>
        </div>
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
