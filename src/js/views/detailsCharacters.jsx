import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import "../../styles/others.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";

const DetailsCharacters = () => {
  const { store, actions } = useContext(Context)
  console.log(store.detailsCharacter)
  // const [character, setCharacter] = useState([])
  const {uid} = useParams();
  useEffect(() => {
    actions.getCharacter(uid)
  },[uid])
  return (
    <>
      <div className="container">
        <div className="info card mb-3">
          <div className="d-flex g-2">
            <div className="img-info col-md-4">
              <img src={"https://starwars-visualguide.com/assets/img/characters/" + uid + ".jpg"} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body-details">
                <h1 className="card-title-detail"><b>{store.detailsCharacter.properties?.name}</b></h1>
                <div className="card-text">
                <h3 className="text-warning">features</h3>
                <h5><ul>
                  <li><b>Gender:</b> {store.detailsCharacter.properties?.gender}</li>
                  <li><b>Birth year:</b> {store.detailsCharacter.properties?.birth_year}</li>
                  <li><b>Height:</b> {store.detailsCharacter.properties?.height}</li>
                  <li><b>Mass:</b> {store.detailsCharacter.properties?.mass}</li>
                  <li><b>Skin color:</b> {store.detailsCharacter.properties?.skin_color}</li>
                  <li><b>Eye color:</b> {store.detailsCharacter.properties?.eye_color}</li>
                  <li><b>Hair color:</b> {store.detailsCharacter.properties?.hair_color}</li>
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
DetailsCharacters.propTypes = {match:PropTypes.object}
export default DetailsCharacters;