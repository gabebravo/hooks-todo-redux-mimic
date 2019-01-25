import React, { useState, useContext } from 'react'
import { TodosContext } from '../context'
import shortid from 'shortid'

export default function TodoForm() {
  const globalReducer = useContext(TodosContext);
  const { state, dispatch } = globalReducer;

    const [fieldsObj, setField] = useState({ add: '' });

    function handleSubmit() {
        dispatch({ type: 'ADD', payload: { id: shortid.generate(), text: fieldsObj.add, complete: false } })
        setField({ add: '' })
    }

  return (
    <div className="container max-w-md text-center font-mono">
        <h1 className="text-bold">Add Todo</h1>
        <div className="flex justify-center p-5">
            <input type="text" value={fieldsObj.add} onChange={ ev => setField({ ...fieldsObj, add: ev.target.value })}
                className="border-black border-solid border-2"></input>
            <button style={{ ...styles.btnStyles, backgroundColor: 'darkcyan' }} onClick={handleSubmit}>Submit</button>
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
