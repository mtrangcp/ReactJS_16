import { Component } from "react";
import "../styles/Bai07.css";

export default class HaederB7 extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <a href="#">Trang chu</a>
          <a href="#">Danh sach san pham</a>
        </div>
        <div className="header-right">
          <img src="https://pngimg.com/d/shopping_cart_PNG4.png" alt="" />
          <span>3{}</span>
        </div>
      </div>
    );
  }
}
