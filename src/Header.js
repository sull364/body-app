import "./App.scss";

function Header() {
  
  return (
    <div className="Header">
      <nav>
        <div className="logo">
          <h1>HEADER</h1>
        </div>

        <ul className="nav-links" >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
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

export default Header;
