import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Campaign extends Component
{

  HandleClick(e) {
    e.preventDefault();
    console.log("Clicked");
  }
  render() {
    return <div className='campaign__box' onClick={this.HandleClick}>
    {this.props.title}
    </div>
  }
}
