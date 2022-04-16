import React from "react";
export default class SlideShowComponent extends React.Component {
  render() {
    return (
      <section className="section-slideshow">
        <ul className="slideshow-list">
          <li className="slideshow-item">
            <img
              src="https://themes.the4.co/kalles-html/assets/images/home-sport/slide-02.jpg"
              alt="slide-show-1"
            />
          </li>
        </ul>
        <div className="container">
          <div className="tille-intro">
            <h5>Tranform your life today</h5>
            <h1>
              Lose fat,get fit <br />
              have fun!
            </h1>
            <a href="." className="btn btn-primary">
              Explore Now
            </a>
          </div>
          <ul className="paging">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
