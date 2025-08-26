import { Component } from "react";

type StateType = {
  count: number;
};

export default class Bai04 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
