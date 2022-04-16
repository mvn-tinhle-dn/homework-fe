import React from "react";

export default class PostItemComponent extends React.Component {
  render() {
    const { src, title, content, date } = this.props;
    return (
      <li className="post-item col-4">
        <a href="." className="item-img">
          <img src={src} alt="" />
        </a>
        <a href="." className="post-tille">
          {title}
        </a>
        <span className="post-time">
          On
          <time dateTime="2020-09-01">{date}</time>
        </span>
        <p className="post-content">{content}</p>
      </li>
    );
  }
}
