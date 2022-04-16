import React from "react";

export default class IntroItemComponent extends React.Component {
  render() {
    const { src, title, titleExtra } = this.props
    return (
      <li className="intro-item col-4">
        <a href="." className="item-img">
          <img
            src={src}
            alt="img-intro"
          />
        </a>
        <div className="item-text">
          <p>{title}</p>
          <p>{titleExtra}</p>
        </div>
      </li>
    );
  }
}
