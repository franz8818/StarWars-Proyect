import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CardPlanet = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="lista-card p-2">
      {store.planets.map((item, id) => <div key={id}>
      <div className="planet card m-3">
        <img
          src="https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>{item.name}</b>
          </h5>
          <div className="botones d-flex justify-content-center">
          <Link to={"/detailsPlanets/"+id} className="btn btn-warning">
            info
          </Link>
          <button  className="btn btn-danger float-end" onClick={()=> {actions.addFav(charCard.name)}}>♥︎</button>
          </div>
        </div>
      </div>
    </div>)}
  </div>
  );
};

export default CardPlanet;