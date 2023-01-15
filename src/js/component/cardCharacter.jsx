import React from "react";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  return (
    <>
    <div className="lista d-flex p-1">
      <div className="character card m-2">
        <img
          src="https://media.vandalsports.com/i/1080x1080/11-2020/202011910389_1.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-title">
            <b>Name</b>
          </h6>
          <div className="info d-flex flex-column">
            <span className="card-text"><b>Gender</b></span>
            <span className="card-text"><b>Hair color</b></span>
            <span className="card-text"><b>Eye color</b></span>
          </div>
          <div className="botones d-flex justify-content-center">
          <Link to="/details/character" className="btn btn-warning">
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

export default CardCharacter;
