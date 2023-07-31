import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import "../../styles/others.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { PropTypes } from "prop-types";

const DetailsCharacters = (props) => {
  const { store, actions } = useContext(Context)
  // console.log(store.character)
  const [character, setCharacter] = useState([])
  const params = useParams();
  useEffect(() => {
    setCharacter(actions.getCharacter(params.uid))
  })
  return (
    <>
      <div className="container">
        <div className="info card mb-3">
          <div className="d-flex g-2">
            <div className="img-info col-md-4">
              <img src={"https://starwars-visualguide.com/assets/img/characters/" + params.uid + ".jpg"} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title-detail"><b>Luke Skywalker{store.detailsCharacter?.name}</b></h1>
                <div className="card-text">
                <h3 className="text-warning">features</h3>
                <h5><ul>
                  <li><b>Gender:</b> {character?.gender}Male</li>
                  <li><b>Birth year:</b> {character?.birth_year}19 BBY</li>
                  <li><b>Height:</b> {character?.height}172cm</li>
                  <li><b>Mass:</b> {character?.mass}77kg</li>
                  <li><b>Skin color:</b> {character?.skin_color}Fair</li>
                  <li><b>Eye color:</b> {character?.eye_color}Blue</li>
                  <li><b>Hair color:</b> {character?.hair_color}Blond</li>
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