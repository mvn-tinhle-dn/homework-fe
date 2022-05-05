import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/layouts/Header/index.js";
import Footer from "../components/layouts/Footer/index.js";
import '../assets/scss/styles.scss';
import PrivateRoute from "../core/guards/PrivateRoute/index.js";


const Auth = React.lazy(() => import('../pages/Auth/index.js'));
const Account = React.lazy(() => import('../pages/Account/index.js'));
const Features = React.lazy(() => import('../pages/Features/index.js'));

export default function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Features />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </Router>
  )
}
