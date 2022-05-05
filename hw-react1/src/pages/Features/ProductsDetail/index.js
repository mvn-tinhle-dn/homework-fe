import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../../../stores/cartSlice";

export default function ProductsDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((result) => setProduct(result));
  }, [id]);

  const handleClickAddCart = (e, item) => {
    e.preventDefault();
    dispatch(addCart(item));
  };
    
  return (
    <div className="container">
      {product.id === undefined ?
        (
          <div> Loading... </div>
        ) :
        (
          <div className="product-detail wrap-content">
            <img className="product-image" src={product.image} alt={product.title} />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">Price: {product.price} $</p>
              <p className="product-category">{product.category}</p>
              <p className="product-description">{product.description}</p>
              <button
                className="btn btn-buy"
                onClick={(e) => handleClickAddCart(e, product)}
              >
                Add cart
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
