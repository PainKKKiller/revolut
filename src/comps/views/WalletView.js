import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/exchangeView.css';

var styles = {
    color: 'white',
    marginTop: '2vh',
    fontSize: '2em',
    textAlign: 'center'
}

class WalletView extends Component {

 constructor(props) {
   super(props);

   this.symbols = { GBP: 'gbp', EUR: 'euro', USD: 'dollar' };
 }

 getCurrency(key) {
    return this.symbols[key];
 }


 getCurrentWallet() {
    let currencies = [];
    let keyCounter = 0;
    for(var key in this.props.wallet) {
        currencies.push(<p style={ styles } key={ keyCounter }>{ key + ": " +  Number(this.props.wallet[key]).toFixed(2) + " " }<i className={ "fa fa-" + this.getCurrency(key) }></i></p>);
        keyCounter++; // тут был какой то странный баг с ключами решил так.
    }
    return currencies;
 }




  render() {

    return (
      <div className="exchange-view">
        <Link to="/"><button className="topPanel-btn topPanel-cancel back">BACK</button></Link>
        <div style={{ clear: 'left' }}></div>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Your wallet: </h1>
        { this.getCurrentWallet() }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { wallet: state.wallet  };
}
  

  
export default connect(mapStateToProps)(WalletView);