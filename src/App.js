import React from 'react';
/* import './App.css'; */
import Form from './components/Form';
import Todo from './components/Todo';

import Adminlogin from './components/adminlogin'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"; 
import { Fragment } from 'react';


export default function App() {
  return (
    <div className="App">
      
      <Fragment>
        <Router>
          <Route exact path="/" component={Adminlogin} />
            <Switch>
            <Route exact path="/Form" component={Form} />
            <Route exact path="/Todo" component={Todo} />
            </Switch>
        </Router>
      </Fragment>
    </div>
  );
}




  {/* <Router>
      <Route exact path="/" component={Alogin} /> */}
      {/* <Switch>
      <Route exact path="/Form" component={Form} />
      <Route exact path="/Todo" component={Todo} />
      </Switch> */}
      {/* </Router> */}
      {/* <Alogin /> */}
      {/* <UploadImage />*/}