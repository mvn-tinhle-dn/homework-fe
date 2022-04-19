import React from "react";
import "./index.scss";
import CircleComponent from "../../components/CircleComponent";
export default class Home extends React.Component {
  render() {
    return (
      <>
        <p>Home</p>
        <div className="circleList">
          <CircleComponent num={10} />
          <CircleComponent num={20} />
          <CircleComponent num={30} />
        </div>
      </>
    );
  }
}
