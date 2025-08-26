import { Component } from "react";

type PropsType = {
  subject: string;
};

export default class ItemB1 extends Component<PropsType> {
  render() {
    return <div className="item">{this.props.subject}</div>;
  }
}
