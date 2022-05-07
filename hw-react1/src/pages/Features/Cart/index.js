import { useSelector } from "react-redux";

export default function Cart() {
  const prods = useSelector((state) => state.cart.value);
  
  return (
    <div className="container">
      <h1 className="cart-title">Cart Products</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {prods.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt={item.title} className="product-img" />
                </td>
                <td>{item.title}</td>
                <td>{item.price} $</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
