import "./Container.css";
import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decreaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  increaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="main">
          <div>
            <button onClick={this.decreaseCount} className="btn font_size_80 ">
              -
            </button>
          </div>
          <div id="changenumber" className="font_size_80">
            {this.state.count}
          </div>
          <div>
            <button onClick={this.increaseCount} className="btn font_size_80">
              +
            </button>
          </div>
        </div>
        {!!this.state.count && (
          <div className="reset_container">
            <button
              onClick={this.reset}
              id="clear"
              style={{ backgroundColor: "lightgreen" }}
              className="btn_reset"
            >
              RESET
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Container;
