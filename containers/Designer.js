import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Toolbox from './Toolbox'
import Canvas from './Canvas'

export default class Designer extends Component
{
  render() {
    return <div className='designer'><Canvas/><Toolbox/></div>
  }
}
