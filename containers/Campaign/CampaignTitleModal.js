import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CampaignTitleModal extends Component
{
    render() {
      if(this.props.show)
      {
        return <div className='campaign__titlemodal'>
        <div className='textbox'>{this.props.title}</div></div>
      }
      return null;
    }
}
