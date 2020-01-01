import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
          (<Router>
              <Route exact path="/" component={App} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={App} />
              {/* <Route exact path="/user" render={() => <UserProfile page={this.state.page}/>} /> */}
          </Router>) ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
