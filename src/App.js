import React from 'react';

import './App.css';
import NavBar from "./Components/NavBar";
import ToDoApp from "./Components/ToDoApp";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">





        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={ToDoApp} />
                {/*<Route exact path="/todo" component={AllToDO} />*/}
            </Switch>
        </Router>
        <br/>
        <br/>
        </div>

  );
}

export default App;
