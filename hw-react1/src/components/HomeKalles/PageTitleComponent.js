import React from "react";

export default class PageTitleComponent extends React.Component {
  render() {
    const { title, description } = this.props;
    return (
      <section className="section-page-tille">
        <div className="container">
          <h2 className="page-tille">{title}</h2>
          <div className="tille-separation">
            <span>--</span>
            <i className="fa-solid fa-trophy"></i>
            <span>--</span>
          </div>
          <span className="tille-desciption">{description}</span>
        </div>
      </section>
    );
  }
}
