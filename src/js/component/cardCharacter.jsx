import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CardCharacter = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="lista p-1">
      {store.characters.map((item) => <div key={item.uid}>
      <div className="character card m-3">
        <img
          src={"https://starwars-visualguide.com/assets/img/characters/"+item.uid+".jpg"}
          className="card-img-top"
        />
        <div className="card-body">  
          <h6 className="card-title"> <b>{item.name} </b> </h6>
          <div className="botones d-flex justify-content-center">
          <Link to={"/detailsCharacters/"+item.uid} className="btn btn-warning">
            info
          </Link>
          <button className="btn btn-danger float-end" onClick={()=> {actions.addFav(charCard.name)}}>♥︎</button>
          </div>
        </div>
      </div>
      </div>)}
      </div>
  );
};
export default CardCharacter;