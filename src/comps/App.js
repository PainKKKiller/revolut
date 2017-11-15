import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  } from '../actions';

import BlankPage from './comps/views/BlankPage';

import { Router as Router2, browserHistory, Redirect } from 'react-router';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';




 class App extends Component {

  constructor(props) {
    super(props);

  }
 


  render() {
 
    return (

      <div id='game-container' width="1126" height="634">
        <div>
        <Switch>
          <Route exact path="/" component={ BlankPage }/>
        </Switch>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    console.log("app#mapStateToProps");
    return { session:  state.session };
}

function mapDispatchToProps(dispatch) {
    var actions = {};
    return bindActionCreators(actions, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));