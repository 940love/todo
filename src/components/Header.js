import React from "react";
import { NavLink } from "react-router-dom";
import "./Todo.scss";
const onRemove = null;
const onToggle = null;
const Header = () => {
  return (
    <div className="header">
      <NavLink to="/todos" className="nav">
        todos
      </NavLink>
      <NavLink to="/complete" className="nav">
        complete
      </NavLink>
    </div>
  );
};
export default Header;
