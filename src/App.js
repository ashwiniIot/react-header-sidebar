import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Device } from './Device';
import { Organization } from './Organization';
import { Settings } from './Settings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Device} />
          <Route path="/organization" component={Organization} />
          <Route component={Settings} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
