import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaSignOutAlt, FaHeart, FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../../../logo.svg";
import UserAuth from "../../../hooks/UserAuth";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { logout } = UserAuth();
  const favs = useSelector((state) => state.favorite.value);
  const prods = useSelector((state) => state.cart.value);

  return (
    <>
      <header className="header wrap-content wrap-between">
        <div className="wrap-content">
          <NavLink to="/">
            <img src={logo} alt="" className="header-logo" />
          </NavLink>
          <nav className="header-links ">
            <ul className="header-list wrap-content">
              <li className="header-item">
                <NavLink activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="header-actions-list wrap-content">
          <li>
            <NavLink activeClassName="active" to="/account">
              <FaUserAlt />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/heart">
              <FaHeart />
              <span className="count-fav">{favs.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/cart">
              <FaCartPlus />
              <span className="count-fav">{prods.length}</span>
            </NavLink>
          </li>
          {user === null ? (
            <li>
              <NavLink activeClassName="active" to="/auth/login">
                <FaSignOutAlt /> Login{" "}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                activeClassName="active"
                onClick={() => logout()}
                to="/auth/login"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </NavLink>
            </li>
          )}
        </ul>
      </header>
    </>
  );
}
