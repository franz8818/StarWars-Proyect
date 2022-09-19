import React from "react";
import { Link } from "react-router-dom";

const CardPlanets = () => {
  return (
    <>
  <div className="d-flex p-2 bd-highlight"></div>
    <div className="card" style={{width: "18rem"}}>
  <img src="https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nombre</h5>
    <p className="card-text">Clima</p>
    <Link to="#" className="btn btn-primary"> ¡Leer más! </Link>
     </div>
    </div>
  </> 
  );
};

export default CardPlanets;