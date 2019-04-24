import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/home'
import Person from './components/person_info'
import users from './components/users'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/home'component={Home}></Route>
          <Route path='/info'component={Person}></Route>
          <Route path='/:id'component={users}></Route>
        </Switch>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
