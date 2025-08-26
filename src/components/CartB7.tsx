import { Component } from "react";
import ItemCart from "./ItemCart";
import "../styles/Bai07.css";

export default class CartB7 extends Component {
  render() {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <hr />
        <div className="listItemInCart">
          <ItemCart></ItemCart>
          <ItemCart></ItemCart>
          <ItemCart></ItemCart>
          <ItemCart></ItemCart>
        </div>
        <hr />
        <div className="total">Tong tien: {61500000} VND</div>
      </div>
    );
  }
}
