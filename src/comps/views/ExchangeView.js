import React, { Component } from 'react';
import TopPanel from '../TopPanel';
import Slider from '../slider/Slider';

import '../css/exchangeView.css';



export default class ExchangeView extends Component {

 constructor(props) {
   super(props);
 }




  render() {

    return (
      <div className="exchange-view">
        <TopPanel/>
        <Slider activeIndex={ 0 } position="top"/>
        <Slider activeIndex={ 2 } position="bottom"/>
      </div>
    );
  }
}