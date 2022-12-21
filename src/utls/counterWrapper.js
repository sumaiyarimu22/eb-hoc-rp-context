import React from "react";

const CounterWrapper = (OldComp) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementHandler = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <OldComp
          count={this.state.count}
          incrementHandler={this.incrementHandler}
        />
      );
    }
  }
  return NewComp;
};

export default CounterWrapper;
