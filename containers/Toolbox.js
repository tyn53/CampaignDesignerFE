import React, {Component} from 'react';
import Campaign from './Campaign';

export default class Toolbox extends Component
{
   HandleClick(e) {
     e.preventDefault();
     console.log("clicked");

   }

   render()
   {
      let toolboxOptions = this.props.items.map(item => {
        return <Campaign key={item.CampaignID} title={item.CampaignName}></Campaign>
      })

      return <div className="toolbox">
      <div className="toolbox__title">CD</div>
      <hr/>
      Campaign
      {toolboxOptions}
      <hr/>
      </div>
   }
}
