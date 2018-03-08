import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Adventure from '../Adventure';
import CampaignTitleModal from './CampaignTitleModal'


export default class Campaign extends Component
{
  constructor(){
    super();
    this.state = {
      isHovered:false
    }
  }

  ComponentWillMount() {
    this.setState({isHovered:false})
  }

  HandleClick = (e) => {
    this.setState({isHovered:false})
  }
  HandleMouseEnter = () => {
    this.setState({isHovered:true});

  }
  HandleMouseLeave = () => {
    this.setState({isHovered:false});
  }

  render() {
    if(this.props.title !== undefined)
    {
      return <div className='campaign__box'  onClick={this.HandleClick} onMouseEnter={this.HandleMouseEnter} onMouseLeave={this.HandleMouseLeave}>
        <div className='textbox'>
          {this.props.title.charAt(0)}
          <CampaignTitleModal key={this.props.title} show={this.state.isHovered} title={this.props.title}/>
        </div>
      </div>
    }
    else {
      return <div></div>
    }
  }
}
