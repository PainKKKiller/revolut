import React, { Component } from 'react';





export default class Dots extends Component {

 constructor(props) {
   super(props);
 }

 renderDots() {
     let dots = [];
     for(var i = 0; i < this.props.dotsAmount; i++) {
        if(this.props.activeIndex === i) {
            dots.push(<div key={ i } className="dot dot-active"></div>);
        } else {
            dots.push(<div key={ i } className="dot" onClick={ this.onDotClick.bind(this, i) }></div>);
        }
     }
     return dots;
 }

 onDotClick(i) {
     //console.log("dot cliked", i);
     this.props.changeIndex(i);
 }


  render() {

    return (
      <div className="dots">
          { this.renderDots() }
      </div>
    );
  }
}