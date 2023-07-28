import React from "react";
import { Link } from "react-router-dom";

const CardPlanet = () => {
  return (
    <>
      <div className="lista p-1">
      <div className="planet card m-3">
        <img
          src="https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>Name</b>
          </h5>
          <div className="botones d-flex justify-content-center">
          <Link to="/detailsPlanets/" className="btn btn-warning">
            info
          </Link>
          <button  className="btn btn-danger float-end" onClick={()=> {actions.addFav(charCard.name)}}>♥︎</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardPlanet;
