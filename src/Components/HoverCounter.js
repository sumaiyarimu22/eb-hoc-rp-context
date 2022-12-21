import React, { Component } from "react";
import CounterWrapper from "../utls/counterWrapper";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1>count:{this.props.count}</h1>
        <button onMouseOver={this.props.incrementHandler}>Increment</button>
      </div>
    );
  }
}
export default CounterWrapper(HoverCounter);
