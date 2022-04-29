import { Link } from "react-router-dom";
import logo from '../../../logo.svg';
import '../../../assets/scss/layout/_all.scss';

export default function Header() {
  return (
    <div className="header wrap-content">
      <Link to="/"><img src={logo} alt="" className="header-logo" /></Link>
      <nav className="header-links ">
        <ul className="header-list wrap-content">
          <li className="header-item">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">AboutUs</Link>
          </li>
          <li>
            <Link to="/user-list">UserList</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
