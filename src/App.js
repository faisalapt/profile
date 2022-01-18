import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
      </Switch>
    )
  }
}
export default App;