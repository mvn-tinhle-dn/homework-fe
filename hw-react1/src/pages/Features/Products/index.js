import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiProductGetList } from "../../../api/product/product.api";
import { toggle } from "../../../stores/favSlice";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favorite.value);

  useEffect(() => {
    apiProductGetList()
      .then((response) => response.data)
      .then((result) => setProducts(result));
  }, []);

  const handleClickFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
  };

  return (
    <div className="container">
      <h1 className="products-title">Menu Products</h1>
      <ul className="product-list wrap-content wrap wrap-around">
        {products.map((item) => {
          return (
            <li key={item.id} className="col-3">
              <Link to={`/products/${item.id}`}>
                <img className="product-image" src={item.image} alt={item.title} />
              </Link>
              <div className="product-info">
                <h3 className="product-title">
                  <Link to={`/products/${item.id}`}>{item.title}</Link>
                </h3>
                <p className="product-price">{item.price} $</p>
                <span
                  className={`${favs.includes(item.id) ? "active" : ""} product-heart`}
                  onClick={(e) => handleClickFav(e, item.id)}
                >
                  <FaHeart />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
