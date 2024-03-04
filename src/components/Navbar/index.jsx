import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { TextConstant } from "../../utils/textConstant";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="leftMenu">
        <span className="logo">
          <Link to="/">{TextConstant.Dashboard}</Link>
        </span>
      </div>
      <div className="rightMenu">
        <ul>
          <li>
            <Link to="/todo">{TextConstant.ToDo}</Link>{" "}
          </li>
          <li>
            <Link to="/weather">{TextConstant.Weather}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
