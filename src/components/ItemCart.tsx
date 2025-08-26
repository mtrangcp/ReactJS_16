import { Component } from "react";

export default class ItemCart extends Component {
  render() {
    return (
      <div className="item-cart">
        <img
          src="https://product.hstatic.net/1000063620/product/a05-bac_82ba41efafd64973b35a4ada484f2044.jpg"
          alt=""
        />
        <div className="name-product">Dien thoai sam sung galaxy</div>

        <div className="quantity">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
        <button className="btn-del">🗑️</button>
      </div>
    );
  }
}
