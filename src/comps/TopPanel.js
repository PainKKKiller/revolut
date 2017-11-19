import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopRates from './TopRates';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fx, changeWallet, changeConvertion } from '../actions';

import './css/topPanel.css';




class TopPanel extends Component {

 constructor(props) {
   super(props);
   
   this.exchangeCurrency = this.exchangeCurrency.bind(this);
 }

 exchangeCurrency(e) {
   
   if(this.props.conversion.sum > 0) {
    let toCurrency = fx.convert(this.props.conversion.sum, {from: this.props.conversion.from, to: this.props.conversion.to});
    let newWallet = Object.assign({}, this.props.wallet);
    newWallet[this.props.conversion.from] = newWallet[this.props.conversion.from] - this.props.conversion.sum;
    newWallet[this.props.conversion.to] = newWallet[this.props.conversion.to] + toCurrency;
    let newConversion = { from: 'USD', to: 'EUR', sum: 0 };
    this.props.changeWallet(newWallet);
    this.props.changeConvertion(newConversion);
   } else {
    e.preventDefault();
   }
 }


  render() {

    return (
      <div className="topPanel">
        <Link to="/wallet"><button className="topPanel-btn topPanel-cancel">Cancel</button></Link>
         <TopRates/>
         <Link to="/wallet"><button onClick={ this.exchangeCurrency } className="topPanel-btn topPanel-exchange">Exchange</button></Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
           conversion: state.conversion,
           wallet: state.wallet            };
}

function mapDispatchToProps(dispatch) {
    var actions = {};
    actions.changeConvertion = changeConvertion;
    actions.changeWallet = changeWallet;
    return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);