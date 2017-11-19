import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getBaseCurrency } from '../../selectors';

import { changeConvertion } from '../../actions';

import './topSlide.css';



class TopSlide extends Component {

  constructor(props){
    super(props);

    this.symbols = { GBP: 'gbp', EUR: 'euro', USD: 'dollar' };

    this.state = { isValidInput: true, empty: true };

    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    if(this.props.conversion.from != this.props.currency) {
        let newConversion = Object.assign({}, this.props.conversion);
        newConversion.from = this.props.currency;
        this.props.changeConvertion(newConversion);
    }
    this.input.focus();
  }

  componentWillUnmount() {
    if(this.props.conversion.sum > 0) {
      this.changeSum(0);
    }
  }

 
  onInputChange(e) {
    let newSum = Number(e.target.value);
    if(this.checkValidInput(newSum)) {
      this.changeSum(newSum);
      this.setState({ empty: false, isValidInput: true });
    } else {
      this.setState({ empty: false, isValidInput: false });
      this.changeSum(0);
    }
    if(e.target.value.length == 0) this.setState({ isValidInput: true, empty: true });
  }

  changeSum(newSum) {
    let newConversion = Object.assign({}, this.props.conversion);
    newConversion.sum = newSum;
    this.props.changeConvertion(newConversion);
  }

  getSymbol() {
    return this.symbols[this.props.currency];
  }

  checkValidInput(value) {
    let newSum = Number(value);
    return (!isNaN(newSum) && newSum <= this.props.wallet[this.props.currency]);
  }
  

  render() {
    return (
        <div className="slide">
          <div className="col-left">
            <h1 className="currency-header">{ this.props.currency }</h1>
            <p className="currency-in-wallet">{ 'You have ' + this.props.wallet[this.props.currency] + ' ' + this.props.currency}</p>
          </div>
          <div className="col-right">
            <div className="kostul"></div>
            <span className="input-span">
              { this.state.isValidInput && !this.state.empty  ? "-" : "" }
            </span>
            <input onChange={ this.onInputChange } 
                   type="text" 
                   className={'input' + (this.state.isValidInput ? '' : ' input-invalid')}
                   ref={(input) => { this.input = input; }}></input>
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


export default connect(mapStateToProps, mapDispatchToProps)(TopSlide);
