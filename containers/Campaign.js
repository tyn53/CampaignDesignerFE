import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Adventure from './Adventure';


export default class Campaign extends Component
{

  HandleClick(e) {
    e.preventDefault();
    console.log("Clicked");
  }
  HandleMouseEnter(e) {
    e.preventDefault();
    
  }
  HandleMouseLeave(e) {

  }

  render() {
    if(this.props.title !== undefined)
    {
      return <div className='campaign__box' onClick={this.HandleClick} onMouseEnter={this.HandleMouseEnter} onMouseLeave={this.HandleMouseLeave}>
        <div className='campaign__box__text'>
          {this.props.title.charAt(0)}
        </div>
      </div>
    }
    else {
      return <div></div>
    }
  }
}
