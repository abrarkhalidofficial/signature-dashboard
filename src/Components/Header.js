import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";

export default function Header({ user }) {
  return (
    <div className="header" style={!user ? { justifyContent: "center" } : null}>
      <Link to={user ? "/dashboard/" : "/"}>
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
    </div>
  );
}
