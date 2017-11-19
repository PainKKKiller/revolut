import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fx } from '../actions';



class TopRates extends Component {

  constructor(props){
    super(props);

    this.symbols = { GBP: 'gbp', EUR: 'euro', USD: 'dollar' };
  }

  getFromCurrency() {
    return this.symbols[this.props.conversion.from];
  }

  getToCurrency() {
    return this.symbols[this.props.conversion.to];
  }

  getFirstPart() {
      if(this.props.rates.length == 0) return '';
      let full = fx.convert(1, {from: this.props.conversion.from, to: this.props.conversion.to}); 
      if(full)
        return full.toFixed(2);
      else 
        return "";
  }

  getSecondPart() {
    if(this.props.rates.length == 0) return '';
    let full = fx.convert(1, {from: this.props.conversion.from, to: this.props.conversion.to});
    if(!full) return "";

    let str = String(full.toFixed(4)).split(".")[1];
    if(str.length >= 3)
        return str.substring(2);
    else
        return "";
  }

  render() {
    return (
        <button className="topPanel-btn topPanel-rates">
            <span className="topPanel-rates-content">
                <i className={ "fa fa-" + this.getFromCurrency() }></i> 1 = <i className={ "fa fa-" + this.getToCurrency() }></i>{" " + this.getFirstPart() }<span className="rates-small">{this.getSecondPart() }</span>
            </span>
        </button>
    );
  }
}



function mapStateToProps(state) {
  return { 
           conversion: state.conversion,
           rates: state.rates            };
}

function mapDispatchToProps(dispatch) {
    var actions = {};
    return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TopRates);
