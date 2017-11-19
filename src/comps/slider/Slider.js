import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

import { AVAILABLE_CURRENCIES } from '../../actions';

import Dots from './Dots';
import TopSlide from './TopSlide';
import BottomSlide from './BottomSlide';

//import { CSSTransition } from 'react-transition-group';
//import { ReactCSSTransitionGroup } from 'react-addons-css-transition-group';
//import ReactCSSTransitionReplace from 'react-css-transition-replace';

import "./slider.css";



export default class Slider extends Component {

 constructor(props) {
   super(props);

   this.state = { activeIndex: this.props.activeIndex, active: false };
   this.startX = 0;
   //this.leftHandler = this.leftHandler.bind(this);
   //this.rightHandler = this.rightHandler.bind(this);

   this.changeSlide = this.changeSlide.bind(this);
 }

 /*swipingLeft(e, absX) {
    console.log("You're Swiping to the Left...", e, absX);
 }

 swipingRight(e, absX) {
    console.log("You're Swiping to the Right...", e, absX);
 }*/

 renderSlide() {
   if(this.props.position == "top")
    return <TopSlide currency={ AVAILABLE_CURRENCIES[this.state.activeIndex]} key={ this.state.activeIndex }/>
   else
    return <BottomSlide currency={ AVAILABLE_CURRENCIES[this.state.activeIndex]} key={ this.state.activeIndex }/>
 }

/*leftHandler() {
  console.log("left click");
  var temp = this.state.activeIndex;
  this.changeSlide(--temp);
}

rightHandler() {
  console.log("right click");
  var temp = this.state.activeIndex;
  this.changeSlide(++temp);
}*/

changeSlide(index) {
      const numberOfSlides = 3;
      let activeIndex;

      if(index < 0)
        activeIndex = numberOfSlides - 1;
      else if(index > numberOfSlides - 1)
        activeIndex = 0;
      else
        activeIndex = index;
      let active = ! this.state.active;
      this.setState({ active, activeIndex });
    }


  render() {

    return (
    <Swipeable onSwipingLeft={ this.swipingLeft }
               onSwipingRight={ this.swipingRight } >
      <div className="slider" >
        {/*<CSSTransition
          in={ this.state.active }
          classNames="page"  
          timeout={250}>*/}
            { this.renderSlide() }
        {/*</CSSTransition>*/}
      </div>
      <Dots dotsAmount="3" activeIndex={ this.state.activeIndex } changeIndex={ this.changeSlide }/>
    </Swipeable>
    );
  }
}