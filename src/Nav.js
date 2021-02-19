import "./App.scss";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="Nav">
      <nav>
        <div className="logo">
          <h1>HEADER</h1>
        </div>

        <ul className="nav-links">
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/about">
            <li>About </li>
          </Link>
          <Link to="/contact">
            <li>Contact </li>
          </Link>
        </ul>

        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
