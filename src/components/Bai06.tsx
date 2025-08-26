import { Component } from "react";
import "../styles/Bai06.css";

type StateType = {
  isDarkMode: boolean;
};

export default class Bai06 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  handleChangTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    return (
      <div className={this.state.isDarkMode ? "dark theme" : "theme"}>
        {this.state.isDarkMode ? (
          <h4>Che do toi dang bat</h4>
        ) : (
          <h4>Che do sang dang bat</h4>
        )}

        <button onClick={this.handleChangTheme}>Chuyen Theme</button>
      </div>
    );
  }
}
