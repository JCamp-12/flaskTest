import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/App.css';
import Person from './Person/Person';
// import SplitPeople from './Person/splitPeople';
// import Tester from './Helpers/tester';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "jason"
    };

  }
  

  render() {
   


    return (
      <div className="App">
        {/* <h1>{this.state.name}</h1> */}
        <div><h1>Hi There You Hi </h1></div>
        <div><h1>
          {this.state.name}
        </h1></div>
        <Person />
      </div>
    );
  }
}


export default App;
