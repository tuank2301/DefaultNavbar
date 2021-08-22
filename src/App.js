import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Error from './components/pages/Error';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='*' component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
