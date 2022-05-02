
import { Switch, Route } from "react-router-dom";
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}
