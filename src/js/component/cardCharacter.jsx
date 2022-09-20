import React from "react";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  return (
    <>
    <div className="d-flex p-2 bd-highlight"></div>
    <div className="card" style={{width: "18rem"}}>
  <img src="https://imgwoman.elperiodico.com/73/3c/c0/ewan-mcgregor-caracterizado-obi-wan-kenobi.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nombre</h5>
    <p className="card-text">Color de pelo</p>
    <Link to="/home" className="btn btn-primary">¡Leer más!</Link>
  </div>
</div>
  </> 
  );
};

export default CardCharacter;
