import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from './Counter'

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Counter} />
    </Router>
  )
}
