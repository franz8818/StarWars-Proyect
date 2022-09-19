import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span
          className="logo"
          Link
          to="https://marcas-logos.net/wp-content/uploads/2019/11/Star-Wars-Logo-1.png"
        >
          {" "}
          STAR WARS{" "}
        </span>{" "}
      </Link>{" "}
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary"> Favoritos </button>{" "}
        </Link>{" "}
      </div>{" "}
    </nav>
  );
};
