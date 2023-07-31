import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/others.css";

const DetailsPlanets = () => {
    return (

      <>
      <div className="container">
        <div className="info2 card mb-3">
          <div className="d-flex g-2">
            <div className="img-info col-md-4">
              <img src={".jpg"} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title-detail"><b>Naboo</b></h1>
                <div className="card-text">
                <h3 className="text-warning">features</h3>
                <h5><ul>
                  <li><b>Population:</b>4'500.000.000</li>
                  <li><b>Terrain:</b>Grassy Hills, Swamps, Forests, Mountains</li>
                  <li><b>Climate:</b>Temperate</li>
                  <li><b>Surface Water:</b>12%</li>
                  <li><b>Rotation Period:</b>26 days</li>
                  <li><b>Orbital Period:</b>312 days</li>
                  <li><b>Diameter:</b>12,120km</li>
                </ul></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
    );
  };
  
  export default DetailsPlanets;