
import { Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Products from "./Products";
import ProductsDetail from "./ProductsDetail";

export default function Features() {
  return (
    <>
      <Switch>
        <Route path="/products/:id">
          <ProductsDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}
