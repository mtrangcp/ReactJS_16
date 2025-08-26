import { Component } from "react";
import ItemB1 from "./ItemB1";
import "../styles/Bai01.css";

export default class Bai01 extends Component {
  arrSubject: string[] = ["Toan", "Van", "Anh", "Hoa", "Sinh"];
  render() {
    return (
      <div className="container">
        <h1>Danh sach mon hoc</h1>
        {this.arrSubject.map((el) => {
          return <ItemB1 subject={el}></ItemB1>;
        })}
      </div>
    );
  }
}
