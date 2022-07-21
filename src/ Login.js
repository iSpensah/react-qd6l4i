import React, { Component } from 'react';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
    name : "spencer"
      }
    }
  
  render() {
    return (
    <div>

      <input type ='text' placeholeder = 'Enter Username' value = {this.state.name}></input>
      <input type ='text' placeholeder = 'Enter Username' value = {this.state.name}></input>
      <input type ='submit' placeholeder = 'Enter Username' value = {this.state.name}></input>
      </div>
      );
  }
}

export default Login;
