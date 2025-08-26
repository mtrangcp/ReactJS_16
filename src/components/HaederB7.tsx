import { Component } from "react";
import "../styles/Bai07.css";
import CartB7 from "./CartB7";

type StateType = {
  openCart: boolean;
};

export default class HaederB7 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      openCart: false,
    };
  }
  handleClickIconCart = () => {
    this.setState({ openCart: !this.state.openCart });
  };

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <a href="#">Trang chu</a>
          <a href="#">Danh sach san pham</a>
        </div>
        <div className="header-right">
          <img
            onClick={this.handleClickIconCart}
            src="https://pngimg.com/d/shopping_cart_PNG4.png"
            alt=""
          />
          <span>{3}</span>
        </div>

        {this.state.openCart && <CartB7></CartB7>}
      </div>
    );
  }
}
