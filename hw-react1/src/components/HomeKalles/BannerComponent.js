import React from "react";

export default class BannerComponent extends React.Component {
  render() {
    return (
      <section className="section-banner">
        <a href="." className="banner-imgage">
          <img
            src="https://themes.the4.co/kalles-html/assets/images/home-sport/full-width-banner-desktop.jpg"
            alt="banner-imgage"
          />
        </a>
        <div className="container">
          <div className="tille-intro">
            <p>Black friday</p>
            <h2>
              Save 50% Off <br />
              <span>First Onille Purchase</span>
            </h2>
            <a href="." className="btn-banner">
              View promotion
            </a>
          </div>
        </div>
      </section>
    );
  }
}
