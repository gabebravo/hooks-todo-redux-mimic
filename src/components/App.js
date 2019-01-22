import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from './TodoList'

// single component for all UI routes
export default function App() {
  return (
    <Router>
      <Route path="/" exact component={TodoList} />
    </Router>
  )
}
