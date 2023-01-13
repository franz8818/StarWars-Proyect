import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-dark mb-3">
      <Link to="/">
      <div className="ms-5"> 
      <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" height="38" />
      </div>
      </Link>
      <div className="ml-auto"> 
      <div className="dropdown">
  <button className="btn btn-warning dropdown-toggle mx-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        {/* <Link to="/favoritos">
          <button className="btn btn-primary"> Favoritos </button>
        </Link> */}
      </div>
    </nav>
    </>
  );
};
