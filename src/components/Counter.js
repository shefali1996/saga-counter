import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Age:{this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>INCREMENT</button>
        <button onClick={this.props.onAgeDown}>DECREMENT</button>
      </div>
    );
  }
}
