import React from "react";

export default class ServiceComponent extends React.Component {
  render() {
    return (
      <section className="section-services">
        <div className="container">
          <ul className="service-list wrap-content">
            <li className="service-item col-4">
              <i className="fa-solid fa-truck-fast"></i>
              <div className="service-content">
                <h3>FREE SHIPPING UK&UK</h3>
                <p>Free shipping on all orders abov $100</p>
              </div>
            </li>
            <li className="service-item col-4">
              <i className="fa-solid fa-headphones-simple"></i>
              <div className="service-content">
                <h3>FSUPPORT 24/7</h3>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </li>
            <li className="service-item col-4">
              <i className="fa-solid fa-coins"></i>
              <div className="service-content">
                <h3>30 DAYS MONEY BACK</h3>
                <p>Simply return it within 30 days for an exchange.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
