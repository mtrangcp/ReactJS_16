import { Component } from "react";
import "../styles/Bai01.css";

type StateType = {
  isLoggedIn: boolean;
};

export default class Bai02 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return (
      <div className="login">
        {this.state.isLoggedIn ? (
          <h1>Xin chào, User!</h1>
        ) : (
          <h1>Vui lòng đăng nhập để tiếp tục.</h1>
        )}

        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
