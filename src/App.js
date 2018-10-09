import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Feed from './components/Feed/feed';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        pins:[]
    }
  }  

componentDidMount(){
  debugger
  fetch("/api/pins")
  .then(response => response.json())
  .then(data => this.setState({
    pins: [...this.state.pins, ...data]
}))};


  render() {
    return (
      <div>
       <Header/>
       <Feed pins={this.state.pins}/>
      </div>
    );
  }
}

export default App;


