import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/about-us">AboutUs</Link>
        </li>
        <li>
          <Link to="/contact-us">ContactUs</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default Sidebar;
