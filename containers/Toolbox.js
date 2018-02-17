import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Campaign from './Campaign';

export default class Toolbox extends Component
{
   render()
   {
      return <div className="toolbox">
      <div className="toolbox__title">CDesigner</div>
      <Campaign/>
      <Campaign/>
      <Campaign/>
      </div>
   }
}
