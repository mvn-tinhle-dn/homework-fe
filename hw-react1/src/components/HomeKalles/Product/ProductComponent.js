import React from "react";
import ProductItemComponent from "./ProductItemComponent";

export default class ProductComponent extends React.Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: "Elip Power Max",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg",
        price: "$100,000",
      },
      {
        id: 2,
        name: "Nike As Dri-Fit Training",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg",
        price: "$55,000",
      },
      {
        id: 3,
        name: "NIKE Trophy Training",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg",
        price: "$65,000",
      },
      {
        id: 4,
        name: "Calvin Klein Training",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg",
        price: "$15,000",
      },
    ],
  };
  render() {
    const arrProduct = this.state.arrProduct;
    return (
      <section className="section-products">
        <div className="container">
          <div className="types-products-menu">
            <ul className="type-product-list">
              <li className="type-product-item">Feature</li>
              <li className="type-product-item">New Arrival</li>
              <li className="type-product-item">On Sale</li>
            </ul>
          </div>
          <ul className="products-list wrap-content">
            {arrProduct.map((item) => {
              return (
                <ProductItemComponent
                  key={item.id}
                  src={item.src}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}
