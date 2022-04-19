import React from "react";
export default class CircleComponent extends React.Component {
  state = {
    count: this.props.num,
    btnStatus: "start",
  };

  handleSwitchBtn(status) {
    this.setState({
      btnStatus: status,
    });
    if (this.state.btnStatus === "start") {
      this.starTimer();
    } else {
      clearInterval(this.timer);
    }
  }

  componentDidUpdate() {
    if (this.state.count === 0) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  starTimer() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div className="circleItem">
        {this.state.btnStatus === "start" ? (
          <button className="btn" onClick={this.handleSwitchBtn.bind(this, "stop")}>
            Start
          </button>
        ) : (
          <button className="btn" onClick={this.handleSwitchBtn.bind(this, "start")}>
            Stop
          </button>
        )}
        <div className="circle">{this.state.count}</div>
      </div>
    );
  }
}
