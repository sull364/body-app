import "./App.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [transformSetting, setTransformSetting] = useState({});

  const navSlide = () => {
    console.log("helloooo"); // delete later
    if (transformSetting.transform === undefined)
      return setTransformSetting({ transform: "translateX(0%)" });
    else setTransformSetting({});
  };

  return (
    <div className="Nav">
      <nav>
        <div className="logo">
          <h1>HEADER</h1>
        </div>

        <ul className="nav-links" style={transformSetting}>
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

        <div className="burger" onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
