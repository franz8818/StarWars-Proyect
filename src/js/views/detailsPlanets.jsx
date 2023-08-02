import React, { useContext, useEffect,} from "react";
import "../../styles/home.css";
import "../../styles/others.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";

const DetailsPlanets = () => {
  const { store, actions } = useContext(Context)
  console.log(store.detailsPlanet)
  const {uid} = useParams();
  useEffect(() => {
    actions.getPlanet(uid)
  },[uid])
  
    return (

      <>
      <div className="container">
        <div className="info2 card mb-3">
          <div className="d-flex g-2">
            <div className="img-info col-md-4">
              <img src={"https://starwars-visualguide.com/assets/img/planets/" + uid + ".jpg"} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body-details">
                <h1 className="card-title-detail"><b>{store.detailsPlanet.properties?.name}</b></h1>
                <div className="card-text">
                <h3 className="text-warning">features</h3>
                <h5><ul>
                  <li><b>Population:</b> {store.detailsPlanet.properties?.population}</li>
                  <li><b>Terrain:</b> {store.detailsPlanet.properties?.terrain}</li>
                  <li><b>Climate:</b> {store.detailsPlanet.properties?.climate}</li>
                  <li><b>Surface Water:</b> {store.detailsPlanet.properties?.surface_water}</li>
                  <li><b>Rotation Period:</b> {store.detailsPlanet.properties?.rotation_period}</li>
                  <li><b>Orbital Period:</b> {store.detailsPlanet.properties?.orbital_period}</li>
                  <li><b>Diameter:</b> {store.detailsPlanet.properties?.diameter}</li>
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
  DetailsPlanets.propTypes = {match:PropTypes.object}
  export default DetailsPlanets;