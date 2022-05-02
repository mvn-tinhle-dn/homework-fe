import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div className="container">
      <ul className='product-list wrap-content wrap wrap-around'>
        {
          products.map((item) => {
            return (
              <li key={item.id} className="col-3">
                <Link to={`/products/${item.id}`}><img className='product-image' src={item.image} alt={item.title} /></Link>
                <div className='product-info'>
                  <h3 className='product-title'><Link to={`/products/${item.id}`}>{item.title}</Link></h3>
                  <p className='product-price'>{item.price} $</p>
                </div>
              </li>
            )

          })
        }
      </ul>
    </div>
  )
}
