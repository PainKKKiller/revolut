import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFXRates } from '../actions';

import ExchangeView from './views/ExchangeView';
import WalletView from './views/WalletView';

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

    this.pollFXRates = this.pollFXRates.bind(this);
  }

  componentDidMount() {
    this.props.fetchFXRates("USD");

    this.timer = setInterval(this.pollFXRates, 10000);
  }

  pollFXRates() {
    console.log("poll FX rates every 10 seconds...");

    //this.props.fetchFXRates("USD");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
 


  render() {
 
    return (

      <div style={ { minWidth: '100%', minHeight: '100%' } }>
        <Switch>
          <Route exact path="/" component={ ExchangeView }/>
          <Route exact path="/wallet" component={ WalletView }/>
        </Switch>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
    var actions = {};
    actions.fetchFXRates = fetchFXRates;
    return bindActionCreators(actions, dispatch);
}


export default withRouter(connect(null, mapDispatchToProps)(App));