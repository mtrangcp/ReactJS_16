import { Component } from "react";
import "../styles/Bai03.css";

export default class Bai03 extends Component {
  render() {
    return (
      <div className="btn-group">
        <button className="primary">Primary</button>
        <button className="secondary">Secondary</button>
        <button className="success">Success</button>
        <button className="warning">Warning</button>
        <button className="danger">Danger</button>
        <button className="info">Info</button>
        <button className="light">Light</button>
        <button className="dark">Dark</button>
        <a href="#">Link</a>
      </div>
    );
  }
}
