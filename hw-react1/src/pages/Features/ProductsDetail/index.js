import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function ProductsDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((result) => setProduct(result));
  }, [id]);

  return (
    <div className="container">
      <div className='product-detail wrap-content'>
        <img className='product-image' src={product.image} alt={product.title} />
        <div className='product-info'>
          <h3 className='product-title'>{product.title}</h3>
          <p className='product-price'>Price: {product.price} $</p>
          <p className='product-category'>{product.category}</p>
          <p className='product-description'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
