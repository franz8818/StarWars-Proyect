import React from "react";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  return (
    <>
    <div className="lista d-flex p-1">
      <div className="card m-2">
        <img
          src="https://media.vandalsports.com/i/1080x1080/11-2020/202011910389_1.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-title">
            <b>Name</b>
          </h6>
          <div className="info d-flex flex-column">
            <span className="card-text">Gender</span>
            <span className="card-text">Hair color</span>
            <span className="card-text">Eye color</span>
          </div>
          <Link to="/details/character" className="btn btn-warning mt-3">
            Learn More!
          </Link>
        </div>
      </div>
      
      <div className="card m-2">
        <img
          src="https://media.vandalsports.com/i/1080x1080/11-2020/202011910389_1.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>Name</b>
          </h5>
          <div className="d-flex flex-column">
            <span className="card-text">Gender</span>
            <span className="card-text">Hair color</span>
            <span className="card-text">Eye color</span>
          </div>
          <Link to="/details/character" className="btn btn-warning mt-3">
            Learn More!
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default CardCharacter;
