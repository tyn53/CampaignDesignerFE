import React, {Component} from 'react';
import Canvas from './Canvas';
import Toolbox from './Toolbox';
import '../styles/css/index.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount(){
      var targetUrl = "http://localhost:5000/campaign";
      fetch(targetUrl).then ( results => {
        return results.json();
      }).then(data => {
        this.setState({items:data});
      })
  }

  render () {
    return <div className="app">
             <Canvas />
             <Toolbox items={this.state.items}/>
           </div>
  }
}
