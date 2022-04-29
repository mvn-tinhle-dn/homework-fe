import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
export default function Features () {
  return(
    <>
       <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
        </Switch>
    </>
  )
}
