import React from 'react'
import Login from './Login'
import Register from './Register'
import Index from './Index'
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () =>
  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/login/" component={Login} />
    <Route path="/register/" component={Register} />
  </Router>
