import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CardPlanet = () => {
  const { store, actions } = useContext(Context)
  
  return (
    <div className="lista-card p-2">
      {store.planets.map((item) => <div key={item.uid}>
      <div className="planet card m-3">
        {item.uid == 1 ?
          <img
          src= "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
          className="card-img-top"
        />    
      :
      
      <img
        src= {"https://starwars-visualguide.com/assets/img/planets/"+item.uid+".jpg"}
        className="card-img-top"
      />
      }
        <div className="card-body">
          <h5 className="card-title">
            <b>{item.name}</b>
          </h5>
          <div className="botones d-flex justify-content-center">
          <Link to={"/detailsPlanets/"+ item.uid} className="btn btn-warning">
            info
          </Link>
          <button className="btn btn-danger float-end" onClick={()=> {actions.addFav(item.name)}}>♥︎</button>
          </div>
        </div>
      </div>
    </div>)}
  </div>
  );
};

export default CardPlanet;