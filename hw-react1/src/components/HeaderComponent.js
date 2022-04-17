import React from "react";
class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="container-fluid">
          <nav className="header-nav wrap-content">
            <i className="fa-solid fa-bars"></i>
            <a href="." className="logo">
              <img
                src="https://themes.the4.co/kalles-html/assets/images/svg/kalles.svg"
                alt="logo"
              />
            </a>
            <ul className="header-menu wrap-content">
              <li><a href=".">DEMO</a></li>
              <li><a href=".">SHOP</a></li>
              <li><a href=".">PRODUCT</a></li>
              <li><a href=".">SALE</a></li>
              <li><a href=".">PORTFOLIO</a></li>
              <li><a href=".">LOOKBOOK</a></li>
              <li><a href=".">BLOG</a></li>
            </ul>
            <ul className="header-actions wrap-content">
              <li>
                <a href="."><i className="fa-solid fa-magnifying-glass"></i></a>
              </li>
              <li>
                <a href="."><i className="fa-solid fa-user"></i></a>
              </li>
              <li>
                <a href="."><i className="fa-solid fa-heart"></i></a>
              </li>
              <li>
                <a href="."><i className="fa-solid fa-cart-arrow-down"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default HeaderComponent;
