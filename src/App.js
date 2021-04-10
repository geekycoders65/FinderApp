import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/index';
import Table from './components/Internship/index'
import Table1 from './components/Scholarship'
import Table2 from './components/Jobs'
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component ={Home} exact />
        <Route path="/internship" component={Table} exact />
        <Route path="/Scholarship" component={Table1} exact />
        <Route path="/Jobs" component={Table2} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
