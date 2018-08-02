import React, { Component } from 'react';

class Person extends Component {


  render ( ) {
    
    return (
      <div style={{
        color: "black",
        border: "black 1px solid",
        background: "#1323"
      }}>
        <h1>{this.props.name} said:</h1>
        {/* <h2> Finally! this was my {Math.floor(Math.random() * 1000)} try!!</h2>   */}

        <h3> My best try previously was {this.props.try}</h3>
        <h5 >ok it was really {this.props.realtry}</h5>
        <input 
          type='text' 
          onChange={this.props.onchange} 
          defaultValue={this.props.name} 
          />
        <div onClick={this.props.click} >{this.props.children}</div>
      </div>
    )}
  
}



export default Person;