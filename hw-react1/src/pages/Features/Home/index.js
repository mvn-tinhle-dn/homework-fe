import React, { useState } from "react";

export default function Home() {
  const [pros] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg",
      title: "Product 1",
      price: 2000,
      fav: false,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg",
      title: "Product 2",
      price: 3000,
      fav: false,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg",
      title: "Product 3",
      price: 4000,
      fav: false,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg",
      title: "Product 4",
      price: 5000,
      fav: false,
    },
  ]);
  
  return (
    <>
      <div className="slide-show container-fluid">
        <img
          src="https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg"
          alt=""
        />
      </div>

      <div className="product-show container">
        <ul className="product-show-list wrap-content">
          {pros.map((item) => {
            return (
              <li className="product-show-item col-3" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="pros-info">
                  <h3 className="pros-title">{item.title}</h3>
                  <p className="pros-price">{item.price}</p>
                  <button className="btn btn-buy">Buy</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
