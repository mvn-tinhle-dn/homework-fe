import React from "react";
export default class ProductItemComponent extends React.Component {
  render() {
    const { src, name, price } = this.props;
    return (
      <li className="product-item col-3">
        <div className="product-image">
          <a href=".">
            <img src={src} alt="" className="product-img" />
          </a>
          <i className="fa-solid fa-heart"></i>
          <div className="item-btn">
            <a href="." className="btn-product btn-primary">
              Quick View
            </a>
            <a href="." className="btn-product btn-primary">
              Add Cart
            </a>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-tille">{name}</h3>
          <span className="product-price">{price}</span>
          <ul className="product-color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </li>
    );
  }
}
