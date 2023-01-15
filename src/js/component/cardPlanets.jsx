import React from "react";
import { Link } from "react-router-dom";

const CardPlanets = () => {
  return (
    <>
    <div className="d-flex p-2">
     <div className="card m-1">
        <img
          src="https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png"
          className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title"><b>Name</b></h5>
          <div className="d-flex flex-column"> 
          <span className="card-text">Gender</span>
          <span className="card-text">Hair color</span>
          <span className="card-text">Eye color</span>
          </div>
          <div className="d-flex">
          <Link to="/details/planet" className="btn btn-warning mt-3">
          Learn More!
          </Link>
          <button  className="btn btn-danger float-end" onClick={()=> {actions.addFav(charCard.name)}}>🤍</button>
        </div>
        </div> 
        </div>
        </div>
  </> 
  );
};

export default CardPlanets;