import React, {Component} from 'react';
import Canvas from './Canvas';
import Toolbox from './Toolbox';
import '../css/index.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  componentWillMount(){
    this.setState(
      {items: [
        {
          title: 'Aardmor'
        },
        {
          title: 'The Makers Passing'
        },
        {
          title: 'The Shadow Lands'
        }

    ]});
  }

  render () {
    return <div>
             <Canvas />
             <Toolbox items={this.state.items}/>
           </div>
  }
}
