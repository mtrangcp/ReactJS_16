import React, { Component } from "react";
import "../styles/Bai05.css";

type StateType = {
  name: string;
  email: string;
  age: number;
  msg: string;
  result: boolean;
};

export default class Bai05 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: 0,
      msg: "",
      result: false,
    };
  }

  handelChangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const obj = this.state;

    if (obj.name) {
      if (obj.email.includes("@")) {
        if (obj.age > 0) {
          this.setState({ result: true });
        } else {
          this.setState({ msg: "Tuoi phai > 0", result: false });
        }
      } else {
        this.setState({ msg: "Email phai chua @", result: false });
      }
    } else {
      this.setState({ msg: "Ten khong duoc de trong", result: false });
    }
  };

  resetInput = () => {
    this.setState({
      name: "",
      email: "",
      age: 0,
      msg: "",
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Nhap thong tin nguoi dung</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Ho ten"
            name="name"
            value={this.state.name}
            onChange={this.handelChangInput}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handelChangInput}
          />
          <input
            type="number"
            placeholder="Tuoi"
            name="age"
            value={this.state.age}
            onChange={this.handelChangInput}
          />
          <div className="btn-gr">
            <button type="submit">Gui</button>
            <button onClick={this.resetInput}>Xoa tat ca</button>
          </div>

          {this.state.result ? (
            <div className="result">
              <h3>Thong tin da nhap</h3>
              <p>Ho ten: {this.state.name}</p>
              <p>Email: {this.state.email}</p>
              <p>Tuoi: {this.state.age}</p>
            </div>
          ) : (
            <div className="errorMsg">{this.state.msg} </div>
          )}
        </form>
      </div>
    );
  }
}
