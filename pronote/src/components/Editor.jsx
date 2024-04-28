import React, { Component } from 'react';
import './Editor.css';



export default class Pronote extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: "" };

    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }


  render() {
    return (
      <div id='container'>

        <div id='input-section'>
            <h2>Input</h2>
            <textarea id='input' onChange={this.handleChange} defaultValue={this.state.value}></textarea>
        </div>

        <div id='pronote-section'>
            <h2>Pro Note</h2>
            <div id='pronote'>
            {this.state.value}
            </div>
        </div>

      </div>
    )
  }
}