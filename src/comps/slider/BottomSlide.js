import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getBaseCurrency } from '../../selectors';

import { fx, changeConvertion } from '../../actions';

import './bottomSlide.css';


class BottomSlide extends Component {

  constructor(props){
    super(props);

    this.symbols = { GBP: 'gbp', EUR: 'euro', USD: 'dollar' };
  }

  componentDidMount() {
    if(this.props.conversion.to != this.props.currency) {
        let newConversion = Object.assign({}, this.props.conversion);
        newConversion.to = this.props.currency;
        this.props.changeConvertion(newConversion);
    }
  }

  getSymbol() {
    return this.symbols[this.props.currency];
  }

  getFromCurrency() {
    return this.symbols[this.props.conversion.to];
  }

  getToCurrency() {
    return this.symbols[this.props.conversion.from];
  }

  getFirstPart() {
      if(this.props.rates.length == 0) return '';
      let full = fx.convert(1, {from: this.props.conversion.from, to: this.props.conversion.to}); 
      if(full)
        return full.toFixed(2);
      else 
        return "";
  }

  getSum() {
      if(! this.props.conversion.sum)
        return "   ";
      else 
        return "+" + fx.convert(this.props.conversion.sum, {from: this.props.conversion.from, to: this.props.conversion.to}).toFixed(2);
  }
  

  render() {
    return (
        <div className="slide slide-dark">
            <div className="triangle"></div>
             <div className="col-left">
                <h1 className="currency-header">{ this.props.currency }</h1>
                <p className="currency-in-wallet">{ 'You have ' + Number(this.props.wallet[this.props.currency]).toFixed(2) + ' ' + this.props.currency}</p>
             </div>
            <div className="col-right">
            <div className="kostul"></div>
                <p className="bottom-slide-result">{ this.getSum() }</p>
                <span className="bottomPanel-rates-content">
                    <i className={ "fa fa-" + this.getFromCurrency() }></i> 1 = <i className={ "fa fa-" + this.getToCurrency() }></i>{" " + this.getFirstPart() }
                </span>
            </div>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return { conversion: state.conversion,
           wallet: state.wallet,
           rates: state.rates            };
}

function mapDispatchToProps(dispatch) {
    var actions = {};
    actions.changeConvertion = changeConvertion;
    return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BottomSlide);
